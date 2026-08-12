import assert from 'assert';
import { captureLead } from '../src/lib/lead-capture.ts';
import {
  LEAD_STRING_LIMITS,
  validateLeadCaptureRequest,
} from '../src/lib/lead-validation.ts';
import {
  checkLeadRateLimit,
  createMemoryRateLimitStore,
} from '../src/lib/rate-limit.ts';
import {
  createResourceAccessToken,
  verifyResourceAccessToken,
} from '../src/lib/resource-access.ts';
import { POST as postLead } from '../src/app/api/lead/route.ts';
import { GET as getResource } from '../src/app/api/resources/[resourceId]/route.ts';

process.env.NODE_ENV = 'test';
process.env.RESOURCE_DOWNLOAD_SECRET = 'test-resource-download-secret-at-least-32-characters';
delete process.env.RESEND_API_KEY;
delete process.env.LEAD_CAPTURE_API_KEY;
delete process.env.DATABASE_URL;

const RESOURCE_ID = 'ai-prompt-kit-ops-v1';

function fakeLeadRecord(params) {
  const now = new Date().toISOString();
  return {
    id: '00000000-0000-4000-8000-000000000001',
    email: params.email,
    resource_id: params.resource_id,
    source_page: params.source_page,
    consent: params.consent !== false,
    created_at: now,
    updated_at: now,
    delivery_status: 'pending',
  };
}

async function testPersistedStringValidation() {
  const base = { email: 'security@example.com' };

  assert.strictEqual(validateLeadCaptureRequest(base).valid, true);
  assert.strictEqual(
    validateLeadCaptureRequest({ email: 'a'.repeat(LEAD_STRING_LIMITS.email) }).valid,
    true,
    'email exactly at maximum must pass length validation'
  );
  assert.deepStrictEqual(
    validateLeadCaptureRequest({ email: 'a'.repeat(LEAD_STRING_LIMITS.email + 1) }),
    { valid: false, field: 'email', reason: 'length' }
  );

  for (const field of ['source', 'utm_source', 'utm_medium', 'utm_campaign', 'referrer']) {
    const maximum = LEAD_STRING_LIMITS[field];
    assert.strictEqual(
      validateLeadCaptureRequest({ ...base, [field]: 'x'.repeat(maximum) }).valid,
      true,
      `${field} exactly at maximum must pass`
    );
    assert.deepStrictEqual(
      validateLeadCaptureRequest({ ...base, [field]: 'x'.repeat(maximum + 1) }),
      { valid: false, field, reason: 'length' }
    );
    assert.strictEqual(validateLeadCaptureRequest({ ...base, [field]: '' }).valid, true);
    assert.strictEqual(validateLeadCaptureRequest({ ...base, [field]: null }).valid, true);
    assert.strictEqual(validateLeadCaptureRequest({ ...base, [field]: undefined }).valid, true);
  }

  let persistenceCalls = 0;
  for (const field of Object.keys(LEAD_STRING_LIMITS)) {
    const invalidPayload = {
      ...base,
      [field]: 'x'.repeat(LEAD_STRING_LIMITS[field] + 1),
    };
    const result = await captureLead(invalidPayload, {
      upsertLead: async (params) => {
        persistenceCalls += 1;
        return fakeLeadRecord(params);
      },
      checkLeadRateLimit: async () => ({ allowed: true, retryAfterSeconds: 0 }),
    });
    assert.strictEqual(result.success, false);
    assert.strictEqual(result.error_code, 'validation_error');
  }
  assert.strictEqual(persistenceCalls, 0, 'oversized values must never reach persistence');

  let persistedParams;
  const exactMaximumResult = await captureLead(
    {
      email: `${'a'.repeat(249)}@x.co`,
      source: 's'.repeat(LEAD_STRING_LIMITS.source),
      utm_source: 'u'.repeat(LEAD_STRING_LIMITS.utm_source),
      utm_medium: 'm'.repeat(LEAD_STRING_LIMITS.utm_medium),
      utm_campaign: 'c'.repeat(LEAD_STRING_LIMITS.utm_campaign),
      referrer: 'r'.repeat(LEAD_STRING_LIMITS.referrer),
      consent: true,
    },
    {
      upsertLead: async (params) => {
        persistedParams = params;
        return fakeLeadRecord(params);
      },
      checkLeadRateLimit: async () => ({ allowed: true, retryAfterSeconds: 0 }),
    }
  );
  assert.strictEqual(exactMaximumResult.success, true);
  assert.strictEqual(persistedParams.source_page.length, LEAD_STRING_LIMITS.source);
  assert.strictEqual(persistedParams.referrer.length, LEAD_STRING_LIMITS.referrer);
}

async function testDistributedRateLimiting() {
  const ipStore = createMemoryRateLimitStore();
  for (let index = 0; index < 5; index += 1) {
    const result = await checkLeadRateLimit(
      { ip: '203.0.113.10', email: `person-${index}@example.com` },
      ipStore
    );
    assert.strictEqual(result.allowed, true, `IP request ${index + 1} should be below threshold`);
  }
  const ipLimited = await checkLeadRateLimit(
    { ip: '203.0.113.10', email: 'person-6@example.com' },
    ipStore
  );
  assert.strictEqual(ipLimited.allowed, false);
  assert.strictEqual(ipLimited.limitedBy, 'ip');

  const emailStore = createMemoryRateLimitStore();
  for (let index = 0; index < 3; index += 1) {
    const result = await checkLeadRateLimit(
      { ip: `198.51.100.${index}`, email: 'same@example.com' },
      emailStore
    );
    assert.strictEqual(result.allowed, true);
  }
  const emailLimited = await checkLeadRateLimit(
    { ip: '198.51.100.99', email: 'same@example.com' },
    emailStore
  );
  assert.strictEqual(emailLimited.allowed, false);
  assert.strictEqual(emailLimited.limitedBy, 'email');

  const isolated = await checkLeadRateLimit(
    { ip: '203.0.113.11', email: 'different@example.com' },
    ipStore
  );
  assert.strictEqual(isolated.allowed, true, 'distinct identifiers must remain isolated');

  const unavailableStore = {
    async consume() {
      throw new Error('backing database unavailable');
    },
  };
  await assert.rejects(
    checkLeadRateLimit({ ip: '203.0.113.12', email: 'failure@example.com' }, unavailableStore),
    /backing database unavailable/
  );

  let persistenceCalls = 0;
  const failClosed = await captureLead(
    { email: 'fail-closed@example.com', ip: '203.0.113.12', consent: true },
    {
      upsertLead: async (params) => {
        persistenceCalls += 1;
        return fakeLeadRecord(params);
      },
      checkLeadRateLimit: async () => {
        throw new Error('shared state unavailable');
      },
    }
  );
  assert.strictEqual(failClosed.success, false);
  assert.strictEqual(failClosed.error_code, 'service_unavailable');
  assert.strictEqual(persistenceCalls, 0);

  let fourthResponse;
  for (let index = 0; index < 4; index += 1) {
    fourthResponse = await postLead(
      new Request('http://localhost/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': '192.0.2.44',
        },
        body: JSON.stringify({ email: 'route-limit@example.com', consent: true }),
      })
    );
  }
  assert.strictEqual(fourthResponse.status, 429);
  assert.ok(Number(fourthResponse.headers.get('retry-after')) > 0);

  process.env.NODE_ENV = 'production';
  const productionFailureResponse = await postLead(
    new Request('http://localhost/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '192.0.2.45',
      },
      body: JSON.stringify({ email: 'production-failure@example.com', consent: true }),
    })
  );
  process.env.NODE_ENV = 'test';
  assert.strictEqual(
    productionFailureResponse.status,
    503,
    'production must fail closed when the distributed backing store is unavailable'
  );
}

async function testBodySizeEnforcement() {
  const oversizedBody = JSON.stringify({
    email: 'body-size@example.com',
    source: 'x'.repeat(11 * 1024),
  });
  const request = new Request('http://localhost/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: oversizedBody,
  });
  assert.strictEqual(request.headers.has('content-length'), false);

  const response = await postLead(request);
  assert.strictEqual(response.status, 400);
  assert.match((await response.json()).message, /quá lớn/);
}

async function testResourceAuthorization() {
  const context = { params: Promise.resolve({ resourceId: RESOURCE_ID }) };

  const unauthorized = await getResource(
    new Request(`http://localhost/api/resources/${RESOURCE_ID}`),
    context
  );
  assert.strictEqual(unauthorized.status, 401);

  const validToken = createResourceAccessToken(RESOURCE_ID, 'lead-123');
  const authorized = await getResource(
    new Request(`http://localhost/api/resources/${RESOURCE_ID}?token=${validToken}`),
    context
  );
  assert.strictEqual(authorized.status, 200);
  assert.strictEqual(authorized.headers.get('content-type'), 'application/pdf');
  assert.strictEqual(authorized.headers.get('cache-control'), 'private, no-store');

  const forgedToken = `${validToken.slice(0, 20)}x${validToken.slice(21)}`;
  const forged = await getResource(
    new Request(`http://localhost/api/resources/${RESOURCE_ID}?token=${forgedToken}`),
    context
  );
  assert.strictEqual(forged.status, 403);

  const expiredToken = createResourceAccessToken(RESOURCE_ID, 'lead-123', {
    now: 1,
    ttlSeconds: 1,
  });
  assert.strictEqual(verifyResourceAccessToken(expiredToken, RESOURCE_ID, { now: 3 }), false);
  const expired = await getResource(
    new Request(`http://localhost/api/resources/${RESOURCE_ID}?token=${expiredToken}`),
    context
  );
  assert.strictEqual(expired.status, 403);

  const completedLead = await captureLead(
    { email: 'authorized-flow@example.com', consent: true },
    {
      upsertLead: async (params) => fakeLeadRecord(params),
      checkLeadRateLimit: async () => ({ allowed: true, retryAfterSeconds: 0 }),
    }
  );
  assert.strictEqual(completedLead.success, true);
  assert.ok(completedLead.access_url);
  const completedUrl = new URL(completedLead.access_url);
  const legitimateDownload = await getResource(
    new Request(`http://localhost${completedUrl.pathname}${completedUrl.search}`),
    context
  );
  assert.strictEqual(legitimateDownload.status, 200);
}

console.log('=== RUNNING P1 SECURITY REMEDIATION TESTS ===');
await testPersistedStringValidation();
console.log('PASS: persisted string validation');
await testDistributedRateLimiting();
console.log('PASS: distributed rate limiting behavior');
await testBodySizeEnforcement();
console.log('PASS: actual request body size enforcement');
await testResourceAuthorization();
console.log('PASS: gated resource authorization');
console.log('=== ALL P1 SECURITY REMEDIATION TESTS PASSED ===');

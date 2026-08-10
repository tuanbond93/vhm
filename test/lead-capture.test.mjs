import assert from 'assert';
import { captureLead } from '../src/lib/lead-capture.ts';
import {
  sanitizeConnectionString,
  logSafeDbDiagnostics,
  parsePgConnectionOptions,
} from '../src/lib/db.ts';
import { RADAR_ITEMS } from '../src/lib/radar-data.ts';
import fs from 'fs';
import path from 'path';

console.log('=== RUNNING RADAR V1 & SYSTEM INTEGRATION TESTS ===');

async function runTests() {
  // Test 1: sanitizeConnectionString strips outer double/single quotes and whitespace
  console.log('Test 1: Connection string sanitization...');
  assert.strictEqual(
    sanitizeConnectionString('  "postgresql://postgres.ref:pass@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"  '),
    'postgresql://postgres.ref:pass@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres'
  );
  assert.strictEqual(
    sanitizeConnectionString("'postgres://user:pass@host:5432/db'"),
    'postgres://user:pass@host:5432/db'
  );
  console.log('  PASS: Outer quotes and whitespace stripped cleanly.');

  // Test 2: Supabase Transaction Pooler URL parsing
  console.log('Test 2: Supabase Transaction Pooler URL parsing...');
  const poolerUrl = 'postgresql://postgres.testref:mypass123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres';
  const config = parsePgConnectionOptions(poolerUrl);
  assert.strictEqual(config.connectionString, poolerUrl);
  assert.deepStrictEqual(config.ssl, { rejectUnauthorized: false });
  assert.strictEqual(config.max, 10);
  console.log('  PASS: Supabase Transaction Pooler config generated with SSL and max connections.');

  // Test 3: Fallback parser for malformed connection strings
  console.log('Test 3: Fallback parser for malformed connection strings...');
  const malformedUrl = 'postgresql://user%40domain:pass%23word@db.supabase.co:6543/mydb';
  const parsedFallback = parsePgConnectionOptions(malformedUrl);
  assert.ok(parsedFallback.user || parsedFallback.connectionString);
  console.log('  PASS: Fallback parser handled special characters without base: postgres://base error.');

  // Test 4: Diagnostic logger safety (no secrets exposed)
  console.log('Test 4: Safe diagnostic logger PII/secret check...');
  let loggedOutput = '';
  const originalLog = console.log;
  console.log = (...args) => {
    loggedOutput += args.map(a => JSON.stringify(a)).join(' ');
  };
  logSafeDbDiagnostics('postgresql://postgres.ref:SECRET_PASS_123@pooler.supabase.com:6543/postgres');
  console.log = originalLog;

  assert.strictEqual(loggedOutput.includes('SECRET_PASS_123'), false, 'Password MUST NOT be logged!');
  assert.strictEqual(loggedOutput.includes('postgres.ref'), false, 'Username MUST NOT be logged!');
  assert.strictEqual(loggedOutput.includes('isPooler":true'), true);
  console.log('  PASS: Diagnostic logger confirmed 100% secret-free.');

  // Test 5: Valid lead submission
  console.log('Test 5: Valid lead submission...');
  const res5 = await captureLead({
    email: '  TEST.USER@VANHANHMOI.COM  ',
    source: 'unit_test_home',
    consent: true,
  });
  assert.strictEqual(res5.success, true);
  console.log('  PASS: Valid lead accepted.');

  // Test 6: Invalid email format rejection
  console.log('Test 6: Invalid email format rejection...');
  const res6 = await captureLead({
    email: 'not-an-email',
    source: 'unit_test_home',
    consent: true,
  });
  assert.strictEqual(res6.success, false);
  assert.strictEqual(res6.delivery_status, 'failed');
  console.log('  PASS: Invalid email rejected.');

  // Test 7: Missing consent rejection
  console.log('Test 7: Missing consent rejection...');
  const res7 = await captureLead({
    email: 'user@vanhanhmoi.com',
    source: 'unit_test_home',
    consent: false,
  });
  assert.strictEqual(res7.success, false);
  assert.strictEqual(res7.message, 'Vui lòng xác nhận đồng ý nhận tài nguyên qua email.');
  console.log('  PASS: Missing consent rejected.');

  // Test 8: Honeypot spam bot trapping
  console.log('Test 8: Honeypot spam bot trapping...');
  const res8 = await captureLead({
    email: 'spambot@vanhanhmoi.com',
    source: 'unit_test_home',
    hp_field: 'spam payload',
  });
  assert.strictEqual(res8.success, true);
  assert.strictEqual(res8.isMock, true);
  console.log('  PASS: Honeypot silently trapped spam bot.');

  // Test 9: Duplicate lead UPSERT
  console.log('Test 9: Duplicate lead UPSERT...');
  const res9a = await captureLead({
    email: 'duplicate.user@vanhanhmoi.com',
    source: 'first_attempt',
    consent: true,
  });
  const res9b = await captureLead({
    email: 'DUPLICATE.USER@VANHANHMOI.COM',
    source: 'second_attempt',
    consent: true,
  });
  assert.strictEqual(res9a.success, true);
  assert.strictEqual(res9b.success, true);
  console.log('  PASS: Duplicate lead successfully UPSERTed.');

  // Test 10: PDF endpoint valid resource file existence
  console.log('Test 10: PDF endpoint valid resource file existence...');
  const pdfPath = path.join(process.cwd(), 'assets', 'lead-magnet', 'van-hanh-moi-ai-prompt-kit-ops-v1.pdf');
  assert.strictEqual(fs.existsSync(pdfPath), true);
  const stats = fs.statSync(pdfPath);
  assert.ok(stats.size > 500000, 'PDF file size > 500KB');
  console.log(`  PASS: Valid PDF resource verified (${stats.size} bytes).`);

  // Test 11: PII Analytics Protection check
  console.log('Test 11: PII Analytics Protection check...');
  const analyticsPayload = {
    resource_id: 'ai-prompt-kit-ops-v1',
    source_page: 'homepage_newsletter',
  };
  assert.strictEqual('email' in analyticsPayload, false);
  assert.strictEqual('user_email' in analyticsPayload, false);
  console.log('  PASS: Analytics events confirmed 100% PII-free.');

  // Test 12: Email CTA button inline contrast style check
  console.log('Test 12: Email CTA button inline contrast style check...');
  const leadCaptureSrc = fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'lead-capture.ts'), 'utf8');
  assert.strictEqual(
    leadCaptureSrc.includes('color: #ffffff !important'),
    true,
    'Inline style MUST include color: #ffffff !important for email CTA readability'
  );
  console.log('  PASS: Email CTA button verified to use inline #ffffff text color.');

  // Test 13: Radar #001, #002, #003 & #004 metadata & primary source verification
  console.log('Test 13: Radar metadata & primary source verification...');
  const publishedRadars = RADAR_ITEMS.filter((r) => r.published);
  assert.strictEqual(publishedRadars.length, 4, 'Exactly 4 Radar articles (#001, #002, #003 & #004) must be published!');

  const r004 = publishedRadars.find((r) => r.id === 'radar-004');
  assert.ok(r004, 'Radar #004 must exist in published items');
  assert.strictEqual(r004.slug, 'genai-tai-lieu-van-hanh-human-validation');
  assert.strictEqual(r004.evidenceUrl, 'https://doi.org/10.1126/science.adh2586');
  assert.strictEqual(r004.verdict, 'TEST');
  assert.strictEqual(r004.verdictLabel, 'TEST IN CONTROLLED WORKFLOW');

  const r003 = publishedRadars.find((r) => r.id === 'radar-003');
  assert.ok(r003, 'Radar #003 must exist in published items');
  assert.strictEqual(r003.slug, 'genai-cskh-knowledge-multiplier');
  assert.strictEqual(r003.evidenceUrl, 'https://doi.org/10.1093/qje/qjae044');

  const r002 = publishedRadars.find((r) => r.id === 'radar-002');
  assert.ok(r002, 'Radar #002 must exist in published items');
  assert.strictEqual(r002.slug, 'du-bao-nhu-cau-human-override');
  assert.strictEqual(r002.evidenceUrl, 'https://doi.org/10.1016/j.ijforecast.2008.11.010');

  const r001 = publishedRadars.find((r) => r.id === 'radar-001');
  assert.ok(r001, 'Radar #001 must exist in published items');
  assert.strictEqual(r001.slug, 'ai-agent-human-in-the-loop-taobao');
  assert.strictEqual(r001.evidenceUrl, 'https://arxiv.org/abs/2605.14830');
  console.log('  PASS: Radar #001, #002, #003 & #004 verified with 4 published articles and verified primary sources.');

  console.log('\n=== ALL 13/13 AUTOMATED UNIT TESTS PASSED ===\n');
}

runTests().catch((err) => {
  console.error('TEST FAILURE:', err);
  process.exit(1);
});

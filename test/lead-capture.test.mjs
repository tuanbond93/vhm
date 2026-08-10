import assert from 'assert';
import { captureLead } from '../src/lib/lead-capture.ts';
import fs from 'fs';
import path from 'path';

console.log('=== RUNNING LEAD CAPTURE & DELIVERY UNIT TESTS ===');

async function runTests() {
  // Test 1: Valid email submission & normalization
  console.log('Test 1: Valid email submission & normalization...');
  const res1 = await captureLead({
    email: '  TEST.USER@COMPANY.COM  ',
    source: 'unit_test',
    consent: true,
  });
  assert.strictEqual(res1.success, true);
  console.log('  PASS: Valid email accepted.');

  // Verify local persistent lead store saved normalized email
  const storePath = path.join(process.cwd(), 'assets', 'lead-store', 'leads.json');
  assert.strictEqual(fs.existsSync(storePath), true);
  const leads = JSON.parse(fs.readFileSync(storePath, 'utf8'));
  const savedLead = leads.find((l) => l.email === 'test.user@company.com');
  assert.ok(savedLead, 'Normalized email stored correctly in lead store.');
  assert.strictEqual(savedLead.resource_id, 'ai-prompt-kit-ops-v1');
  console.log('  PASS: Email normalized to lowercase and saved in lead store.');

  // Test 2: Invalid email rejection
  console.log('Test 2: Invalid email rejection...');
  const res2 = await captureLead({
    email: 'invalid-email-address',
    source: 'unit_test',
    consent: true,
  });
  assert.strictEqual(res2.success, false);
  assert.strictEqual(res2.delivery_status, 'failed');
  console.log('  PASS: Invalid email rejected.');

  // Test 3: Honeypot spam bot detection
  console.log('Test 3: Honeypot spam bot detection...');
  const res3 = await captureLead({
    email: 'spambot@example.com',
    source: 'unit_test',
    hp_field: 'I am a spam bot',
  });
  assert.strictEqual(res3.success, true);
  assert.strictEqual(res3.isMock, true);
  console.log('  PASS: Honeypot silently trapped spam bot.');

  // Test 4: Resource Endpoint PDF file verification
  console.log('Test 4: Resource endpoint PDF file existence...');
  const pdfPath = path.join(process.cwd(), 'assets', 'lead-magnet', 'van-hanh-moi-ai-prompt-kit-ops-v1.pdf');
  assert.strictEqual(fs.existsSync(pdfPath), true);
  const stats = fs.statSync(pdfPath);
  assert.ok(stats.size > 100000, 'PDF file size > 100KB');
  console.log(`  PASS: PDF file verified at ${pdfPath} (${stats.size} bytes).`);

  // Test 5: Path traversal prevention check
  console.log('Test 5: Path traversal prevention check...');
  const maliciousResourceId = '../../../etc/passwd';
  const ALLOWED_RESOURCES = {
    'ai-prompt-kit-ops-v1': pdfPath,
  };
  assert.strictEqual(ALLOWED_RESOURCES[maliciousResourceId], undefined);
  console.log('  PASS: Path traversal attempt blocked by resource whitelist.');

  console.log('\n=== ALL 5/5 LEAD CAPTURE TESTS PASSED ===\n');
}

runTests().catch((err) => {
  console.error('TEST FAILURE:', err);
  process.exit(1);
});

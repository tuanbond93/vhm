import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const read = (file) => fs.readFileSync(path.resolve(file), 'utf8');
const route = read('src/app/radar/demand-forecast-governance/page.tsx');
const workspace = read('src/components/DemandForecastGovernanceWorkspace.tsx');
const demo = read('src/lib/forecast-governance-demo.ts');
const analytics = read('src/lib/analytics.ts');
const radar002 = read('src/app/radar/du-bao-nhu-cau-human-override/page.tsx');
const homepage = read('src/app/page.tsx');
const sitemap = read('src/app/sitemap.ts');

assert.ok(route.includes("canonical = 'https://vanhanhmoi.com/radar/demand-forecast-governance'"), 'dedicated canonical route exists');
assert.ok(route.includes("'@type': 'WebApplication'"), 'supported WebApplication schema exists');
assert.ok(route.includes('Prototype disclaimer:'), 'prototype disclaimer is visible');
assert.ok(route.includes('Dữ liệu và chuỗi thời gian hoàn toàn tổng hợp'), 'synthetic data is disclosed');
assert.ok(route.includes('logic deterministic'), 'deterministic behavior is disclosed');
assert.ok(route.includes('không dùng live backend hay live LLM'), 'no live system is disclosed');
assert.ok(route.includes('chưa được kiểm chứng'), 'policy hypothesis is disclosed');

for (const id of ['baseline', 'small-override', 'material-override']) {
  assert.ok(demo.includes(`id: '${id}'`), `deterministic scenario ${id} exists`);
}
assert.ok(demo.includes("DEMO_POLICY_LABEL = 'DEMO POLICY HYPOTHESIS — NOT VALIDATED'"), 'policy label is explicit');
assert.ok(demo.includes("SYNTHETIC_DATA_LABEL = 'SYNTHETIC DEMO DATA'"), 'synthetic-data label is explicit');
assert.ok(workspace.includes("policy === 'MATERIAL_OVERRIDE'"), 'material override receives a policy gate');
assert.ok(workspace.includes('Hãy chọn mã lý do trước khi xác nhận'), 'missing reason blocks confirmation');
assert.ok(workspace.includes('otherReason.trim()'), 'manual other requires local context');
assert.ok(workspace.includes('không được gửi vào analytics'), 'free-text analytics boundary is visible');

for (const reason of ['PROMOTION', 'WEATHER', 'STOCKOUT_RECOVERY', 'EVENT', 'CAPACITY_CHANGE', 'MANUAL_OTHER']) {
  assert.ok(demo.includes(`'${reason}'`) || demo.includes(`id: '${reason}'`), `reason code ${reason} exists`);
}
for (const decision of ['KEEP_BASELINE', 'APPLY_OVERRIDE', 'CANCEL_OVERRIDE', 'RESET']) {
  assert.ok(demo.includes(`'${decision}'`), `human decision ${decision} exists`);
  assert.ok(workspace.includes(decision), `human decision ${decision} is exposed`);
}
assert.ok(workspace.includes('không writeback sang hệ thống thật'), 'prototype does not imply writeback');
assert.ok(workspace.includes('Simulated audit context'), 'audit summary is exposed');
assert.ok(workspace.includes('FINAL SIMULATED'), 'final simulated forecast is exposed');

for (const eventName of ['product_demo_view', 'forecast_adjustment', 'governance_warning', 'reason_selected', 'override_applied', 'override_cancelled', 'cta_click']) {
  assert.ok(analytics.includes(`'${eventName}'`), `analytics event ${eventName} is wired`);
}
assert.ok(demo.includes("FORECAST_GOVERNANCE_PRODUCT_ID = 'demand_forecast_governance'"), 'analytics uses required product id');
assert.ok(!workspace.includes('reason_text:'), 'free-text reason is never an analytics property');
for (const call of workspace.match(/Analytics\.[\s\S]*?\);/g) ?? []) {
  assert.ok(!call.includes('otherReason'), 'local other reason is never passed as an analytics argument');
}

assert.ok(radar002.includes('href="/radar/demand-forecast-governance"'), 'Radar #002 links to Product Proof #002');
assert.ok(route.includes('href="/radar/du-bao-nhu-cau-human-override"'), 'Product Proof #002 links to Radar #002');
assert.ok(homepage.includes('DEMAND_FORECAST_PROOF_CARD'), 'homepage makes Product Proof #002 discoverable');
assert.ok(sitemap.includes('`${baseUrl}/radar/demand-forecast-governance`'), 'Product Proof #002 is in sitemap');
assert.ok(route.includes('<LeadCaptureForm source="product_proof_002"'), 'secure existing lead flow remains available');

const proofText = `${route}\n${workspace}\n${demo}`.toLowerCase();
for (const unsupportedClaim of ['universally optimal', 'guaranteed accuracy', 'forecast accuracy improved', 'proven roi', 'real customer data']) {
  assert.ok(!proofText.includes(unsupportedClaim), `unsupported claim is absent: ${unsupportedClaim}`);
}

console.log('Product Proof #002 focused checks passed.');

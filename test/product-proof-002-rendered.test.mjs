import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const proofHtml = fs.readFileSync(path.resolve('.next/server/app/radar/demand-forecast-governance.html'), 'utf8');
const radarHtml = fs.readFileSync(path.resolve('.next/server/app/radar/du-bao-nhu-cau-human-override.html'), 'utf8');
const homepageHtml = fs.readFileSync(path.resolve('.next/server/app/index.html'), 'utf8');

assert.ok(proofHtml.includes('<title>Demand Forecast Governance Guardrails — Product Proof #002 | Vận Hành Mới</title>'), 'rendered title is unique');
assert.ok(proofHtml.includes('<meta name="description" content="Prototype tương tác mô phỏng planner override'), 'rendered description is useful');
assert.ok(proofHtml.includes('<link rel="canonical" href="https://vanhanhmoi.com/radar/demand-forecast-governance"'), 'rendered canonical is correct');
assert.ok(proofHtml.includes('<meta property="og:url" content="https://vanhanhmoi.com/radar/demand-forecast-governance"'), 'rendered OG URL is correct');
assert.ok(proofHtml.includes('name="twitter:card" content="summary"'), 'rendered Twitter metadata exists');
assert.ok(proofHtml.includes('name="robots" content="index, follow"'), 'rendered page is indexable');
assert.ok(proofHtml.includes('"@type":"WebApplication"'), 'rendered schema is valid for the demo');
assert.equal((proofHtml.match(/<h1[ >]/g) ?? []).length, 1, 'rendered proof has exactly one H1');
assert.ok(proofHtml.includes('DEMO POLICY HYPOTHESIS — NOT VALIDATED'), 'rendered policy label exists');
assert.ok(proofHtml.includes('SYNTHETIC DEMO DATA'), 'rendered synthetic-data label exists');
assert.ok(proofHtml.includes('Giữ baseline'), 'rendered baseline example exists');
assert.ok(proofHtml.includes('Điều chỉnh nhỏ'), 'rendered small-override example exists');
assert.ok(proofHtml.includes('Điều chỉnh trọng yếu'), 'rendered material-override example exists');
assert.ok(proofHtml.includes('name="email"'), 'rendered secure lead form remains available after demo');
assert.ok(proofHtml.includes('href="/radar/du-bao-nhu-cau-human-override"'), 'rendered proof links back to Radar #002');
assert.ok(radarHtml.includes('href="/radar/demand-forecast-governance"'), 'rendered Radar #002 links to proof');
assert.ok(homepageHtml.includes('href="/radar/demand-forecast-governance"'), 'rendered homepage links to proof');

console.log('Rendered Product Proof #002 checks passed.');

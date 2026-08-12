import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const read = (file) => fs.readFileSync(path.resolve(file), 'utf8');
const route = read('src/app/radar/ai-agent-human-in-the-loop/page.tsx');
const workspace = read('src/components/HumanInLoopEscalationWorkspace.tsx');
const scenarios = read('src/lib/human-in-loop-demo.ts');
const analytics = read('src/lib/analytics.ts');
const radar001 = read('src/app/radar/ai-agent-human-in-the-loop-taobao/page.tsx');
const homepage = read('src/lib/data.ts');
const sitemap = read('src/app/sitemap.ts');

assert.ok(route.includes("canonical = 'https://vanhanhmoi.com/radar/ai-agent-human-in-the-loop'"), 'dedicated canonical route exists');
assert.ok(route.includes("'@type': 'WebApplication'"), 'supported WebApplication schema exists');
assert.ok(route.includes('Prototype disclaimer:'), 'prototype disclaimer is visible');
assert.ok(route.includes('không dùng live LLM'), 'offline deterministic behavior is disclosed');
assert.ok(route.includes('chưa được kiểm chứng cho môi trường production'), 'threshold hypothesis is disclosed');

for (const id of ['routine', 'low-confidence', 'policy-sensitive']) {
  assert.ok(scenarios.includes(`id: '${id}'`), `deterministic scenario ${id} exists`);
}
assert.ok(scenarios.includes("status: 'AI_HANDLED'"), 'routine case can complete without escalation');
assert.ok(scenarios.includes("status: 'HUMAN_REVIEW_REQUIRED'"), 'escalated cases require human review');
assert.ok(workspace.includes('AI PAUSED · HUMAN REVIEW REQUIRED'), 'AI pause is explicit');
assert.ok(workspace.includes('WHY ESCALATED'), 'escalation explanation is explicit');
assert.ok(workspace.includes('Trigger:'), 'trigger is displayed');
assert.ok(workspace.includes('Evidence:'), 'evidence is displayed');
assert.ok(workspace.includes('Why AI stops:'), 'AI stopping reason is displayed');

for (const decision of ['TAKE_OVER', 'APPROVE_SUGGESTION', 'MODIFY_ACTION', 'REJECT_ACTION']) {
  assert.ok(scenarios.includes(`'${decision}'`), `human decision ${decision} exists`);
}
assert.ok(workspace.includes('HUMAN CONFIRMED:'), 'human confirmation is visible');
assert.ok(workspace.includes('không có hành động ngoài đời thực nào được thực thi'), 'prototype never implies execution');

for (const eventName of ['product_demo_view', 'scenario_change', 'escalation_inspection', 'human_takeover', 'human_decision', 'cta_click']) {
  assert.ok(analytics.includes(`'${eventName}'`), `analytics event ${eventName} is wired`);
}
assert.ok(scenarios.includes("HUMAN_LOOP_PRODUCT_ID = 'human_in_the_loop_escalation'"), 'analytics uses required product id');
assert.ok(radar001.includes('href="/radar/ai-agent-human-in-the-loop"'), 'Radar #001 links to Product Proof #001');
assert.ok(route.includes('href="/radar/ai-agent-human-in-the-loop-taobao"'), 'Product Proof #001 links to Radar #001');
assert.ok(homepage.includes("href: '/radar/ai-agent-human-in-the-loop'"), 'homepage makes Product Proof #001 discoverable');
assert.ok(sitemap.includes('`${baseUrl}/radar/ai-agent-human-in-the-loop`'), 'Product Proof #001 is in sitemap');

const proofText = `${route}\n${workspace}\n${scenarios}`.toLowerCase();
for (const unsupportedClaim of ['validated confidence threshold', 'customer churn impact', 'automation success rate', 'operational savings', 'real taobao production']) {
  assert.ok(!proofText.includes(unsupportedClaim), `unsupported claim is absent: ${unsupportedClaim}`);
}

console.log('Product Proof #001 focused checks passed.');

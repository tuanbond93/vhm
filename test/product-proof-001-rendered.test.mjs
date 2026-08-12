import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const proofHtml = fs.readFileSync(path.resolve('.next/server/app/radar/ai-agent-human-in-the-loop.html'), 'utf8');
const radarHtml = fs.readFileSync(path.resolve('.next/server/app/radar/ai-agent-human-in-the-loop-taobao.html'), 'utf8');

assert.ok(proofHtml.includes('<title>AI Agent Human-in-the-loop Escalation — Product Proof #001 | Vận Hành Mới</title>'), 'rendered title is unique');
assert.ok(proofHtml.includes('<link rel="canonical" href="https://vanhanhmoi.com/radar/ai-agent-human-in-the-loop"'), 'rendered canonical is correct');
assert.ok(proofHtml.includes('<meta property="og:url" content="https://vanhanhmoi.com/radar/ai-agent-human-in-the-loop"'), 'rendered OG URL is correct');
assert.ok(proofHtml.includes('"@type":"WebApplication"'), 'rendered schema is valid for the demo');
assert.equal((proofHtml.match(/<h1[ >]/g) ?? []).length, 1, 'rendered proof has exactly one H1');
assert.ok(proofHtml.includes('DEMO POLICY — NOT VALIDATED'), 'rendered demo policy warning exists');
assert.ok(proofHtml.includes('SYNTHETIC CASES · DETERMINISTIC RULES · NO LIVE LLM'), 'rendered synthetic-data warning exists');
assert.ok(proofHtml.includes('AI HANDLED · NO ESCALATION'), 'rendered initial routine state exists');
assert.ok(proofHtml.includes('Yêu cầu mơ hồ, thiếu dữ liệu'), 'rendered low-confidence scenario selector exists');
assert.ok(proofHtml.includes('Ngoại lệ cần phê duyệt'), 'rendered policy-sensitive scenario selector exists');
assert.ok(proofHtml.includes('name="email"'), 'rendered secure lead form remains available after demo');
assert.ok(proofHtml.includes('href="/radar/ai-agent-human-in-the-loop-taobao"'), 'rendered proof links back to Radar #001');
assert.ok(radarHtml.includes('href="/radar/ai-agent-human-in-the-loop"'), 'rendered Radar #001 links to proof');

console.log('Rendered Product Proof #001 checks passed.');

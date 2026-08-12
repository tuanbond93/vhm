import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const radarRoot = path.resolve('.next/server/app/radar');
const radarHtmlFiles = fs.readdirSync(radarRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(radarRoot, `${entry.name}.html`));

assert.equal(radarHtmlFiles.length, 8, 'rendered conversion QA covers Radar #001–#008');

for (const file of radarHtmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  assert.ok(html.includes('name="email"'), `${file} renders the email field`);
  assert.ok(html.includes('type="checkbox"'), `${file} renders consent`);
  assert.ok(html.includes('<noscript>'), `${file} renders explicit JavaScript-disabled guidance`);
  assert.ok(html.includes('AI Prompt Kit miễn phí'), `${file} renders a conversion-specific mobile CTA`);
  assert.ok(html.includes('md:hidden fixed bottom-0'), `${file} renders the mobile sticky CTA`);
  assert.equal((html.match(/fixed bottom-0 left-0 right-0/g) ?? []).length, 1, `${file} renders one mobile sticky CTA`);
}

const contactHtml = fs.readFileSync(path.resolve('.next/server/app/lien-he.html'), 'utf8');
assert.ok(contactHtml.includes('href="#newsletter-signup"'), 'contact CTA renders a valid destination');
assert.ok(contactHtml.includes('id="newsletter-signup"'), 'contact lead-form destination renders');
assert.ok(contactHtml.includes('Biểu mẫu liên hệ trực tiếp chưa được mở'), 'contact page does not imply an unavailable submission path');
assert.ok(!contactHtml.includes('Đã gửi lời nhắn thành công'), 'contact page does not render simulated success copy');

console.log('Rendered conversion baseline checks passed.');

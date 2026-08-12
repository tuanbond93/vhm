import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const read = (relativePath) => fs.readFileSync(path.resolve(relativePath), 'utf8');

const analytics = read('src/lib/analytics.ts');
const form = read('src/components/LeadCaptureForm.tsx');
const navbar = read('src/components/Navbar.tsx');
const tracker = read('src/components/ConversionTracker.tsx');
const attribution = read('src/lib/attribution.ts');
const leadCapture = read('src/lib/lead-capture.ts');
const resourceRoute = read('src/app/api/resources/[resourceId]/route.ts');
const contact = read('src/components/ContactSection.tsx');

for (const eventName of [
  'page_view',
  'cta_click',
  'lead_form_view',
  'lead_submit_attempt',
  'lead_submit_success',
  'resource_access_issued',
  'resource_access_success',
  'product_demo_view',
  'diagnostic_interaction',
  'risk_item_inspection',
]) {
  assert.ok(analytics.includes(`'${eventName}'`), `analytics includes ${eventName}`);
}

const controlTower = read('src/components/SLAEarlyWarningControlTower.tsx');
assert.ok(controlTower.includes("Analytics.productDemoView('sla_early_warning'"), 'Product demo view is measured');
assert.ok(controlTower.includes("Analytics.diagnosticInteraction('sla_early_warning'"), 'Diagnostic interactions are measured');
assert.ok(controlTower.includes("Analytics.riskItemInspection('sla_early_warning'"), 'Risk item inspection is measured');

assert.ok(tracker.includes('Analytics.pageView(pathname, document.title)'), 'route page views are measured');
assert.ok(form.includes("Analytics.leadFormView('ai-prompt-kit-ops-v1'"), 'inline and modal form views are measured');
assert.ok(form.includes("Analytics.leadSubmitAttempt('ai-prompt-kit-ops-v1'"), 'submit attempts are measured');
assert.ok(form.includes("Analytics.leadSubmitSuccess('ai-prompt-kit-ops-v1'"), 'successful leads are measured');
assert.ok(form.includes("Analytics.resourceAccessIssued('ai-prompt-kit-ops-v1'"), 'issued access is measured');
assert.ok(form.includes("Analytics.resourceAccessSuccess('ai-prompt-kit-ops-v1'"), 'successful resource responses are measured');
assert.ok(form.includes('if (!response.ok)'), 'resource success requires an OK response');
assert.ok(form.includes("cache: 'no-store'"), 'authorized browser fetch bypasses caches');
assert.ok(form.includes("status !== 'success'"), 'successful submissions cannot immediately duplicate-submit');
assert.ok(form.includes('downloadUrl &&'), 'every issued access URL receives a direct next step');
assert.ok(form.includes('<noscript>'), 'JavaScript-disabled behavior is explicit');

assert.ok(navbar.includes("isRadarDetail ? 'AI Prompt Kit miễn phí'"), 'mobile Radar CTA is conversion-specific');
assert.ok(navbar.includes("openLeadModal('mobile_sticky')"), 'mobile Radar CTA opens the lead flow');
assert.ok(navbar.includes("Analytics.ctaClick('global_resource_cta'"), 'global resource CTAs are measured');
assert.ok(!contact.includes('setTimeout'), 'contact page does not simulate a successful submission');
assert.ok(contact.includes('href="#newsletter-signup"'), 'contact CTA has a working lead-form destination');
assert.ok(contact.includes("Analytics.ctaClick('contact_to_newsletter'"), 'contact CTA is measured');

for (const field of ['utm_source', 'utm_medium', 'utm_campaign', 'referrer']) {
  assert.ok(attribution.includes(field), `attribution captures ${field}`);
  assert.ok(form.includes(`attribution.${field}`), `form submits ${field}`);
  assert.ok(leadCapture.includes(`${field}: validatedPayload.${field}`), `server persists ${field}`);
}

assert.ok(resourceRoute.includes("verifyResourceAccessToken(token, resourceId)"), 'signed resource authorization remains enforced');
assert.ok(resourceRoute.includes("'Cache-Control': 'private, no-store'"), 'protected resource remains private/no-store');

const radarPages = fs.readdirSync(path.resolve('src/app/radar'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join('src/app/radar', entry.name, 'page.tsx'));

assert.equal(radarPages.length, 11, 'conversion baseline covers Radar #001–#008 and Product Proof #001/#002/#006');
for (const radarPage of radarPages) {
  assert.ok(read(radarPage).includes('<LeadCaptureForm'), `${radarPage} includes a lead form`);
}

console.log('Conversion baseline regression checks passed.');

# VHM Security Baseline Audit v1

**Date**: 2026-08-11
**Auditor**: Independent Security Auditor (automated code review)
**Scope**: Repository `vanhanhmoi` — all source code, configuration, and dependencies
**Production**: https://vanhanhmoi.com (Vercel)

---

## Executive Verdict

### FAIL

There are **0 P0** and **3 P1** findings that require remediation before the security baseline can be considered met. All P1 findings are realistic and exploitable.

---

## Scope Inspected

| Area | Status |
|---|---|
| API routes (`/api/lead`, `/api/resources/[resourceId]`) | ✅ Inspected |
| Lead capture pipeline (`lead-capture.ts`, `db.ts`) | ✅ Inspected |
| Email sending (Resend integration) | ✅ Inspected |
| All public pages (homepage, radar, gioi-thieu, kien-thuc, cong-cu, lien-he) | ✅ Inspected |
| All 8 Radar article pages | ✅ Inspected |
| Client components (15 `'use client'` components) | ✅ Inspected |
| Server components (layout, pages) | ✅ Inspected |
| `dangerouslySetInnerHTML` usage (10 instances) | ✅ Inspected |
| Environment variable handling | ✅ Inspected |
| `.gitignore` and git history | ✅ Inspected |
| `next.config.ts` | ✅ Inspected |
| `vercel.json` | ✅ Inspected |
| `package.json` / dependencies | ✅ Inspected |
| `npm audit` (production) | ✅ Ran |
| Production HTTP response headers | ✅ Inspected |
| Middleware | ✅ Verified absent |
| Source maps configuration | ✅ Inspected |
| Assets directory | ✅ Inspected |
| Test files | ✅ Inspected |

---

## Attack Surface

```
EXTERNAL ATTACK SURFACE MAP
============================

PUBLIC PAGES (server-rendered, static content):
  /                    ← homepage
  /radar               ← radar index
  /radar/[slug]        ← 8 static article pages (hardcoded slugs, no dynamic lookup)
  /gioi-thieu          ← about
  /kien-thuc           ← knowledge
  /cong-cu             ← tools catalog
  /lien-he             ← contact

API ROUTES (serverless functions on Vercel):
  POST /api/lead                       ← lead capture endpoint [MUTATION]
  GET  /api/resources/[resourceId]     ← PDF download endpoint [READ]

CLIENT-SIDE FORMS:
  LeadCaptureForm      ← email + consent → POST /api/lead
  ContactSection       ← name + email + role + message → CLIENT-ONLY (no backend!)

EMAIL SENDING:
  Resend API           ← triggered server-side by POST /api/lead

DATABASE:
  PostgreSQL (via pg)  ← server-side only, via DATABASE_URL
                         No Supabase client SDK, no browser-side DB access

REDIRECTS (next.config.ts):
  www.vanhanhmoi.com   → vanhanhmoi.com (301)
  vanhanhmoi.vn        → vanhanhmoi.com (301)
  www.vanhanhmoi.vn    → vanhanhmoi.com (301)

STATIC ASSETS:
  /public/.gitkeep     ← empty directory

WEBHOOKS:              None found
ADMIN/DEBUG ROUTES:    None found
MIDDLEWARE:            None (no middleware.ts file exists)
SERVER ACTIONS:        None (no 'use server' directives found)
```

---

## P0 Findings

None.

---

## P1 Findings

### P1-001: Unauthenticated PDF Resource Download — Lead Gate Bypass

| Field | Value |
|---|---|
| **ID** | P1-001 |
| **Severity** | P1 HIGH |
| **Component** | `src/app/api/resources/[resourceId]/route.ts` |
| **Evidence** | Lines 5–49: `GET` handler serves PDF with no authentication, no session check, no lead verification. The route is public. Production confirmed: `GET https://vanhanhmoi.com/api/resources/ai-prompt-kit-ops-v1` returns `200` with `Content-Type: application/pdf` and `Content-Length: 1327277`. |

**Attack scenario**: Any visitor (or bot/scraper) can directly access `https://vanhanhmoi.com/api/resources/ai-prompt-kit-ops-v1` and download the PDF without submitting the lead capture form. The entire lead funnel is bypassed.

**Impact**:
- Lead capture business logic is defeated — resource is freely available without email submission
- PDF URL is also embedded in email templates (`lead-capture.ts:143`) and client fallback links (`LeadCaptureForm.tsx:173`), making the URL easily discoverable
- Any crawler/bot can bulk-download the resource

**Required remediation**:
- Option A: Add a signed/time-limited token to the download URL generated after successful lead capture. Validate token in the resource route.
- Option B: Add a simple single-use download token stored in DB at lead creation time.
- At minimum: do not serve the PDF without any form of verification that a lead was captured.

---

### P1-002: No Server-Side String Length Limits on Database-Persisted Fields

| Field | Value |
|---|---|
| **ID** | P1-002 |
| **Severity** | P1 HIGH |
| **Component** | `src/lib/lead-capture.ts` + `src/lib/db.ts` |
| **Evidence** | `lead-capture.ts:120` passes `payload.source` directly to DB. `db.ts:209-218` inserts `source_page`, `utm_source`, `utm_medium`, `utm_campaign`, `referrer` as parameterized `$3`-`$8` with **no length validation**. The `email` field is regex-validated but **no max-length** is enforced. The DB schema (`db.ts:153-168`) defines all these as `TEXT` with no column-level length constraint. |

**Attack scenario**: An attacker sends a POST to `/api/lead` with extremely long strings (e.g., 1MB `utm_source`, 1MB `referrer`, 1MB `source`). While the route checks `Content-Length < 10KB`, an attacker can:
1. Omit the `Content-Length` header (the check at `route.ts:7-8` only fires when the header is present)
2. Send chunked/streaming requests that bypass the header check
3. Even within 10KB, repeatedly submit 10KB payloads to grow DB storage

The `Content-Length` check (`route.ts:7`) is **advisory only** — it trusts the client-supplied header value and does not enforce actual body size reading. The `request.json()` call on line 15 reads the full body regardless.

**Impact**:
- Uncontrolled database row size growth via arbitrarily long text fields
- Storage cost abuse (denial-of-wallet on Supabase/Postgres)
- Rate limiting exists (5 req / 10 min per IP+email combo) but attacker can rotate IPs/emails
- Each request can insert a new row (different email = different row)

**Required remediation**:
- Enforce max-length on all string fields before DB insertion (e.g., `email`: 254, `source_page`: 100, `utm_*`: 200, `referrer`: 500)
- Read and enforce actual body size (not just `Content-Length` header) or use Next.js body size configuration
- Consider adding column-level `VARCHAR(N)` constraints to the DB schema

---

### P1-003: In-Memory Rate Limiting Ineffective on Serverless (Vercel)

| Field | Value |
|---|---|
| **ID** | P1-003 |
| **Severity** | P1 HIGH |
| **Component** | `src/lib/lead-capture.ts:36-53` |
| **Evidence** | Rate limiting uses `const rateLimitMap = new Map<string, number[]>()` — an in-memory JavaScript Map. On Vercel serverless, each function invocation may run in a different isolate/instance. The Map is not shared across invocations. Cold starts reset the Map entirely. |

**Attack scenario**: An attacker sends rapid POST requests to `/api/lead`. Because Vercel spins up multiple serverless function instances, each instance has its own empty `rateLimitMap`. The rate limit of 5 requests per 10 minutes is effectively bypassed. The attacker can:
1. Spam thousands of lead submissions with different emails → DB growth
2. Trigger thousands of Resend email sends → Resend API cost
3. Use the service as a spam relay to arbitrary email addresses (the `to` field is the user-supplied `email` from the form — `lead-capture.ts:166`)

Combined with P1-002, this enables:
- **Uncontrolled email sending**: each unique email address triggers a Resend API call with no effective throttle
- **Denial-of-wallet**: Resend charges per email; thousands of emails can be triggered
- **Spam relay**: attacker supplies victim email addresses, VHM sends "resource download" emails to them

**Impact**:
- Resend API cost abuse (each email costs money)
- VHM domain reputation damage (SPF/DKIM emails sent to arbitrary addresses that didn't opt in)
- Database growth with spam entries
- Potential Resend account suspension

**Required remediation**:
- Replace in-memory rate limiting with a persistent store (e.g., Vercel KV, Upstash Redis, or database-backed rate limiting)
- Alternatively, use Vercel's built-in WAF/rate limiting or Cloudflare rate limiting at the edge
- Consider implementing CAPTCHA (e.g., Turnstile) for the lead form as defense-in-depth

---

## P2/P3 Backlog

| ID | Severity | Finding | Evidence |
|---|---|---|---|
| P2-001 | P2 | **No security headers configured** | No `middleware.ts` exists. `next.config.ts` has no `headers()` function. Production response confirms: no `Content-Security-Policy`, no `X-Content-Type-Options`, no `X-Frame-Options`, no `Referrer-Policy`, no `Permissions-Policy`. Vercel provides `Strict-Transport-Security` by default. The `Access-Control-Allow-Origin: *` is set by Vercel defaults. |
| P2-002 | P2 | **Contact form is fake** — no backend submission | `ContactSection.tsx:18-24`: submit handler uses `setTimeout` and `setFormStatus('success')` with no API call, no email, no database write. User data (name, email, role, message) is silently discarded. This is a **UX trust issue** rather than a security vulnerability, but it could damage credibility. |
| P2-003 | P2 | **Dev lead store files tracked in git** | `assets/lead-store/leads-dev-only.json` and `assets/lead-store/leads.json` are tracked in git (confirmed via `git ls-files`). They contain test email addresses. While these are clearly test data, tracking mutable data files in git is a hygiene concern. Add `assets/lead-store/` to `.gitignore`. |
| P2-004 | P2 | **Dependency vulnerability: postcss ≤8.5.22** (transitive via next) | `npm audit` reports 4 postcss advisories including GHSA-6g55-p6wh-862q (high — arbitrary file read via sourceMappingURL). This is a **build-time** dependency only, not exploitable at runtime by external attackers against VHM. Fix requires upgrading to `next@16.x` (breaking change). |
| P2-005 | P2 | **Dependency vulnerability: sharp <0.35.0** (transitive via next) | `npm audit` reports GHSA-f88m-g3jw-g9cj (high — libvips CVEs). Sharp is used for image optimization in Next.js. Exploitation requires attacker-controlled image input, which VHM does not accept. Risk is low. Fix requires `next@16.x`. |
| P3-001 | P3 | **`Content-Length` check is bypassable** | `route.ts:7-8`: checks client-supplied `Content-Length` header, which can be omitted or spoofed. This is defense-in-depth but not a reliable body size limit. |
| P3-002 | P3 | **Honeypot field is trivially bypassed** | `lead-capture.ts:60`: honeypot check only traps bots that fill the hidden field. Modern bots and scripts simply don't fill it. Provides minimal protection. |
| P3-003 | P3 | **`dangerouslySetInnerHTML` usage** | 10 instances across layout and radar pages, all used for `JSON.stringify()` of hardcoded JSON-LD structured data. No user input flows into these. **Safe as implemented** — no XSS risk. |
| P3-004 | P3 | **No CSRF protection on POST /api/lead** | The lead endpoint accepts any POST with valid JSON. No CSRF token or `Origin`/`Referer` check. In practice, the endpoint is designed for public use and the honeypot + rate limit (if working) provide some protection. Low risk given the endpoint is inherently public. |

---

## External Verification Required

These items cannot be verified from repository evidence alone:

| # | Item | Why External |
|---|---|---|
| 1 | **Supabase RLS policies on `leads` table** | The repository uses raw `pg` driver (not Supabase client SDK), connecting via `DATABASE_URL`. No RLS policies are defined in the repository. If the database is hosted on Supabase, RLS may or may not be enabled. If RLS is disabled, the connection via service-role-equivalent credentials has full table access (which is expected for server-side-only access). **Verify in Supabase Dashboard → Authentication → Policies**. |
| 2 | **Vercel environment variables** | Verify that `RESEND_API_KEY`, `DATABASE_URL`, and `RESEND_FROM_EMAIL` are set only in Vercel production environment and are not exposed via preview deployments or Vercel dashboard sharing. |
| 3 | **Resend sending domain and limits** | Verify Resend account has sending rate limits configured. Verify SPF/DKIM/DMARC records for `vanhanhmoi.com`. |
| 4 | **Vercel preview deployment access** | Verify that preview deployments (from branches/PRs) do not expose production secrets or are access-restricted. |
| 5 | **DNS configuration** | Verify `vanhanhmoi.vn` properly redirects (CNAME/A record to Vercel), not serving independent content. |

---

## Security Fix Order

Recommended dependency-aware remediation sequence:

```
1. [P1-003] Implement persistent rate limiting
   ├── Prerequisite for controlling email abuse
   ├── Options: Vercel KV, Upstash Redis, or DB-backed
   └── Blocks: P1-001 and P1-002 are also important but
       this is the most critical for cost/abuse control

2. [P1-002] Add server-side string length validation
   ├── Enforce max-length on all fields in captureLead()
   ├── Add actual body size reading in route.ts
   └── No external dependencies

3. [P1-001] Gate PDF resource behind signed download token
   ├── Generate token at lead capture time
   ├── Validate token in resource route
   └── Depends on: lead capture working correctly (P1-002, P1-003)

4. [P2-001] Add security headers via middleware.ts
   └── Independent of other fixes

5. [P2-003] Add assets/lead-store/ to .gitignore
   └── Independent, 10-second fix
```

---

## Release Gate

```
SECURITY_BASELINE:  FAIL
P0_OPEN:            0
P1_OPEN:            3
EXTERNAL_CHECKS:    5
```

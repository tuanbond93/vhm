# VẬN HÀNH MỚI — MEASUREMENT SPECIFICATION V1
**Phase 4D — Measurement & Growth Foundation**

## 1. Executive Summary
This document defines the canonical measurement framework, metric definitions, acquisition taxonomy, and analytics data model for Vận Hành Mới (vanhanhmoi.com).

Core Objective: Establish a trustworthy measurement foundation tracking traffic, acquisition channels, content engagement, lead intent, and conversion drops.

---

## 2. North Star Metric
* **Qualified Resource Leads:** Total unique lead registrations created with verified interest in Operations Intelligence tools and AI frameworks.

---

## 3. Core Funnel & Metrics Taxonomy

```
[VISIT] 
  ↓
[CTA INTENT] (cta_click / tool_cta_click)
  ↓
[LEAD MODAL OPEN] (lead_modal_open)
  ↓
[SUBMIT ATTEMPT] (lead_submit_attempt)
  ↓
[LEAD CREATED] (lead_submit_success + Supabase DB row)
  ↓
[EMAIL DELIVERED] (delivery_status = 'delivered' via Resend)
  ↓
[RESOURCE ACCESS] (resource_download / PDF Endpoint access)
```

### Key Metrics & Formulas:

1. **Visitors:** Total unique page sessions measured via Vercel Web Analytics.
2. **Lead Modal Opens:** Count of `lead_modal_open` events.
3. **Lead Submit Attempts:** Count of `lead_submit_attempt` events.
4. **Successful Leads:** Total rows in PostgreSQL `leads` table.
5. **Visitor → Lead Conversion Rate:**
   $$\text{Visitor-to-Lead Rate} = \frac{\text{Successful Leads}}{\text{Unique Visitors}} \times 100\%$$
6. **Modal → Lead Conversion Rate:**
   $$\text{Modal-to-Lead Rate} = \frac{\text{Successful Leads}}{\text{Lead Modal Opens}} \times 100\%$$
7. **Email Delivery Success Rate:**
   $$\text{Email Delivery Rate} = \frac{\text{Leads with delivery\_status = 'delivered'}}{\text{Total Successful Leads}} \times 100\%$$

---

## 4. Acquisition & Attribution Model

Vận Hành Mới employs a **First-Touch Attribution Model** to track organic growth, content marketing, and community distribution.

### Tracked Dimensions:
* `utm_source`: Acquisition channel (e.g. `linkedin`, `google`, `newsletter`, `facebook`)
* `utm_medium`: Distribution medium (e.g. `social`, `cpc`, `email`, `organic`)
* `utm_campaign`: Content campaign identifier (e.g. `ops_prompt_kit_launch`, `sop_guide`)
* `referrer`: Clean domain of external referring website (e.g. `linkedin.com`, `google.com`)

### Attribution Session Persistence:
Acquisition parameters captured upon initial visit are stored in first-party `sessionStorage` (`vhm_first_touch_attribution`) and passed to PostgreSQL lead records upon registration.

---

## 5. Strict PII Policy
Analytics payloads **MUST NEVER** contain:
- Email addresses
- Full names or phone numbers
- Raw form input data
- Database Lead UUIDs
- User IP addresses

All dimensions passed to `@vercel/analytics` or external tools are strictly sanitized and limited to contextual content properties (`resource_id`, `source_page`, `tool_id`).

---

## 6. Technical Quality Gates
- Analytics failures fail silently and **NEVER** block UX or lead submission.
- Duplicate lead requests perform an idempotent UPSERT, preserving first-touch attribution without erroring.
- PDF resource endpoint enforces strict allowlist headers without exposing server file structures.

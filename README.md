# Vận Hành Mới — Website V1

Production-ready V1 website for **Vận Hành Mới** (`vanhanhmoi.com` / `vanhanhmoi.vn`), built for Operations Managers, Team Leaders, and SME Owners looking for practical operations systems and applied AI.

## Positioning
> "Vận Hành Mới = Hệ thống + AI ứng dụng thực tế cho người làm vận hành."  
> **Core Promise:** Giảm việc tay. Nhìn rõ vận hành. Ra quyết định nhanh hơn.

---

## Tech Stack
- **Framework:** Next.js 15 (App Router, Server Components by default)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS + CSS variables for tokens
- **Typography:** `Inter` & `Plus Jakarta Sans` (optimized via `next/font/google` with full Vietnamese support)
- **Icons:** `lucide-react`
- **SEO Infrastructure:** Built-in dynamic `sitemap.ts`, `robots.ts`, OpenGraph baseline & JSON-LD Organization schema

---

## Architecture & Structure
```
d:/Project/VHM
├── src/
│   ├── app/
│   │   ├── page.tsx               # Homepage (10 core sections)
│   │   ├── kien-thuc/page.tsx      # Knowledge & Blog Catalog
│   │   ├── cong-cu/page.tsx        # Tools & Templates Resource Hub
│   │   ├── gioi-thieu/page.tsx      # About & Operations Philosophy
│   │   ├── lien-he/page.tsx        # Contact & Newsletter Form
│   │   ├── not-found.tsx          # Custom 404 Page
│   │   ├── sitemap.ts             # Dynamic XML Sitemap
│   │   ├── robots.ts              # Search Engine Crawling Policy
│   │   └── api/
│   │       └── lead/route.ts      # Lead Capture Server API
│   ├── components/
│   │   ├── Navbar.tsx             # Responsive Navigation Bar
│   │   ├── Footer.tsx             # Brand Footer & Links
│   │   ├── Badge.tsx              # Status & Tag Pills
│   │   ├── LeadCaptureForm.tsx    # Pluggable Email Lead Capture
│   │   └── LeadMagnetModal.tsx    # Interactive Resource Lead Modal
│   └── lib/
│       ├── data.ts                # Structured Site Data & Copy
│       ├── lead-capture.ts        # Lead Capture Service Abstraction
│       └── analytics.ts           # Telemetry Integration Point
├── .env.example
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

### 1. Installation
```bash
npm install
```

### 2. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Type Checking & Verification
```bash
npx tsc --noEmit
```

### 4. ESLint Check
```bash
npm run lint
```

### 5. Production Build
```bash
npm run build
```

---

## Lead Capture & Analytics Abstraction

- **Lead Capture:** Configured via `lib/lead-capture.ts`. Operates in local simulation mode by default. When deploying to production, set `LEAD_CAPTURE_PROVIDER` (e.g. `resend`, `convertkit`, `brevo`) and `LEAD_CAPTURE_API_KEY` in `.env`.
- **Analytics:** Configured via `lib/analytics.ts`. Event tracking hook ready for Google Analytics, Plausible, or PostHog without code refactoring.

---

## Deployment (Phase 4B.8)
This codebase is optimized for Vercel deployment.
- Domain primary: `vanhanhmoi.com`
- Domain secondary: `vanhanhmoi.vn`

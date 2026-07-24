# Kampalo Marketing Site — Project Memory

## Product
- **Kampalo**: AI marketing analytics for Google Ads and Meta—one dashboard plus **Kai** (AI assistant).
- Parent company: **Tekreign** (`tekreign.com`).
- Positioning: outcome-led (“see all your ads / know what to scale”), not jargon-led.
- This repo is the **Next.js 15 marketing site** (`kampalo.com`), not the app backend.

## Product feature inventory (shipped — 2026-07-24)
Source of truth for marketing. Translate to buyer language on pages; keep jargon here only.

### Auth & tenancy
- Individual + Enterprise signup; secure auth
- Roles: Admin / Manager / Marketer / Client User / Visitor
- Multi-client org (agency home + brand clients); brand scoping per client
- Subscriptions / plan feature gates (Ads, Search Console, GA4, etc.)

### Google
- Google Ads + SA360: OAuth, customers, campaigns, insights, campaign-detail by campaign
- GA4: reports, Home dashboard, Drive online sales preset
- Search Console + SEO Suite (on-page, off-page, performance audits, page metadata, indexing, sitemap)
- Enterprise: auto-select all accounts/campaigns; Individual: manual selection + plan limits

### Meta
- Ads OAuth, ad accounts, campaigns, insights + breakdowns (device / region / publisher / hourly)
- Campaign details + overall stats; regular sync with live refresh when needed
- Organic: Facebook Page + Instagram insights, post/media detail, comment moderation
- Toxicity scoring + auto comment moderation
- Pixel / Conversions API endpoints (no durable outbox yet—do not oversell reliability on marketing)

### Platform hub
- Unified dashboard, connections, campaigns, overall stats, overall trends
- Reports + schedules (brand / client / user scopes; Google Ads, Meta Ads, GA4, GSC, Meta organic)
- Notifications (user-scoped, sync events)
- **Kai** AI marketer agent: durable chat; tools over ads + Meta organic (internally LangGraph / OmniRoute—never name on marketing)

### In-app navigation (exact labels)
Kai → Dashboard → Trends → KPI Comparison → Accounts & Campaigns → Google Analytics → SEO Suite → Organic Insights → Reports → Connect
(+ Ask Kai CTA; Settings via gear). Screenshots are **full product UI** (sidebar + page), light/dark pairs.

## Screenshot assets (`public/assets/`)
- Prefer `*_Light.png` / `*_Dark.png` pairs. Map in `src/utils/dashboardScreenshots.js`.
- Full in-app captures (~1920×870 / ~2.21:1). Shown in a browser chrome frame (`LaptopFrame`) matching that aspect—not a 16:9 laptop. Images: `object-cover object-left-top`. Showcase: tabs + one large preview.
- Legacy keys `main` / `google` / `facebook` / `comparison` alias to new files.
- Note filename typo kept as shipped: `Acounts_Campaigns_*`.
- Data-deletion disconnect UI uses `Connect_*`.
- **Fixed 2026-07-24:** `Trends_*` and `Kpis_*` Light/Dark files were swapped on disk (Light held dark UI and vice versa); renamed so theme toggle shows the correct pair.

## Content & brand conventions
- Marketing UI brand casing: **Kampalo** (logo asset may still read KAMPALO).
- Legal/policy pages may keep **KAMPALO** as product legal name.
- Prefer buyer language: “AI assistant”, “synced data”, “which campaigns to scale”.
- Avoid on marketing pages: supervisor, suite IDs, LangGraph, OmniRoute, Celery, deterministic, namespaced tools, WebSocket, JWT, X-Client-Id.
- MCP only as brief “developer integrations” mention.
- Prefer **synced** over **real-time**; Google + Meta are live; TikTok/LinkedIn/Shopify/Apple are **roadmap**.
- SA360 OK as “Search Ads 360” for agency buyers; keep light.
- Disconnect deletes synced data (align docs with `/data-deletion`).
- One strong AI mention per viewport; unique meta per URL.
- Do not invent unsourced “10x / 40% ROI” claims.
- Do not oversell Pixel/CAPI durability until outbox exists.

## Differentiator — Kai (product truth)
- AI marketer agent over synced Google/Meta ads + Meta organic; market as plain-language Q&A.
- Hybrid: tools → findings → consistent ROAS/CTR/CPC rankings.
- Pages: `/kai`, homepage `#kai` (`KaiHighlight`), help/docs FAQs.

## Architecture (this site)
- Routes: `/`, `/kai`, `/compare`, `/about`, `/contact`, `/documentation`, `/help`, `/privacy`, `/terms`, `/cookies`, `/data-deletion`.
- SEO: `src/lib/site.js`, `src/lib/structuredData.js`, `JsonLd`, `robots.js`, `sitemap.js`, `public/og-image.png`.
- Env: `NEXT_PUBLIC_SITE_URL`, optional `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.

- Homepage order: Hero → **KaiHighlight** → Platforms → Features → Showcase…
- Kai is the lead product story: hero badge/CTA, nav “Kai AI” pill, dedicated section with live screenshot + prompt chips.

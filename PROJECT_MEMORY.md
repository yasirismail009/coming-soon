# Kampalo Marketing Site — Project Memory

## Product
- **Kampalo**: AI marketing analytics for Google Ads, Meta, and Shopify—one dashboard plus **Kai** (AI assistant that proposes; you confirm).
- Parent company: **Tekreign** (`tekreign.com`).
- Positioning: outcome-led (“see all your ads / know what to scale”), not jargon-led. Lead with **propose, then you confirm** — not unsupervised optimization.
- This repo is the **Next.js 15 marketing site** (`kampalo.com`), not the app backend.

## Product feature inventory (shipped — 2026-07-24)
Source of truth for marketing. Translate to buyer language on pages; keep jargon here only.

### Auth & tenancy
- Individual + Enterprise signup; secure auth
- Roles: Admin / Manager / Marketer / Client User / Visitor
- Multi-client org: agency home + **up to 4 full brand workspaces** (own connections + white-label). Switch from the **top bar**. Billing, 16 slots, 16 boards, and Kai tokens are pooled — not ×4.
- Subscriptions / plan feature gates (Ads, Search Console, GA4, etc.)
- Public pricing (GBP): Free £0; Individual Starter £8/mo or £80/yr; Enterprise £40/mo or £400/yr. Catalog: `src/lib/plans.js`. **Kai, Grok Bot, and MCP server are Starter/Enterprise only, not Free.** Surfaces: Google Ads, GA4, SEO, Meta Ads, Meta Organic, Shopify. Pooled slots: Starter 4 / Enterprise 16. **Board creation: Free cannot create / Starter 4 / Enterprise 16 pooled.**

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

### Shopify
- Live Connect suite (one shop OAuth) + in-app `/shopify` hub: products, orders, customers, analytics, marketing events
- Own platform connection (not folded into Google or Meta). Marketing names it as a pillar; MCP still has **no Shopify write tools**
- Do not mix store revenue into paid ads ROAS unless the product shows blended ROI explicitly

### Platform hub
- Unified dashboard, connections, campaigns, overall stats, overall trends
- Reports + schedules (brand / client / user scopes; Google Ads, Meta Ads, GA4, GSC, Meta organic)
- Notifications (user-scoped, sync events)
- **Kai** AI marketer agent: durable chat; tools over ads + Meta organic (internally LangGraph / Grok + Gemini—never name on marketing)

### In-app navigation (exact labels)
Kai → New Chat → Dashboard → Boards (when a valid pair is connected) → Accounts → Reports → Integrations → Comparison and Clients on Enterprise. Workspace switcher is in the top bar. Settings/Logout live in the account popover. Screenshots are **full product UI** (sidebar + page), light/dark pairs.

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
- Avoid on marketing pages: supervisor, suite IDs, LangGraph, Grok API keys, Celery, deterministic, namespaced tools, WebSocket, JWT, X-Client-Id.
- MCP only as brief “developer integrations” mention on unrelated pages. Grok Bot automation lives on `/kai/grok-bot` and `/kai/mcp`.
- Prefer **synced** over **real-time**; Google, Meta, and Shopify are live; TikTok/LinkedIn/Apple are **roadmap**.
- Do not invent unsourced competitor-user complaints (including Madgicx). Contrast philosophy: AI proposes, the operator confirms.
- SA360 OK as “Search Ads 360” for agency buyers; keep light.
- Disconnect deletes synced data (align docs with `/data-deletion`).
- One strong AI mention per viewport; unique meta per URL.
- Do not invent unsourced “10x / 40% ROI” claims.
- Do not oversell Pixel/CAPI durability until outbox exists.

## Differentiator — Kai (product truth)
- AI marketer agent over synced Google/Meta ads + Meta organic; market as plain-language Q&A.
- Hybrid: tools → findings → consistent ROAS/CTR/CPC rankings.
- Homepage + `#kai` + `#automate`: **Kai proposes, you confirm.** In-app Kai stays read-only; Grok Bot pauses are two-step.
- Pages: `/kai`, homepage `#kai` (`KaiHighlight`), `/kai/grok-bot` (Grok Bot / Cursor automations — confirmed pauses, alerts, ROAS rules), `/integrations/shopify`, help/docs FAQs.
- In-app Kai is read-only. Live pause / alert / rule writes go through Grok Bot MCP (`automate_*`), not the chat screen.

## Architecture (this site)
- Routes: `/`, `/kai`, `/kai/mcp`, `/kai/grok-bot`, `/compare`, `/alternatives`, `/integrations`, `/integrations/shopify`, `/about`, `/contact`, `/documentation`, `/help`, `/privacy`, `/terms`, `/cookies`, `/data-deletion`.
- SEO: `src/lib/site.js`, `src/lib/structuredData.js`, `src/lib/competitors.js`, `src/lib/blog.js`, `JsonLd`, `robots.js`, `sitemap.js`, HTML `/sitemap`, `/llms.txt`, `/humans.txt`, `/blog/rss.xml`, `public/og-image.png`.
- Env: `NEXT_PUBLIC_SITE_URL`, optional `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, optional `NEXT_PUBLIC_BING_SITE_VERIFICATION`.

- Homepage order: Hero → Platforms → Features → Showcase → **KaiHighlight** → **GrokBotHighlight** (`#automate`) → Reports → Pricing → **AlternativesStrip** → FAQ…
- Kai is the lead product story: hero badge/CTA, nav “Kai AI” pill, dedicated section with live screenshot + prompt chips.
- Competitor SEO (2026-09-11): honest vs pages for AgencyAnalytics, Supermetrics, Databox, DashThis, Whatagraph, Looker Studio. Kampalo’s lane is Google + Meta (+ Shopify commerce) operators + Kai with sign-off — not 80-source portals or ETL. Roundup: `/blog/google-ads-meta-dashboard-alternatives`. No Madgicx vs-page until sourced like the others.

# Kampalo marketing site

Next.js App Router marketing site for Kampalo (AI marketing analytics + Kai).

## Layout

Keep `src/app/` (Next App Router). Do not move to `src/modules/`.

- CSS: Tailwind v4 (`src/app/globals.css`) plus Kampalo tokens (`--km-*`)
- Motion: `framer-motion` (already in the project)
- Font: Plus Jakarta Sans (`next/font/google`)
- Theme: dark-first (`ThemeContext`); light mode is paper/navy

## Brand

Logos and marks come from the identity pack in `public/brand/` (mark, lockup, kai, tile, favicon). Use `BrandLogo` and `KaiMark` rather than inventing a second mark.

Product screenshots live in `public/assets/` and are resolved by `src/utils/dashboardScreenshots.js` (`resolveDashboardImage`).

Visual language matches the v2 landing mock: `#05080F` dark canvas, `#4B95F0` → `#6D4AFF` CTAs, pill nav, browser chrome around screenshots.

Layout and type use `%` (widths, gutters, decorative orbs) and `rem` (type, spacing, radii). `html` font-size is set in `%` so rem scales by breakpoint. Do not go back to fixed `px` for layout.

## Routes

`/`, `/kai`, `/kai/mcp`, `/kai/grok-bot`, `/google-ads-meta-dashboard`, `/compare`, `/compare/agencyanalytics`, `/compare/supermetrics`, `/compare/databox`, `/compare/dashthis`, `/compare/whatagraph`, `/compare/looker-studio`, `/alternatives`, `/integrations`, `/integrations/google-ads`, `/integrations/meta`, `/integrations/ga4`, `/integrations/search-console`, `/integrations/shopify`, `/blog`, `/blog/google-ads-vs-meta`, `/blog/google-ads-meta-dashboard-alternatives`, `/about`, `/contact`, `/sitemap`, `/documentation`, `/help`, `/data-deletion`, `/privacy`, `/terms`, `/cookies`.

SEO landers share `SeoPageShell`, `pageMetadata`, XML sitemap at `/sitemap.xml` (`src/app/sitemap.js` + `INDEXABLE_ROUTES`), HTML sitemap at `/sitemap`, and FAQ/Article JSON-LD in `src/lib/structuredData.js`. Vendor comparisons live in `src/lib/competitors.js` and `CompareToolPage`. Blog catalog is `src/lib/blog.js` (no CMS). Discovery files: `/robots.txt`, `/llms.txt`, `/humans.txt`, `/blog/rss.xml`. Do not add a second blog engine or CMS.

Hash URLs (`/#pricing`) and header/footer CTAs must use a real `<a>` / `AppLink`, not `next/link` — Link has dropped hashes and swallowed homepage clicks. Homepage uses `HashScroll`. E2E: Playwright in `e2e/` (`pnpm test:e2e`).

Contact form sends via EmailJS (`src/utils/emailjsClient.js`). Parent company contact is `src/constants/companyContact.js`.

## Do not

- Add a second CSS/UI library
- Delete existing apps, admin, or legal pages
- Recolor the K mark outside the identity palette

## Pricing catalog (GBP)

Source of truth for the marketing site: `src/lib/plans.js` (must match backend `create_subscription_plans.py`).

- Free £0 — 1 integration slot, 1 campaign, **cannot create boards**. Surfaces: Google Ads, GA4, SEO, Meta Ads, Meta Organic, Shopify. **No included Kai.** Grok Bot and MCP are not on Free. Anyone can buy Kai tokens (**£3.50 / 500,000**) from Settings → Plan.
- Individual **Starter** £8/month or £80/year — **4 integration slots**, **create up to 4 boards**, one workspace, **includes Kai (100k tokens/month; 150k on annual), Grok Bot, and MCP server**. Extra Kai: **£3.50 / 500k** anytime.
- Enterprise **£40/month or £400/year** — **16 integration slots**, **create up to 16 boards pooled across the agency (not 16 per brand)**, **up to 4 full brand workspaces** (each with its own connections and white-label; agency home extra), white-label, **includes Kai (500k tokens/month; 600k on annual), Grok Bot, and MCP server**. Extra Kai: **£3.50 / 500k** anytime. `plan_type` stays `basic` for Stripe.
- Annual = two months free. Slots are pooled: each Google Ads / Meta Ads account, each Shopify store, and each TikTok advertiser is 1; GA4 and SEO are 1 per Gmail; Meta Organic is 1 per Meta login. Slots stay used after disconnect; support can release a hold. Self-delete starts a 30-day hashed-email signup cooldown.
- Named pillars: Google, Meta, and Shopify. TikTok Ads stays “soon” (not shipping).
- Homepage pitch: Kai/Grok Bot propose; live ads stay on until the operator confirms. Do not put unsourced competitor-user claims on the homepage. No `/compare/madgicx` unless sourced like the other vs pages.
- Grok Bot / Cursor automations: `/kai/grok-bot` (in-app Kai is read-only; confirmed pauses, alerts, ROAS rules via MCP).


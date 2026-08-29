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

`/`, `/kai`, `/kai/mcp`, `/google-ads-meta-dashboard`, `/compare`, `/compare/agencyanalytics`, `/compare/supermetrics`, `/integrations`, `/integrations/google-ads`, `/integrations/meta`, `/blog`, `/blog/google-ads-vs-meta`, `/about`, `/contact`, `/documentation`, `/help`, `/data-deletion`, `/privacy`, `/terms`, `/cookies`.

SEO landers share `SeoPageShell`, `pageMetadata`, sitemap via `INDEXABLE_ROUTES`, and FAQ/Article JSON-LD in `src/lib/structuredData.js`. Do not add a second blog engine or CMS.

Hash URLs (`/#pricing`) and header/footer CTAs must use a real `<a>` / `AppLink`, not `next/link` — Link has dropped hashes and swallowed homepage clicks. Homepage uses `HashScroll`. E2E: Playwright in `e2e/` (`pnpm test:e2e`).

Contact form sends via EmailJS (`src/utils/emailjsClient.js`). Parent company contact is `src/constants/companyContact.js`.

## Do not

- Add a second CSS/UI library
- Delete existing apps, admin, or legal pages
- Recolor the K mark outside the identity palette

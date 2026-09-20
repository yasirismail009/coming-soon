/**
 * Vendor comparisons for SEO landers.
 *
 * Titles and H1s follow competitor SERP phrasing ([vendor] alternative,
 * PPC / KPI / marketing reporting software) — not “Kampalo vs …” as the
 * primary query. Copy stays honest: Kampalo is a Google + Meta operator
 * workspace, not an 80-source client portal or a BI pipeline.
 */

export const TOOL_COMPARISONS = [
  {
    slug: 'agencyanalytics',
    name: 'AgencyAnalytics',
    path: '/compare/agencyanalytics',
    searchKeyword: 'AgencyAnalytics alternative',
    categoryKeyword: 'agency reporting software',
    title: 'AgencyAnalytics Alternative | PPC Reporting for Google & Meta',
    description:
      'AgencyAnalytics alternative for operators who need PPC reporting on Google Ads and Meta—not 80-source client reporting software. Compare jobs, pricing, and when to keep AgencyAnalytics.',
    h1: 'AgencyAnalytics alternative for Google Ads and Meta',
    lead: 'People searching for an AgencyAnalytics alternative usually want agency reporting software: a white-label client portal, SEO rank tracking, and 80+ connectors. Kampalo is a different job—PPC reporting for Google Ads and Meta, with Kai on the same snapshot.',
    searchIntent:
      'This page is for “AgencyAnalytics alternative”, “PPC reporting software”, and “Google Ads reporting tool”. If the product you sell is a monthly client report across SEO, PPC, social, and email, stay with AgencyAnalytics (or Swydo, which roundups treat as the closest like-for-like). Use Kampalo when the weekly question is Google versus Meta.',
    rows: [
      ['Best fit', 'Operators and lean agencies on Google + Meta', 'Agencies reporting 80+ marketing sources to many clients'],
      ['Paid ads / PPC', 'Google Ads and Meta, compared in-product', 'Google Ads, Meta, and many other ad networks'],
      ['SEO / rank tracking', 'Search Console + on-page audits you already own', 'Native SEO rank tracking and site audits'],
      ['AI', 'Kai answers from synced Kampalo stats', 'Ask AI / AI Tracker across client accounts'],
      ['Client delivery', 'Branded PDF/CSV per client, scheduled', 'White-label portal, live dashboards, tasks'],
      ['Pricing model', 'GBP, by integration slots — Free, Starter £8/mo, Enterprise £40/mo', 'Typically campaign- or client-based agency plans'],
    ],
    whenOtherTitle: 'When AgencyAnalytics is the better fit',
    whenOther:
      'Choose AgencyAnalytics if the product you sell is a monthly client report across SEO, PPC, social, and email, and you need a white-label portal clients log into. Their integration catalog and agency workflow are built for that job.',
    whenKampaloTitle: 'When Kampalo is the better AgencyAnalytics alternative',
    whenKampalo:
      'Choose Kampalo if the weekly question is “Google or Meta, and which campaigns?” You want one OAuth connection per provider, comparison views, branded PDFs, and an assistant that ranks from the same synced numbers—not 80 connectors.',
    ctaSecondary: { href: '/google-ads-meta-dashboard', label: 'Google + Meta dashboard' },
    faqExport: 'AGENCYANALYTICS_FAQS',
    hubBlurb: 'Agency reporting software versus a Google + Meta PPC workspace.',
    keywords: [
      'AgencyAnalytics alternative',
      'agency reporting software',
      'client reporting software',
      'PPC reporting software',
      'Google Ads reporting tool',
      'white-label reporting',
    ],
  },
  {
    slug: 'supermetrics',
    name: 'Supermetrics',
    path: '/compare/supermetrics',
    searchKeyword: 'Supermetrics alternative',
    categoryKeyword: 'marketing intelligence platform',
    title: 'Supermetrics Alternative | Dashboard, Not a Data Pipeline',
    description:
      'Supermetrics alternative when you need a Google Ads and Meta dashboard—not a marketing intelligence platform that pipes data into Sheets, Looker Studio, or a warehouse.',
    h1: 'Supermetrics alternative when you need a product UI',
    lead: 'Supermetrics is a marketing intelligence platform: connect sources, then analyse in Studio, Claude, Looker, or a warehouse. Kampalo is not that pipeline. If the destination is “decide Google vs Meta this week,” use a product dashboard.',
    searchIntent:
      'This page is for “Supermetrics alternative”, “Looker Studio connector”, and “marketing data pipeline”. Keep Supermetrics when analysts already own Sheets or BigQuery. Use Kampalo when operators should not have to maintain that extract.',
    rows: [
      ['Job', 'See Google vs Meta and ask Kai what to scale', 'Extract and clean marketing data into a destination you already own'],
      ['Interface', 'Kampalo dashboards, trends, reports, Kai chat', 'Sheets, Looker Studio, Power BI, warehouses, Claude'],
      ['Sources', 'Google Ads, Meta, GA4, Search Console, organic Meta', '100+ marketing sources into many destinations'],
      ['AI', 'Kai, grounded in synced Kampalo stats', 'Connect data to Claude and other AI tools'],
      ['Who maintains it', 'Operators; no report builder required', 'Analysts who already own the BI layer'],
    ],
    whenOtherTitle: 'When to keep Supermetrics',
    whenOther:
      'Keep Supermetrics when the requirement is “every source, our warehouse, our model.” That includes finance joins, custom Looker builds, and feeding Claude from a governed extract. Kampalo does not replace that pipeline.',
    whenKampaloTitle: 'When Kampalo is enough',
    whenKampalo:
      'Use Kampalo when paid search and social are the decision, you do not want to maintain a Looker report, and you want Kai to rank campaigns from the same snapshot the UI shows. Developer teams can still attach MCP to that snapshot.',
    ctaSecondary: { href: '/kai/grok-bot', label: 'Grok Bot automation' },
    faqExport: 'SUPERMETRICS_FAQS',
    hubBlurb: 'Product dashboard versus a marketing intelligence pipeline.',
    keywords: [
      'Supermetrics alternative',
      'marketing intelligence platform',
      'Looker Studio connector',
      'marketing data pipeline',
      'Google Sheets marketing data',
    ],
  },
  {
    slug: 'databox',
    name: 'Databox',
    path: '/compare/databox',
    searchKeyword: 'Databox alternative',
    categoryKeyword: 'KPI dashboard',
    title: 'Databox Alternative | KPI Dashboard for Google Ads & Meta',
    description:
      'Databox alternative for teams whose KPIs are Google Ads and Meta—not a cross-business KPI dashboard with CRM, finance, goals, and industry benchmarks.',
    h1: 'Databox alternative when the KPIs are Google and Meta',
    lead: 'Databox is a KPI dashboard (and now an agentic analytics layer) built to watch many metrics—marketing plus CRM and finance if you connect them. Kampalo is built for one decision: Google versus Meta, and which campaigns to scale.',
    searchIntent:
      'This page is for “Databox alternative”, “KPI dashboard software”, and “marketing dashboard”. Choose Databox for a TV wall, goals, and benchmarks. Choose Kampalo for campaign-level Google vs Meta allocation.',
    rows: [
      ['Best fit', 'Operators who live in paid search and social', 'Teams that want a live KPI wall across marketing and the rest of the business'],
      ['Paid ads depth', 'Google Ads and Meta compared in-product, campaign by campaign', 'Google, Meta, and many other sources as widgets'],
      ['Goals & benchmarks', 'Your own ROAS, CTR, and CPC rankings', 'Goal tracking, alerts, and industry benchmarks'],
      ['AI', 'Kai answers from synced Kampalo stats', 'AI Analyst / agents on connected metrics'],
      ['Client delivery', 'Branded PDF/CSV per client, scheduled', 'Shared boards; white-label is typically a higher tier or add-on'],
    ],
    whenOtherTitle: 'When Databox is the better fit',
    whenOther:
      'Choose Databox if the job is a TV dashboard or exec snapshot: pipeline, revenue, and ads on one board, with goals and alerts. That is monitoring, not a weekly budget allocation workspace.',
    whenKampaloTitle: 'When Kampalo is the better Databox alternative',
    whenKampalo:
      'Choose Kampalo if ads are the product you run, Google and Meta are the channels that matter, and you want Kai to rank campaigns from the same numbers the dashboard shows—without assembling a KPI wall first.',
    ctaSecondary: { href: '/kai', label: 'Learn about Kai' },
    faqExport: 'DATABOX_FAQS',
    hubBlurb: 'Operator ads workspace versus a cross-business KPI dashboard.',
    keywords: [
      'Databox alternative',
      'KPI dashboard',
      'KPI dashboard software',
      'marketing dashboard',
      'business dashboard software',
    ],
  },
  {
    slug: 'dashthis',
    name: 'DashThis',
    path: '/compare/dashthis',
    searchKeyword: 'DashThis alternative',
    categoryKeyword: 'marketing reporting software',
    title: 'DashThis Alternative | Marketing Reporting Software',
    description:
      'DashThis alternative when marketing reporting software is secondary to deciding Google vs Meta. DashThis is template-first automated dashboards; Kampalo is an operator PPC workspace with Kai.',
    h1: 'DashThis alternative for Google Ads and Meta operators',
    lead: 'DashThis titles itself marketing reporting software: automated, branded dashboards from 30+ platforms. Kampalo exists so the person running Google and Meta can see both and ask what to scale—report optional.',
    searchIntent:
      'This page is for “DashThis alternative”, “marketing reporting software”, “automated marketing reports”, and “PPC dashboard report”. Keep DashThis if the deliverable is a template PDF. Use Kampalo if you live in the ads UI all week.',
    rows: [
      ['Best fit', 'In-house and lean agencies deciding Google vs Meta', 'Small agencies that sell a monthly PDF as the deliverable'],
      ['Setup', 'Connect Google and Meta; dashboard fills on first sync', 'Pick a template, map widgets, send the report'],
      ['SEO / extra sources', 'Search Console + audits on the Google connection', 'Pulls SEO from other tools you already pay for'],
      ['AI', 'Kai ranks campaigns from synced stats', 'AI Insights on the reporting layer; MCP into Claude / ChatGPT'],
      ['Pricing model', 'GBP by integration slots — from Free', 'Typically report- or source-capped agency plans'],
    ],
    whenOtherTitle: 'When DashThis is the better fit',
    whenOther:
      'Choose DashThis if clients expect a polished recurring report across several sources and you do not want to maintain Looker. It is a reporting layer, not a place to pause or reallocate campaigns.',
    whenKampaloTitle: 'When Kampalo is the better DashThis alternative',
    whenKampalo:
      'Choose Kampalo when the report is secondary to the decision. You still get branded PDFs on a schedule. The product is the comparison plus Kai—not a widget library.',
    ctaSecondary: { href: '/google-ads-meta-dashboard', label: 'Google + Meta dashboard' },
    faqExport: 'DASHTHIS_FAQS',
    hubBlurb: 'Decision workspace versus template marketing reporting software.',
    keywords: [
      'DashThis alternative',
      'marketing reporting software',
      'automated marketing reports',
      'marketing dashboard software',
      'PPC dashboard report',
    ],
  },
  {
    slug: 'whatagraph',
    name: 'Whatagraph',
    path: '/compare/whatagraph',
    searchKeyword: 'Whatagraph alternative',
    categoryKeyword: 'cross-channel reporting',
    title: 'Whatagraph Alternative | Cross-Channel Reporting vs Kampalo',
    description:
      'Whatagraph alternative for a cheaper, narrower job: Google Ads and Meta in one operator UI. Whatagraph is visual cross-channel reporting and marketing intelligence at agency scale.',
    h1: 'Whatagraph alternative for a two-channel ads workspace',
    lead: 'Whatagraph competes on blended, presentation-grade cross-channel reporting and a governed marketing-intelligence layer. Kampalo competes on a cheaper, narrower job: Google and Meta in one operator UI, with Kai on the same snapshot.',
    searchIntent:
      'This page is for “Whatagraph alternative”, “cross-channel reporting”, and “white-label marketing reports”. Choose Whatagraph if you sell designed, blended reports across dozens of sources. Choose Kampalo if you should not pay for 50 connectors.',
    rows: [
      ['Best fit', 'Operators and small agencies on Google + Meta', 'Agencies that sell designed, blended cross-channel reports'],
      ['Sources', 'Google Ads, Meta, GA4, Search Console, organic Meta', '50+ sources with blending and custom metrics'],
      ['Look & feel', 'Product UI the team works in daily', 'Client-ready visual reports as the core deliverable'],
      ['AI', 'Kai, grounded in synced Kampalo stats', 'Report-layer AI (Whatagraph IQ and similar)'],
      ['Price shape', 'Starter £8/mo, Enterprise £40/mo (GBP)', 'Typically a much higher agency entry than a two-channel workspace'],
    ],
    whenOtherTitle: 'When Whatagraph is the better fit',
    whenOther:
      'Choose Whatagraph if the product you sell is a designed, blended report across many channels, and the team can pay for that presentation layer. Kampalo does not try to win that visual-report contest.',
    whenKampaloTitle: 'When Kampalo is the better Whatagraph alternative',
    whenKampalo:
      'Choose Kampalo if you do not need 50 sources or a design system for PDFs. You need Google versus Meta this week, branded exports for the clients you have, and an assistant that uses the same ROAS the dashboard shows.',
    ctaSecondary: { href: '/kai', label: 'Learn about Kai' },
    faqExport: 'WHATAGRAPH_FAQS',
    hubBlurb: 'Operator workspace versus presentation-grade cross-channel reporting.',
    keywords: [
      'Whatagraph alternative',
      'cross-channel reporting',
      'marketing intelligence',
      'white-label marketing reports',
      'multi-channel reporting',
    ],
  },
  {
    slug: 'looker-studio',
    name: 'Looker Studio',
    path: '/compare/looker-studio',
    searchKeyword: 'Looker Studio alternative',
    categoryKeyword: 'Google Data Studio alternative',
    title: 'Looker Studio Alternative | Google Data Studio',
    description:
      'Looker Studio alternative (also searched as Google Data Studio alternative) when nobody should build or repair a DIY ads report. Keep Looker if an analyst already owns the canvas.',
    h1: 'Looker Studio alternative (Google Data Studio)',
    lead: 'Looker Studio—still widely searched as Google Data Studio—is free and infinitely custom if someone on the team owns the report. Kampalo is the product you use when nobody should have to build or repair that report every month.',
    searchIntent:
      'This page is for “Looker Studio alternative”, “Google Data Studio alternative”, and “Looker Studio vs Databox”-style queries. Keep the canvas when Google-family data is most of the stack and an analyst maintains it. Use Kampalo when operators need Google + Meta without a report builder.',
    rows: [
      ['Job', 'Decide Google vs Meta without building a report first', 'Build any chart from connectors you maintain'],
      ['Cost to start', 'Free plan, then £8/mo Starter with Kai', 'The canvas is free; Meta and many connectors are not'],
      ['Meta Ads', 'Native Meta connection in the same workspace', 'Needs a connector (often paid) and a blended data source'],
      ['Maintenance', 'Kampalo owns the dashboard and metric definitions', 'Your team owns broken connectors, date ranges, and filters'],
      ['AI', 'Kai ranks from the same synced snapshot', 'None in the product; you can attach BI or notebooks yourself'],
    ],
    whenOtherTitle: 'When to keep Looker Studio',
    whenOther:
      'Keep Looker Studio when the Google family is most of the stack, someone already maintains the report, and you need charts Kampalo will not invent. It is the right free canvas for analysts.',
    whenKampaloTitle: 'When Kampalo is the better Looker Studio alternative',
    whenKampalo:
      'Use Kampalo when the team is operators, not report builders. Connect Google and Meta, read ROAS side by side, ask Kai, and send a branded PDF. You can still keep Looker for finance or custom boards.',
    ctaSecondary: { href: '/blog/google-ads-meta-dashboard-alternatives', label: 'Dashboard alternatives guide' },
    faqExport: 'LOOKER_STUDIO_FAQS',
    hubBlurb: 'Product dashboard versus a free DIY report canvas.',
    keywords: [
      'Looker Studio alternative',
      'Google Data Studio alternative',
      'Looker Studio dashboard',
      'Google Data Studio dashboard',
      'DIY marketing dashboard',
    ],
  },
];

export function getToolComparison(slug) {
  return TOOL_COMPARISONS.find((item) => item.slug === slug);
}

export function otherToolComparisons(slug) {
  return TOOL_COMPARISONS.filter((item) => item.slug !== slug);
}

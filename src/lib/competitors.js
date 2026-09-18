/**
 * Vendor comparisons for SEO landers. Keep jobs honest — Kampalo is a Google + Meta
 * operator workspace, not an 80-source client portal or a BI pipeline.
 */

export const TOOL_COMPARISONS = [
  {
    slug: 'agencyanalytics',
    name: 'AgencyAnalytics',
    path: '/compare/agencyanalytics',
    title: 'Kampalo vs AgencyAnalytics — AgencyAnalytics Alternative',
    description:
      'AgencyAnalytics is built for multi-source client reporting. Kampalo is a Google Ads + Meta workspace with Kai. See which job each tool is for.',
    h1: 'Kampalo vs AgencyAnalytics',
    lead: 'Both help agencies stop living in native ad UIs. They are not the same product. AgencyAnalytics is a client-reporting platform. Kampalo is a unified Google Ads and Meta workspace with Kai.',
    rows: [
      ['Best fit', 'Operators and lean agencies on Google + Meta', 'Agencies reporting 80+ marketing sources to many clients'],
      ['Paid ads', 'Google Ads and Meta, compared in-product', 'Google Ads, Meta, and many other ad networks'],
      ['SEO / rank tracking', 'Search Console + on-page audits you already own', 'Native SEO rank tracking and site audits'],
      ['AI', 'Kai answers from synced Kampalo stats', 'Ask AI / AI Tracker across client accounts'],
      ['Client delivery', 'Branded PDF/CSV per client, scheduled', 'White-label portal, live dashboards, tasks'],
      ['Pricing model', 'GBP, by integration slots — Free, Starter £8/mo, Enterprise £40/mo', 'Typically campaign- or client-based agency plans'],
    ],
    whenOtherTitle: 'When AgencyAnalytics is the better fit',
    whenOther:
      'Choose AgencyAnalytics if the product you sell is a monthly client report across SEO, PPC, social, and email, and you need a white-label portal clients log into. Their integration catalog and agency workflow are built for that job.',
    whenKampaloTitle: 'When Kampalo is the better fit',
    whenKampalo:
      'Choose Kampalo if the weekly question is “Google or Meta, and which campaigns?” You want one OAuth connection per provider, comparison views, branded PDFs, and an assistant that ranks from the same synced numbers—not 80 connectors.',
    ctaSecondary: { href: '/google-ads-meta-dashboard', label: 'Google + Meta dashboard' },
    faqExport: 'AGENCYANALYTICS_FAQS',
    hubBlurb: 'Client reporting suite versus a Google + Meta workspace.',
  },
  {
    slug: 'supermetrics',
    name: 'Supermetrics',
    path: '/compare/supermetrics',
    title: 'Kampalo vs Supermetrics — Supermetrics Alternative',
    description:
      'Supermetrics moves marketing data into Sheets, Looker, and warehouses. Kampalo is a Google Ads + Meta product dashboard with Kai. See when to use each.',
    h1: 'Kampalo vs Supermetrics',
    lead: 'Supermetrics is a marketing data pipeline. Kampalo is not. If your team’s destination is Looker Studio or BigQuery, stay with a connector. If the destination is “decide Google vs Meta this week,” use a product dashboard.',
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
    hubBlurb: 'Product dashboard versus a data pipeline.',
  },
  {
    slug: 'databox',
    name: 'Databox',
    path: '/compare/databox',
    title: 'Kampalo vs Databox — Databox Alternative',
    description:
      'Databox is a KPI monitoring board with goals and benchmarks. Kampalo is a Google Ads + Meta workspace with Kai. See which job each tool is for.',
    h1: 'Kampalo vs Databox',
    lead: 'Databox is built to watch many KPIs in one board—marketing plus CRM and finance if you connect them. Kampalo is built for one decision: Google versus Meta, and which campaigns to scale.',
    rows: [
      ['Best fit', 'Operators who live in paid search and social', 'Teams that want a live KPI wall across marketing and the rest of the business'],
      ['Paid ads depth', 'Google Ads and Meta compared in-product, campaign by campaign', 'Google, Meta, and many other sources as widgets'],
      ['Goals & benchmarks', 'Your own ROAS, CTR, and CPC rankings', 'Goal tracking, alerts, and industry benchmarks'],
      ['AI', 'Kai answers from synced Kampalo stats', 'AI insights and anomaly-style alerts on connected metrics'],
      ['Client delivery', 'Branded PDF/CSV per client, scheduled', 'Shared boards; white-label is typically a higher tier or add-on'],
    ],
    whenOtherTitle: 'When Databox is the better fit',
    whenOther:
      'Choose Databox if the job is a TV dashboard or exec snapshot: pipeline, revenue, and ads on one board, with goals and alerts. That is monitoring, not a weekly budget allocation workspace.',
    whenKampaloTitle: 'When Kampalo is the better fit',
    whenKampalo:
      'Choose Kampalo if ads are the product you run, Google and Meta are the channels that matter, and you want Kai to rank campaigns from the same numbers the dashboard shows—without assembling a KPI wall first.',
    ctaSecondary: { href: '/kai', label: 'Learn about Kai' },
    faqExport: 'DATABOX_FAQS',
    hubBlurb: 'Operator ads workspace versus a cross-business KPI board.',
  },
  {
    slug: 'dashthis',
    name: 'DashThis',
    path: '/compare/dashthis',
    title: 'Kampalo vs DashThis — DashThis Alternative',
    description:
      'DashThis is a template-first client reporting layer. Kampalo is a Google Ads + Meta workspace with Kai. See which job each tool is for.',
    h1: 'Kampalo vs DashThis',
    lead: 'DashThis exists so a small agency can ship a branded report without building Looker. Kampalo exists so the person running Google and Meta can see both and ask what to scale—report optional.',
    rows: [
      ['Best fit', 'In-house and lean agencies deciding Google vs Meta', 'Small agencies that sell a monthly PDF as the deliverable'],
      ['Setup', 'Connect Google and Meta; dashboard fills on first sync', 'Pick a template, map widgets, send the report'],
      ['SEO / extra sources', 'Search Console + audits on the Google connection', 'Pulls SEO from other tools you already pay for'],
      ['AI', 'Kai ranks campaigns from synced stats', 'AI insights on the reporting layer'],
      ['Pricing model', 'GBP by integration slots — from Free', 'Typically report- or source-capped agency plans'],
    ],
    whenOtherTitle: 'When DashThis is the better fit',
    whenOther:
      'Choose DashThis if clients expect a polished recurring report across several sources and you do not want to maintain Looker. It is a reporting layer, not a place to pause or reallocate campaigns.',
    whenKampaloTitle: 'When Kampalo is the better fit',
    whenKampalo:
      'Choose Kampalo when the report is secondary to the decision. You still get branded PDFs on a schedule. The product is the comparison plus Kai—not a widget library.',
    ctaSecondary: { href: '/google-ads-meta-dashboard', label: 'Google + Meta dashboard' },
    faqExport: 'DASHTHIS_FAQS',
    hubBlurb: 'Decision workspace versus a template reporting layer.',
  },
  {
    slug: 'whatagraph',
    name: 'Whatagraph',
    path: '/compare/whatagraph',
    title: 'Kampalo vs Whatagraph — Whatagraph Alternative',
    description:
      'Whatagraph is a visual, multi-source client reporting platform. Kampalo is a Google Ads + Meta workspace with Kai. See which job each tool is for.',
    h1: 'Kampalo vs Whatagraph',
    lead: 'Whatagraph competes on blended, presentation-grade reports at agency scale. Kampalo competes on a cheaper, narrower job: Google and Meta in one operator UI, with Kai on the same snapshot.',
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
    whenKampaloTitle: 'When Kampalo is the better fit',
    whenKampalo:
      'Choose Kampalo if you do not need 50 sources or a design system for PDFs. You need Google versus Meta this week, branded exports for the clients you have, and an assistant that uses the same ROAS the dashboard shows.',
    ctaSecondary: { href: '/kai', label: 'Learn about Kai' },
    faqExport: 'WHATAGRAPH_FAQS',
    hubBlurb: 'Operator workspace versus presentation-grade multi-source reports.',
  },
  {
    slug: 'looker-studio',
    name: 'Looker Studio',
    path: '/compare/looker-studio',
    title: 'Kampalo vs Looker Studio — Looker Studio Alternative',
    description:
      'Looker Studio is a free, DIY report canvas. Kampalo is a Google Ads + Meta product dashboard with Kai. See when to keep Looker and when a product UI is enough.',
    h1: 'Kampalo vs Looker Studio',
    lead: 'Looker Studio (formerly Data Studio) is free and infinitely custom if someone on the team owns the report. Kampalo is the product you use when nobody should have to build or repair that report every month.',
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
    whenKampaloTitle: 'When Kampalo is enough',
    whenKampalo:
      'Use Kampalo when the team is operators, not report builders. Connect Google and Meta, read ROAS side by side, ask Kai, and send a branded PDF. You can still keep Looker for finance or custom boards.',
    ctaSecondary: { href: '/blog/google-ads-meta-dashboard-alternatives', label: 'Dashboard alternatives guide' },
    faqExport: 'LOOKER_STUDIO_FAQS',
    hubBlurb: 'Product dashboard versus a free DIY report canvas.',
  },
];

export function getToolComparison(slug) {
  return TOOL_COMPARISONS.find((item) => item.slug === slug);
}

export function otherToolComparisons(slug) {
  return TOOL_COMPARISONS.filter((item) => item.slug !== slug);
}

import { absoluteUrl, SITE_NAME_DISPLAY, SITE_URL } from '@/lib/site';
import { TEKREIGN_CONTACT } from '@/constants/companyContact';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME_DISPLAY,
    legalName: TEKREIGN_CONTACT.parentCompany,
    url: SITE_URL,
    logo: absoluteUrl('/android-chrome-512x512.png'),
    email: TEKREIGN_CONTACT.contactEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${TEKREIGN_CONTACT.addressLine1}, ${TEKREIGN_CONTACT.addressLine2}`,
      addressLocality: 'Islamabad',
      addressCountry: 'PK',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: TEKREIGN_CONTACT.parentCompany,
      url: 'https://tekreign.com',
    },
    sameAs: ['https://tekreign.com'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: TEKREIGN_CONTACT.contactEmail,
      contactType: 'customer support',
      url: absoluteUrl('/contact'),
    },
    knowsAbout: [
      'Google Ads reporting',
      'Meta Ads reporting',
      'Shopify store analytics',
      'marketing analytics',
      'ROAS',
      'GA4',
      'Google Search Console',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME_DISPLAY,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-GB',
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: SITE_NAME_DISPLAY,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    description:
      'Kampalo is AI-powered marketing analytics for Google Ads, Meta, and Shopify—one dashboard plus Kai, an assistant that proposes what to scale from synced data. Live pauses wait for your confirm.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '40',
      priceCurrency: 'GBP',
      offerCount: '3',
      description:
        'Free £0; Individual Starter £8/month or £80/year; Enterprise £40/month or £400/year. Annual billing is two months free.',
    },
    creator: { '@id': `${SITE_URL}/#organization` },
    screenshot: absoluteUrl('/og-image.png'),
    featureList: [
      'Unified Google Ads, Meta Ads, and Shopify dashboard',
      'Cross-platform ROAS, ROI, CPA, and CTR tracking',
      'Kai AI assistant — proposes; you confirm before live pauses',
      'Clear rankings for ROAS, CTR, and CPC winners',
      'GA4 and Search Console beside paid ads',
      'Organic Facebook and Instagram insights',
      'Shopify products, orders, and store analytics',
      'Branded and scheduled reports',
      'Secure account connections with OAuth',
    ],
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema({ title, description, path, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    image: absoluteUrl('/og-image.png'),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: 'en-GB',
  };
}

export function itemListSchema(name, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export const HELP_FAQS = [
  {
    question: 'How do I create a Kampalo account?',
    answer:
      'Click Start Free Trial on the homepage, enter your email, verify it, and complete your profile. Most people finish setup in under five minutes.',
  },
  {
    question: 'How do I connect Google Ads?',
    answer:
      'In the app, open Settings → Integrations, choose Connect Google Ads, sign in with a Google account that can access your ads, approve Kampalo, and select the accounts to sync.',
  },
  {
    question: 'What metrics does Kampalo track?',
    answer:
      'Kampalo tracks spend, impressions, clicks, conversions, ROAS (return on ad spend), ROI, CTR (click-through rate), CPA (cost per acquisition), and related KPIs across connected platforms.',
  },
  {
    question: 'What is Kai?',
    answer:
      'Kai is Kampalo’s AI marketing assistant on Starter and Enterprise (not the Free plan). You ask questions in plain language about Google Ads, Meta, Shopify, GA4, organic Facebook and Instagram insights, and SEO; Kai answers from your synced data and highlights which campaigns win on ROAS, CTR, and CPC. Kai does not pause live campaigns.',
  },
  {
    question: 'Does Kai call Google or Meta live during chat?',
    answer:
      'No. Kai uses campaign stats already synced into Kampalo. Refresh your integrations in the app when you need newer numbers.',
  },
];

export const KAI_FAQS = [
  {
    question: 'How does Kai answer marketing questions?',
    answer:
      'You ask in plain language. Kai looks at the relevant parts of your synced Google Ads, Meta, Shopify, and analytics data, then ranks clear winners using ROAS, CTR, and CPC so you know what to scale.',
  },
  {
    question: 'What data can Kai access?',
    answer:
      'Kai can only use campaign and account stats already connected and synced in your Kampalo workspace. It does not open live Google or Meta API sessions while you chat.',
  },
  {
    question: 'Does Kai pause campaigns on its own?',
    answer:
      'No. In-app Kai is read-only. Grok Bot can propose a pause from campaigns already selected in Kampalo. Live ads stay on until you explicitly confirm. That sign-off is the product, not a footnote.',
  },
  {
    question: 'Can developers connect Kai outside the chat screen?',
    answer:
      'In-app Kai is read-only. For briefs and automations (confirmed pauses, alerts, ROAS rules, report JSON) use the Grok Bot / Cursor plugin over MCP. See the Grok Bot page.',
  },
];

export { GROK_BOT_FAQS } from '@/lib/grokBot';

export const COMPARE_FAQS = [
  {
    question: 'Why compare Google Ads and Meta in one dashboard?',
    answer:
      'Each platform has its own reports and definitions. Kampalo puts spend, clicks, conversions, ROAS, CTR, and CPA side by side so you can allocate budget without jumping between tabs.',
  },
  {
    question: 'How does Kampalo help pick a winning channel?',
    answer:
      'Dashboards show the full picture. When you ask Kai, it ranks campaigns and platforms using consistent rules on ROAS, CTR, and CPC from your synced data—so recommendations are easy to verify.',
  },
];

export const DASHBOARD_FAQS = [
  {
    question: 'Can I see Google Ads and Meta in one dashboard?',
    answer:
      'Yes. Kampalo syncs Google Ads and Meta into one workspace so spend, revenue, ROAS, CTR, and CPA sit side by side. You can filter to one platform or compare both.',
  },
  {
    question: 'Does the dashboard replace Looker Studio or Sheets?',
    answer:
      'For teams that only need Google + Meta (+ GA4 and Search Console) in a product UI, yes. If you already warehouse 50+ sources into Looker or Power BI, keep that stack—Kampalo is the operator dashboard, not an ETL.',
  },
  {
    question: 'Can I ask questions instead of building a pivot table?',
    answer:
      'Kai reads the same synced stats the dashboard shows. Ask which campaigns to scale, how Google compared to Meta, or where to cut spend, and get an answer with the numbers attached.',
  },
];

export const GOOGLE_ADS_FAQS = [
  {
    question: 'How do I connect Google Ads to Kampalo?',
    answer:
      'Open Connect (or Settings → Connections), choose Google, sign in with an account that can access Ads, and approve the scopes Kampalo requests. One Google sign-in can also cover Search Ads 360, GA4, and Search Console, subject to your plan.',
  },
  {
    question: 'What Google Ads metrics does Kampalo show?',
    answer:
      'Spend, impressions, clicks, conversions, revenue, ROAS, ROI, CTR, CPC, and CPA, plus campaign and account comparisons. Trends cover daily, weekly, and custom ranges.',
  },
  {
    question: 'Does Kai call the Google Ads API while I chat?',
    answer:
      'No. Kai uses campaign stats already synced into your workspace. Refresh the Google connection in the app when you need newer numbers.',
  },
];

export const META_ADS_FAQS = [
  {
    question: 'How do I connect Meta Ads to Kampalo?',
    answer:
      'Open Connect, choose Meta, sign in, and approve access. One Meta connection covers ads plus Facebook Page and Instagram insight scopes when you enable organic.',
  },
  {
    question: 'Does Kampalo mix organic social into paid ROAS?',
    answer:
      'No. Paid Meta Ads stay on their own numbers. Page and Instagram insights sit next to ads so you can read both, but they are not blended into ROAS.',
  },
  {
    question: 'Can Kai compare Meta campaigns to Google?',
    answer:
      'Yes. Ask which Meta campaign beat Google on ROAS, CTR, or CPC. Kai ranks from synced data using the same rules you see on the dashboard.',
  },
];

export const SHOPIFY_FAQS = [
  {
    question: 'How do I connect Shopify to Kampalo?',
    answer:
      'Open Connect, choose Shopify, enter your shop domain, and sign in. One shop login covers products, orders, customers, and store analytics. Marketing events need that extra scope on the shop.',
  },
  {
    question: 'Does Kampalo mix Shopify revenue into paid ROAS?',
    answer:
      'No. Paid Google and Meta ROAS stay on ads numbers. Store revenue sits beside spend so you can read blended ROI when you ask for it — it is not folded into campaign ROAS.',
  },
  {
    question: 'Can Kai write to my Shopify store?',
    answer:
      'No. In-app Kai is read-only. Grok Bot / MCP does not write Shopify either. Kampalo syncs the shop; it does not change products, orders, or themes.',
  },
];

export const AGENCYANALYTICS_FAQS = [
  {
    question: 'Is Kampalo an AgencyAnalytics alternative?',
    answer:
      'It can be if you mainly need Google Ads, Meta, GA4, and Search Console in one workspace plus an AI assistant. AgencyAnalytics is stronger if you need 80+ sources, SEO rank tracking, and a white-label client portal as the product.',
  },
  {
    question: 'Does Kampalo white-label reports for clients?',
    answer:
      'Yes. Brand clients get their own colours, logo, and footer on scheduled PDFs and CSVs. Kampalo is not a full client login portal with tasks and proposals.',
  },
];

export const SUPERMETRICS_FAQS = [
  {
    question: 'Is Kampalo a Supermetrics alternative?',
    answer:
      'Only for a narrower job. Supermetrics moves marketing data into Sheets, Looker Studio, and warehouses. Kampalo is a product dashboard and Kai—not a general connector into your BI stack.',
  },
  {
    question: 'Can I use Kampalo and Supermetrics together?',
    answer:
      'Yes. Keep Supermetrics if analysts already live in Looker or BigQuery. Use Kampalo when operators want Google vs Meta in one UI and want to ask Kai without building a report first.',
  },
];

export const MCP_FAQS = [
  {
    question: 'What is Kampalo MCP?',
    answer:
      'MCP (Model Context Protocol) is how Grok Bot, Cursor, and Claude reach your Kampalo workspace. Read tools use the same synced Google Ads, Meta, GA4, organic, and SEO snapshot. Write tools can propose and confirm pauses, manage alert and automation rules, and generate report JSON.',
  },
  {
    question: 'Does MCP query Google Ads live?',
    answer:
      'No. Like Kai chat, MCP tools read stats already synced into Kampalo. Refresh integrations in the app when you need a newer snapshot. Pause confirms still go through Kampalo to Google or Meta after you approve.',
  },
  {
    question: 'Who is MCP for?',
    answer:
      'Teams that work in Grok Bot or Cursor and want briefs plus automations outside the Kampalo chat screen. Marketers who only need questions should use Kai in the app—Kai does not pause campaigns.',
  },
];

export const GOOGLE_VS_META_FAQS = [
  {
    question: 'Which is better in 2026, Google Ads or Meta Ads?',
    answer:
      'Neither wins for every account. Google usually captures existing search demand; Meta creates demand. Compare your own ROAS, CPA, and CTR in one dashboard instead of industry averages.',
  },
  {
    question: 'How should I split budget between Google and Meta?',
    answer:
      'Start from blended and per-platform ROAS on the same date range, then move spend toward the campaigns that win on your ranking rules—not last month’s habit.',
  },
];

export const HOME_FAQS = [
  {
    question: 'How long does connecting take?',
    answer:
      'One OAuth flow per provider. Google covers Ads, Analytics and Search Console; Meta covers Ads, Page Insights and Instagram; Shopify is its own shop login. The first sync starts immediately and you can watch its progress on the Connect screen.',
  },
  {
    question: 'Does Kampalo handle multiple currencies?',
    answer:
      'Yes. Each account keeps its own currency in cards and tables, and comparisons label the currency on every value rather than silently converting.',
  },
  {
    question: 'Can clients see their own data?',
    answer:
      'Brand clients scope a workspace to the accounts assigned to them, with their own report branding. Most teams still send the branded PDF rather than a login.',
  },
  {
    question: 'What is Kai actually reading?',
    answer:
      'Only the data already synced into your workspace for the period in view. It answers with the same figures the dashboard shows and names the campaigns and accounts behind them.',
  },
  {
    question: 'Does Kai pause campaigns by itself?',
    answer:
      'No. In-app Kai is read-only. Grok Bot can propose a pause from campaigns already in Kampalo. Live ads stay on until you confirm. That two-step sign-off is on purpose.',
  },
  {
    question: 'Is TikTok Ads supported?',
    answer:
      'Not yet. It sits on the Connect screen as the next provider, alongside Google, Meta, and Shopify.',
  },
];

export const DATABOX_FAQS = [
  {
    question: 'Is Kampalo a Databox alternative?',
    answer:
      'It can be if you mainly need Google Ads and Meta compared in one product, plus Kai. Databox is stronger if you want a live KPI wall across marketing, CRM, and finance with goals and benchmarks.',
  },
  {
    question: 'Does Kampalo have goal tracking like Databox?',
    answer:
      'Kampalo ranks campaigns on ROAS, CTR, and CPC from your synced data. It is not a general OKR or TV-dashboard product.',
  },
];

export const DASHTHIS_FAQS = [
  {
    question: 'Is Kampalo a DashThis alternative?',
    answer:
      'It can be if the report is secondary to deciding Google versus Meta. DashThis is stronger if the product you sell is a template-based client PDF across many sources.',
  },
  {
    question: 'Does Kampalo send scheduled client reports?',
    answer:
      'Yes. Branded PDFs and CSVs can go out on a schedule with the client’s colours, logo, and footer. Kampalo is still an operator workspace, not a widget-first reporting layer.',
  },
];

export const WHATAGRAPH_FAQS = [
  {
    question: 'Is Kampalo a Whatagraph alternative?',
    answer:
      'Only for a narrower, cheaper job: Google Ads and Meta in one UI, with Kai. Whatagraph is stronger if you need designed, blended reports across dozens of sources at agency scale.',
  },
  {
    question: 'Can Kampalo blend custom metrics across 50 sources?',
    answer:
      'No. Kampalo syncs Google Ads, Meta, GA4, Search Console, and organic Meta. It does not replace a multi-source blending and visualisation platform.',
  },
];

export const LOOKER_STUDIO_FAQS = [
  {
    question: 'Is Kampalo a Looker Studio alternative?',
    answer:
      'For teams that only need Google + Meta in a product UI, yes. Keep Looker Studio if an analyst already maintains custom boards or you warehouse many sources.',
  },
  {
    question: 'Is Looker Studio free and Kampalo paid?',
    answer:
      'Looker Studio’s canvas is free; Meta and many connectors are not, and someone has to maintain the report. Kampalo has a Free plan, then Starter at £8/month with Kai.',
  },
];

export const ALTERNATIVES_FAQS = [
  {
    question: 'What is Kampalo an alternative to?',
    answer:
      'Kampalo is an alternative when the job is Google Ads and Meta in one dashboard, plus an assistant on those numbers. It is not a drop-in for 80-source client portals, warehouses, or TV KPI walls.',
  },
  {
    question: 'Which tool should I pick if I only run Google and Meta?',
    answer:
      'Start with Kampalo if you want a product UI and Kai. Keep Looker Studio if you already have a report you trust. Add AgencyAnalytics, DashThis, or Whatagraph if client reporting across many sources is the product you sell.',
  },
];

export const DASHBOARD_ALTERNATIVES_FAQS = [
  {
    question: 'What is the best Google Ads and Meta dashboard in 2026?',
    answer:
      'The best tool is the one that matches the job. Kampalo if operators need Google versus Meta plus Kai. AgencyAnalytics or Whatagraph if the deliverable is a multi-source client report. Looker Studio if you will maintain the canvas. Databox if the job is a KPI wall.',
  },
  {
    question: 'Do I need 80 integrations to compare Google and Meta?',
    answer:
      'No. Connector count is a proxy for a different product (agency reporting or ETL). Two native connections and consistent ROAS, CTR, and CPA are enough for the weekly budget decision.',
  },
];

export const GA4_FAQS = [
  {
    question: 'Does Kampalo include GA4 with Google Ads?',
    answer:
      'Yes. One Google sign-in can cover Google Ads, GA4, and Search Console, but each product uses its own slot: selected Ads accounts each count, and GA4 and SEO each count once per Gmail.',
  },
  {
    question: 'Does Kai read GA4 as well as ads?',
    answer:
      'Kai can use GA4 stats that are already synced into the workspace. Refresh the Google connection when you need a newer snapshot.',
  },
];

export const SEARCH_CONSOLE_FAQS = [
  {
    question: 'How does Search Console show up in Kampalo?',
    answer:
      'Search Console performance sits next to the SEO suite: queries, pages, and indexing context beside paid Google Ads—not as a separate product.',
  },
  {
    question: 'Is Kampalo a rank tracker like AgencyAnalytics?',
    answer:
      'No. Kampalo uses Search Console and on-page audits on properties you already own. It does not sell independent SERP rank tracking across thousands of keywords.',
  },
];

export const FAQ_BY_EXPORT = {
  AGENCYANALYTICS_FAQS,
  SUPERMETRICS_FAQS,
  DATABOX_FAQS,
  DASHTHIS_FAQS,
  WHATAGRAPH_FAQS,
  LOOKER_STUDIO_FAQS,
};

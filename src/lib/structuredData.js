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
    inLanguage: 'en-US',
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
      'Kampalo is AI-powered marketing analytics for Google Ads and Meta—one dashboard plus Kai, an assistant that recommends which campaigns to scale based on your synced performance data.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free plan available; Premium and Enterprise paid tiers',
    },
    creator: { '@id': `${SITE_URL}/#organization` },
    featureList: [
      'Unified Google Ads and Meta Ads dashboard',
      'Cross-platform ROAS, ROI, CPA, and CTR tracking',
      'Kai AI assistant for campaign recommendations',
      'Clear rankings for ROAS, CTR, and CPC winners',
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

export function articleSchema({ title, description, path, datePublished }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    dateModified: datePublished,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    image: absoluteUrl('/og-image.png'),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: 'en-US',
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
      'Kai is Kampalo’s AI marketing assistant. You ask questions in plain language about your Google Ads and Meta performance; Kai answers from your synced data and highlights which campaigns win on ROAS, CTR, and CPC.',
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
      'You ask in plain language. Kai looks at the relevant parts of your synced Google Ads, Meta, and analytics data, then ranks clear winners using ROAS, CTR, and CPC so you know what to scale.',
  },
  {
    question: 'What data can Kai access?',
    answer:
      'Kai can only use campaign and account stats already connected and synced in your Kampalo workspace. It does not open live Google or Meta API sessions while you chat.',
  },
  {
    question: 'Can developers connect Kai outside the chat screen?',
    answer:
      'Yes. Teams building custom workflows can use our developer integrations (MCP) to access the same marketing tools Kai uses inside the product.',
  },
];

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
      'MCP (Model Context Protocol) lets developer tools such as Claude or Cursor call the same marketing tools Kai uses inside Kampalo, against your already-synced workspace data.',
  },
  {
    question: 'Does MCP query Google Ads live?',
    answer:
      'No. Like Kai chat, MCP tools read stats already synced into Kampalo. Refresh integrations in the app when you need a newer snapshot.',
  },
  {
    question: 'Who is MCP for?',
    answer:
      'Teams that want Kai-style answers inside their own agent workflow. Marketers who only need chat should use Kai in the Kampalo app—no MCP setup required.',
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

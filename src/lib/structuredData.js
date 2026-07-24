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

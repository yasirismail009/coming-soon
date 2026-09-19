/** Canonical production origin for absolute SEO URLs */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://kampalo.com'
).replace(/\/$/, '');

export const SITE_NAME = 'Kampalo';
export const SITE_NAME_DISPLAY = 'Kampalo';

export const SITEMAP_GROUPS = [
  'Product',
  'Alternatives',
  'Integrations',
  'Resources',
  'Company',
  'Legal',
];

export const INDEXABLE_ROUTES = [
  { path: '/', title: 'Home', group: 'Product', priority: 1, changeFrequency: 'weekly' },
  { path: '/kai', title: 'Kai AI assistant', group: 'Product', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/kai/mcp', title: 'Kai MCP', group: 'Product', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/kai/grok-bot', title: 'Grok Bot automation', group: 'Product', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/boards', title: 'Boards', group: 'Product', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/google-ads-meta-dashboard', title: 'Google Ads and Meta dashboard', group: 'Product', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/compare', title: 'Compare Google Ads vs Meta', group: 'Product', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/alternatives', title: 'Tool alternatives', group: 'Alternatives', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/compare/agencyanalytics', title: 'Kampalo vs AgencyAnalytics', group: 'Alternatives', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/compare/supermetrics', title: 'Kampalo vs Supermetrics', group: 'Alternatives', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/compare/databox', title: 'Kampalo vs Databox', group: 'Alternatives', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/compare/dashthis', title: 'Kampalo vs DashThis', group: 'Alternatives', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/compare/whatagraph', title: 'Kampalo vs Whatagraph', group: 'Alternatives', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/compare/looker-studio', title: 'Kampalo vs Looker Studio', group: 'Alternatives', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/integrations', title: 'Integrations', group: 'Integrations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/integrations/google-ads', title: 'Google Ads', group: 'Integrations', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/integrations/meta', title: 'Meta Ads', group: 'Integrations', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/integrations/ga4', title: 'Google Analytics 4', group: 'Integrations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/integrations/search-console', title: 'Search Console', group: 'Integrations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/integrations/shopify', title: 'Shopify', group: 'Integrations', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/blog', title: 'Blog', group: 'Resources', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/blog/google-ads-meta-dashboard-alternatives', title: 'Best Google Ads and Meta dashboards in 2026', group: 'Resources', priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-09-11' },
  { path: '/blog/google-ads-vs-meta', title: 'Google Ads vs Meta Ads', group: 'Resources', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-08-29' },
  { path: '/documentation', title: 'Documentation', group: 'Resources', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/help', title: 'Help Center', group: 'Resources', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/about', title: 'About', group: 'Company', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', title: 'Contact', group: 'Company', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/sitemap', title: 'Sitemap', group: 'Company', priority: 0.4, changeFrequency: 'weekly' },
  { path: '/data-deletion', title: 'Data deletion', group: 'Legal', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/privacy', title: 'Privacy', group: 'Legal', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', title: 'Terms', group: 'Legal', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies', title: 'Cookies', group: 'Legal', priority: 0.3, changeFrequency: 'yearly' },
];

export const DEFAULT_LASTMOD = '2026-09-11';

export function groupedIndexableRoutes() {
  return SITEMAP_GROUPS.map((group) => ({
    group,
    routes: INDEXABLE_ROUTES.filter((route) => route.group === group),
  })).filter((item) => item.routes.length);
}

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path = '/',
  ogImage = '/og-image.png',
  type = 'website',
  publishedTime,
}) {
  const url = absoluteUrl(path);
  const ogTitle =
    typeof title === 'string'
      ? title
      : title?.absolute || SITE_NAME_DISPLAY;

  return {
    title,
    description,
    alternates: {
      canonical: path === '/' ? SITE_URL : absoluteUrl(path),
      types: {
        'application/rss+xml': `${SITE_URL}/blog/rss.xml`,
      },
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME_DISPLAY,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME_DISPLAY} — Google Ads and Meta dashboard`,
        },
      ],
      locale: 'en_GB',
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [ogImage],
    },
  };
}

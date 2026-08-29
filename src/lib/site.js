/** Canonical production origin for absolute SEO URLs */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://kampalo.com'
).replace(/\/$/, '');

export const SITE_NAME = 'Kampalo';
export const SITE_NAME_DISPLAY = 'Kampalo';

export const INDEXABLE_ROUTES = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/kai', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/kai/mcp', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/google-ads-meta-dashboard', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/compare', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/compare/agencyanalytics', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/compare/supermetrics', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/integrations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/integrations/google-ads', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/integrations/meta', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/blog/google-ads-vs-meta', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/documentation', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/help', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/data-deletion', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
];

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
          alt: `${SITE_NAME_DISPLAY} — AI-powered marketing analytics`,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [ogImage],
    },
  };
}

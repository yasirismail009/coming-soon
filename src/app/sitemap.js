import { absoluteUrl, DEFAULT_LASTMOD, INDEXABLE_ROUTES, SITE_URL } from '@/lib/site';

export default function sitemap() {
  return INDEXABLE_ROUTES.map(({ path, priority, changeFrequency, lastModified }) => {
    const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
    const entry = {
      url,
      lastModified: new Date(lastModified || DEFAULT_LASTMOD),
      changeFrequency,
      priority,
    };

    if (path === '/') {
      entry.images = [absoluteUrl('/og-image.png')];
    }

    return entry;
  });
}

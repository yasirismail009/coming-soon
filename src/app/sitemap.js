import { INDEXABLE_ROUTES, SITE_URL } from '@/lib/site';

export default function sitemap() {
  const lastModified = new Date();

  return INDEXABLE_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

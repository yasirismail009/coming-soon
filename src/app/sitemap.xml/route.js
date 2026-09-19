import { absoluteUrl, DEFAULT_LASTMOD, INDEXABLE_ROUTES, SITE_URL } from '@/lib/site';

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET() {
  const urls = INDEXABLE_ROUTES.map(({ path, priority, changeFrequency, lastModified }) => {
    const loc = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
    const lastmod = new Date(lastModified || DEFAULT_LASTMOD).toISOString();
    const image =
      path === '/'
        ? `
    <image:image>
      <image:loc>${xmlEscape(absoluteUrl('/og-image.png'))}</image:loc>
    </image:image>`
        : '';
    return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${xmlEscape(changeFrequency)}</changefreq>
    <priority>${priority}</priority>${image}
  </url>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

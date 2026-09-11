import { BLOG_POSTS } from '@/lib/blog';
import { SITE_NAME_DISPLAY, SITE_URL, absoluteUrl } from '@/lib/site';

function xmlEscape(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const items = BLOG_POSTS.map((post) => {
    const url = absoluteUrl(post.path);
    return `    <item>
      <title>${xmlEscape(post.title)}</title>
      <link>${xmlEscape(url)}</link>
      <guid isPermaLink="true">${xmlEscape(url)}</guid>
      <pubDate>${new Date(`${post.datePublished}T09:00:00.000Z`).toUTCString()}</pubDate>
      <description>${xmlEscape(post.description)}</description>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(`${SITE_NAME_DISPLAY} blog`)}</title>
    <link>${xmlEscape(`${SITE_URL}/blog`)}</link>
    <description>${xmlEscape('Guides on Google Ads, Meta, and marketing dashboards from Kampalo.')}</description>
    <language>en-gb</language>
    <atom:link href="${xmlEscape(`${SITE_URL}/blog/rss.xml`)}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

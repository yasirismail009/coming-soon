import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { groupedIndexableRoutes, pageMetadata } from '@/lib/site';
import { breadcrumbSchema, itemListSchema } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Sitemap',
  description:
    'HTML sitemap of Kampalo.com: product, alternatives, integrations, blog, and legal pages. XML sitemap at /sitemap.xml.',
  path: '/sitemap',
});

const discovery = [
  { href: '/sitemap.xml', label: 'XML sitemap', body: 'URL list for Google Search Console and Bing.' },
  { href: '/robots.txt', label: 'robots.txt', body: 'Crawl rules and sitemap location.' },
  { href: '/blog/rss.xml', label: 'Blog RSS', body: 'Feed for readers and syndicators.' },
  { href: '/llms.txt', label: 'llms.txt', body: 'Plain-language product summary for AI crawlers.' },
];

export default function HtmlSitemapPage() {
  const groups = groupedIndexableRoutes();

  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Sitemap', path: '/sitemap' },
        ]),
        itemListSchema(
          'Kampalo sitemap',
          groups.flatMap(({ routes }) =>
            routes.map((route) => ({ name: route.title, path: route.path })),
          ),
        ),
      ]}
      wide
    >
      <p className="km-kicker">Index</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">Sitemap</h1>
      <p className="km-lead mb-12">
        Every public page on kampalo.com. Search engines should use the XML file; people can use
        this page.
      </p>

      <section className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {discovery.map((item) => (
          <a key={item.href} href={item.href} className="km-card block px-[1.5rem] py-[1.5rem]">
            <h2 className="mb-2 text-[1.125rem] font-semibold">{item.label}</h2>
            <p className="leading-relaxed text-[var(--km-muted)]">{item.body}</p>
            <p className="mt-3 text-[0.875rem] text-[var(--km-faint)]">{item.href}</p>
          </a>
        ))}
      </section>

      {groups.map(({ group, routes }) => (
        <section key={group} className="mb-12">
          <h2 className="km-h2">{group}</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className="text-[var(--km-link)] underline underline-offset-4"
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </SeoPageShell>
  );
}

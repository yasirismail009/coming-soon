import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { BLOG_POSTS } from '@/lib/blog';
import { pageMetadata } from '@/lib/site';
import { breadcrumbSchema, itemListSchema } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Kampalo Blog — AgencyAnalytics Alternatives & Google vs Meta',
  description:
    'AgencyAnalytics alternatives 2026, Google Ads vs Facebook Ads budget notes, and asking Kai which campaigns to scale. RSS at /blog/rss.xml.',
  path: '/blog',
});

export default function BlogIndexPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]),
        itemListSchema(
          'Kampalo blog',
          BLOG_POSTS.map((post) => ({ name: post.title, path: post.path })),
        ),
      ]}
    >
      <p className="km-kicker">Resources</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">Kampalo blog</h1>
      <p className="km-lead mb-12">
        Practical notes for teams that run Google Ads and Meta together. Subscribe via{' '}
        <a href="/blog/rss.xml" className="text-[var(--km-link)] underline">
          RSS
        </a>
        .
      </p>
      <div className="space-y-5">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={post.path} className="km-card block px-[1.5rem] py-[1.5rem]">
            <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--km-faint)]">
              {post.kicker} · {post.dateLabel}
            </p>
            <h2 className="mb-2 text-[1.25rem] font-semibold">{post.title}</h2>
            <p className="leading-relaxed text-[var(--km-muted)]">{post.description}</p>
          </Link>
        ))}
      </div>
    </SeoPageShell>
  );
}

import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { pageMetadata } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Kampalo Blog',
  description:
    'Guides on Google Ads vs Meta, unified dashboards, and asking Kai which campaigns to scale.',
  path: '/blog',
});

export default function BlogIndexPage() {
  return (
    <SeoPageShell
      jsonLd={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ])}
    >
      <p className="km-kicker">Resources</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">Kampalo blog</h1>
      <p className="km-lead mb-12">
        Practical notes for teams that run Google Ads and Meta together. No connector roundups.
      </p>
      <Link href="/blog/google-ads-vs-meta" className="km-card block px-[1.5rem] py-[1.5rem]">
        <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--km-faint)]">
          Guide
        </p>
        <h2 className="mb-2 text-[1.25rem] font-semibold">Google Ads vs Meta Ads: compare your accounts, not averages</h2>
        <p className="leading-relaxed text-[var(--km-muted)]">
          Why industry CPC tables mislead, and how to split budget from your own ROAS and CPA.
        </p>
      </Link>
    </SeoPageShell>
  );
}

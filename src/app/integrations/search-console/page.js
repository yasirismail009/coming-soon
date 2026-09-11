import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import FaqList from '@/components/FaqList';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  SEARCH_CONSOLE_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Search Console in Kampalo',
  description:
    'Connect Google Search Console to Kampalo on the same Google sign-in as Ads and GA4. See queries and pages beside paid search—without buying a separate rank tracker.',
  path: '/integrations/search-console',
});

const steps = [
  'Open Connect and choose Google with access to Search Console.',
  'Approve the scopes Kampalo requests. Ads and GA4 can share this sign-in.',
  'Select the properties to sync. They count toward the same Google platform connection.',
  'Use the SEO suite for performance, page metadata, and indexing context after the first sync.',
];

export default function SearchConsoleIntegrationPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Integrations', path: '/integrations' },
          { name: 'Search Console', path: '/integrations/search-console' },
        ]),
        faqSchema(SEARCH_CONSOLE_FAQS),
      ]}
    >
      <p className="km-kicker">Google integration</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">Search Console next to paid Google Ads</h1>
      <p className="km-lead mb-12">
        Organic queries and paid search are different jobs. Kampalo keeps Search Console beside
        Google Ads so you can see both without a second login—and without mixing organic into paid
        ROAS.
      </p>

      <section className="mb-16">
        <h2 className="km-h2">What the SEO suite uses</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          <li>Search Console performance for queries and pages you already own</li>
          <li>On-page audits and indexing context in the same run</li>
          <li>The same Google connection as Ads and GA4</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">How to connect</h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-[2rem] w-[2rem] shrink-0 items-center justify-center rounded-full bg-[var(--km-accent)] text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="pt-[0.125rem] leading-relaxed text-[var(--km-muted)]">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Not a rank-tracking product</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          If you need independent SERP tracking across thousands of keywords, that is a different
          category—see{' '}
          <Link href="/compare/agencyanalytics" className="text-[var(--km-link)] underline">
            Kampalo vs AgencyAnalytics
          </Link>
          . Kampalo reports the Search Console properties you connect.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/integrations/google-ads" className="km-btn-primary">
            Google Ads integration
          </Link>
          <Link href="/integrations/ga4" className="km-btn-ghost">
            GA4 reporting
          </Link>
        </div>
      </section>

      <FaqList faqs={SEARCH_CONSOLE_FAQS} />
    </SeoPageShell>
  );
}

import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import FaqList from '@/components/FaqList';
import { pageMetadata } from '@/lib/site';
import { breadcrumbSchema, faqSchema, GA4_FAQS } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'GA4 Reporting in Kampalo',
  description:
    'Connect Google Analytics 4 to Kampalo on the same Google sign-in as Ads and Search Console. Read acquisition next to paid ROAS, then ask Kai from the synced snapshot.',
  path: '/integrations/ga4',
});

const steps = [
  'Open Connect and choose Google with an account that can access Analytics.',
  'Approve the GA4 scopes Kampalo requests. The same sign-in can include Ads and Search Console.',
  'Select the properties your plan allows. This Google family counts as one platform connection.',
  'Wait for the first sync. Kai and the dashboard read this snapshot—not a live GA4 session while you chat.',
];

export default function Ga4IntegrationPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Integrations', path: '/integrations' },
          { name: 'GA4', path: '/integrations/ga4' },
        ]),
        faqSchema(GA4_FAQS),
      ]}
    >
      <p className="km-kicker">Google integration</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">GA4 beside Google Ads, not in another tab</h1>
      <p className="km-lead mb-12">
        Analytics 4 answers what happened after the click. Kampalo keeps that next to paid Google
        and Meta so you are not exporting two products to decide where budget goes.
      </p>

      <section className="mb-16">
        <h2 className="km-h2">What one Google connection covers</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          <li>Google Ads and Search Ads 360 campaign stats</li>
          <li>GA4 acquisition, engagement, and conversion context (plan-dependent)</li>
          <li>Search Console performance in the SEO suite</li>
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
        <h2 className="km-h2">Paid ads still have their own ROAS</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          GA4 does not replace Google Ads or Meta ROAS in Kampalo. Use Analytics for on-site
          behaviour; use the{' '}
          <Link href="/google-ads-meta-dashboard" className="text-[var(--km-link)] underline">
            unified ads dashboard
          </Link>{' '}
          for spend versus revenue on each buying platform.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/integrations/google-ads" className="km-btn-primary">
            Google Ads integration
          </Link>
          <Link href="/integrations/search-console" className="km-btn-ghost">
            Search Console
          </Link>
        </div>
      </section>

      <FaqList faqs={GA4_FAQS} />
    </SeoPageShell>
  );
}

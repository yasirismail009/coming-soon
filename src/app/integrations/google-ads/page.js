import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  GOOGLE_ADS_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Google Ads Reporting in Kampalo',
  description:
    'Connect Google Ads to Kampalo. Track spend, ROAS, CTR, and CPA next to Meta. One Google sign-in can include GA4 and Search Console.',
  path: '/integrations/google-ads',
});

const steps = [
  'Open Connect (or Settings → Connections) in the Kampalo app.',
  'Choose Google and sign in with an account that can access Ads.',
  'Approve the scopes Kampalo requests. Do not grant more than the app asks for.',
  'Select accounts within your plan limits, or auto-include them on Enterprise.',
  'Wait for the first sync. Kai and the dashboard read this snapshot—not a live Ads API session.',
];

export default function GoogleAdsIntegrationPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Integrations', path: '/integrations' },
          { name: 'Google Ads', path: '/integrations/google-ads' },
        ]),
        faqSchema(GOOGLE_ADS_FAQS),
      ]}
    >
      <p className="km-kicker">Google integration</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">Google Ads reporting without a second tab</h1>
      <p className="km-lead mb-12">
        Connect Google Ads once. Kampalo shows campaign and account performance next to Meta, with
        the same ROAS, CTR, and CPA language across both.
      </p>

      <section className="mb-16">
        <h2 className="km-h2">What one Google sign-in can cover</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          <li>Google Ads and Search Ads 360 campaign stats</li>
          <li>GA4 audience, acquisition, and engagement (plan-dependent)</li>
          <li>Search Console performance next to the SEO suite</li>
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
        <h2 className="km-h2">Google next to Meta</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          The native Google Ads UI is for buying. Kampalo is for the comparison: which Google
          campaigns beat Meta on the rules you already use. Read the{' '}
          <Link href="/google-ads-meta-dashboard" className="text-[var(--km-link)] underline">
            unified dashboard
          </Link>{' '}
          or the{' '}
          <Link href="/blog/google-ads-vs-meta" className="text-[var(--km-link)] underline">
            Google vs Meta guide
          </Link>
          .
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="km-btn-primary">
            Talk to us
          </Link>
          <Link href="/documentation" className="km-btn-ghost">
            Full setup docs
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="km-h2">FAQ</h2>
        <div className="space-y-5">
          {GOOGLE_ADS_FAQS.map((faq) => (
            <div key={faq.question} className="km-card px-[1.5rem] py-[1.5rem]">
              <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
              <p className="leading-relaxed text-[var(--km-muted)]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </SeoPageShell>
  );
}

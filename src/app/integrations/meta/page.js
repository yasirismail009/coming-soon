import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  META_ADS_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Meta Ads Reporting in Kampalo',
  description:
    'Connect Meta Ads (Facebook and Instagram) to Kampalo. Compare ROAS and CPA with Google Ads. Organic Page insights stay out of paid ROAS.',
  path: '/integrations/meta',
});

const steps = [
  'Open Connect in the Kampalo app and choose Meta.',
  'Sign in and approve ads access for the ad accounts you run.',
  'Optionally enable Page and Instagram insight scopes for organic—separate from ads.',
  'Wait for the first sync, then compare Meta to Google on the same date range.',
];

export default function MetaIntegrationPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Integrations', path: '/integrations' },
          { name: 'Meta Ads', path: '/integrations/meta' },
        ]),
        faqSchema(META_ADS_FAQS),
      ]}
    >
      <p className="km-kicker">Meta integration</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">Meta Ads next to Google, not instead of it</h1>
      <p className="km-lead mb-12">
        Facebook and Instagram ads sync into the same workspace as Google Ads. Paid ROAS stays paid.
        Organic reach sits beside it so you can read both without mixing the math.
      </p>

      <section className="mb-16">
        <h2 className="km-h2">What Kampalo reads from Meta</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          <li>Campaign and account spend, clicks, conversions, ROAS, CTR, and CPA</li>
          <li>Breakdowns by age, gender, location, device, and placement when the account has them</li>
          <li>Page and Instagram organic insights on separate tokens</li>
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
        <h2 className="km-h2">Ask Kai about Meta</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Questions like “which Meta campaign beat Google on ROAS last week?” use synced stats and
          the same ranking rules as the dashboard.{' '}
          <Link href="/kai" className="text-[var(--km-link)] underline">
            How Kai works
          </Link>
          .
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="km-btn-primary">
            Talk to us
          </Link>
          <Link href="/integrations/google-ads" className="km-btn-ghost">
            Google Ads integration
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="km-h2">FAQ</h2>
        <div className="space-y-5">
          {META_ADS_FAQS.map((faq) => (
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

import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  SHOPIFY_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Shopify Reporting in Kampalo',
  description:
    'Connect Shopify to Kampalo with one shop login. Products, orders, customers, and store analytics sit beside Google and Meta ads — store revenue is not mixed into paid ROAS.',
  path: '/integrations/shopify',
});

const steps = [
  'Open Connect in the Kampalo app and choose Shopify.',
  'Enter your shop domain and sign in to approve access.',
  'Wait for the first sync of products, orders, customers, and store analytics.',
  'Open the Shopify hub, or compare store revenue next to Google and Meta on the same date range.',
];

export default function ShopifyIntegrationPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Integrations', path: '/integrations' },
          { name: 'Shopify', path: '/integrations/shopify' },
        ]),
        faqSchema(SHOPIFY_FAQS),
      ]}
    >
      <p className="km-kicker">Shopify integration</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">
        Shopify next to Google and Meta, not instead of them
      </h1>
      <p className="km-lead mb-12">
        One shop login syncs commerce into the same workspace as your ads. Store revenue and orders
        sit beside spend so you can read blended ROI when you ask for it — paid ROAS stays paid.
      </p>

      <section className="mb-16">
        <h2 className="km-h2">What Kampalo reads from Shopify</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          <li>Products, orders, customers, and store analytics from one connection</li>
          <li>Marketing events when the shop grants that scope</li>
          <li>Store revenue next to Google and Meta spend — not folded into ads ROAS</li>
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
        <h2 className="km-h2">Google, Meta, Shopify — one login each</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Google Ads, Analytics, and Search Console share one Google sign-in. Meta ads, Page, and
          Instagram share one Meta sign-in. Shopify is its own shop login. Kai reads the same
          synced snapshot; it does not write to the store.{' '}
          <Link href="/kai" className="text-[var(--km-link)] underline">
            How Kai works
          </Link>
          .
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="km-btn-primary">
            Talk to us
          </Link>
          <Link href="/integrations/meta" className="km-btn-ghost">
            Meta Ads integration
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="km-h2">FAQ</h2>
        <div className="space-y-5">
          {SHOPIFY_FAQS.map((faq) => (
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

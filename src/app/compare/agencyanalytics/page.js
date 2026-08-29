import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  AGENCYANALYTICS_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Kampalo vs AgencyAnalytics',
  description:
    'AgencyAnalytics is built for multi-source client reporting. Kampalo is a Google Ads + Meta workspace with Kai. See which job each tool is for.',
  path: '/compare/agencyanalytics',
});

const rows = [
  ['Best fit', 'Operators and lean agencies on Google + Meta', 'Agencies reporting 80+ marketing sources to many clients'],
  ['Paid ads', 'Google Ads and Meta, compared in-product', 'Google Ads, Meta, and many other ad networks'],
  ['SEO / rank tracking', 'Search Console + on-page audits you already own', 'Native SEO rank tracking and site audits'],
  ['AI', 'Kai answers from synced Kampalo stats', 'Ask AI / AI Tracker across client accounts'],
  ['Client delivery', 'Branded PDF/CSV per client, scheduled', 'White-label portal, live dashboards, tasks'],
  ['Pricing model', 'By platform connections; free plan includes Kai', 'Typically campaign- or client-based agency plans'],
];

export default function AgencyAnalyticsComparePage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Compare', path: '/compare' },
          { name: 'AgencyAnalytics', path: '/compare/agencyanalytics' },
        ]),
        faqSchema(AGENCYANALYTICS_FAQS),
      ]}
    >
      <p className="km-kicker">Tool comparison</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">Kampalo vs AgencyAnalytics</h1>
      <p className="km-lead mb-12">
        Both help agencies stop living in native ad UIs. They are not the same product. AgencyAnalytics
        is a client-reporting platform. Kampalo is a unified Google Ads and Meta workspace with Kai.
      </p>

      <div className="mb-16 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-[0.9375rem]">
          <thead>
            <tr className="border-b border-[var(--km-border)]">
              <th className="px-[1rem] py-[0.75rem] font-semibold"> </th>
              <th className="px-[1rem] py-[0.75rem] font-semibold">Kampalo</th>
              <th className="px-[1rem] py-[0.75rem] font-semibold">AgencyAnalytics</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, kampalo, other]) => (
              <tr key={label} className="border-b border-[var(--km-border)]">
                <td className="px-[1rem] py-[0.75rem] font-semibold text-[var(--km-ink)]">{label}</td>
                <td className="px-[1rem] py-[0.75rem] text-[var(--km-muted)]">{kampalo}</td>
                <td className="px-[1rem] py-[0.75rem] text-[var(--km-muted)]">{other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mb-16">
        <h2 className="km-h2">When AgencyAnalytics is the better fit</h2>
        <p className="text-lg leading-relaxed text-[var(--km-muted)]">
          Choose AgencyAnalytics if the product you sell is a monthly client report across SEO, PPC,
          social, and email, and you need a white-label portal clients log into. Their integration
          catalog and agency workflow are built for that job.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">When Kampalo is the better fit</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Choose Kampalo if the weekly question is “Google or Meta, and which campaigns?” You want
          one OAuth connection per provider, comparison views, branded PDFs, and an assistant that
          ranks from the same synced numbers—not 80 connectors.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="/#pricing" className="km-btn-primary">
            See Kampalo plans
          </a>
          <Link href="/google-ads-meta-dashboard" className="km-btn-ghost">
            Google + Meta dashboard
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="km-h2">FAQ</h2>
        <div className="space-y-5">
          {AGENCYANALYTICS_FAQS.map((faq) => (
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

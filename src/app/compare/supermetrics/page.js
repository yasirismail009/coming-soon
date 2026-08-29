import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  SUPERMETRICS_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Kampalo vs Supermetrics',
  description:
    'Supermetrics moves marketing data into Sheets, Looker, and warehouses. Kampalo is a Google Ads + Meta product dashboard with Kai. See when to use each.',
  path: '/compare/supermetrics',
});

const rows = [
  ['Job', 'See Google vs Meta and ask Kai what to scale', 'Extract and clean marketing data into a destination you already own'],
  ['Interface', 'Kampalo dashboards, trends, reports, Kai chat', 'Sheets, Looker Studio, Power BI, warehouses, Claude'],
  ['Sources', 'Google Ads, Meta, GA4, Search Console, organic Meta', '100+ marketing sources into many destinations'],
  ['AI', 'Kai, grounded in synced Kampalo stats', 'Connect data to Claude and other AI tools'],
  ['Who maintains it', 'Operators; no report builder required', 'Analysts who already own the BI layer'],
];

export default function SupermetricsComparePage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Compare', path: '/compare' },
          { name: 'Supermetrics', path: '/compare/supermetrics' },
        ]),
        faqSchema(SUPERMETRICS_FAQS),
      ]}
    >
      <p className="km-kicker">Tool comparison</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">Kampalo vs Supermetrics</h1>
      <p className="km-lead mb-12">
        Supermetrics is a marketing data pipeline. Kampalo is not. If your team’s destination is
        Looker Studio or BigQuery, stay with a connector. If the destination is “decide Google vs Meta
        this week,” use a product dashboard.
      </p>

      <div className="mb-16 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-[0.9375rem]">
          <thead>
            <tr className="border-b border-[var(--km-border)]">
              <th className="px-[1rem] py-[0.75rem] font-semibold"> </th>
              <th className="px-[1rem] py-[0.75rem] font-semibold">Kampalo</th>
              <th className="px-[1rem] py-[0.75rem] font-semibold">Supermetrics</th>
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
        <h2 className="km-h2">When to keep Supermetrics</h2>
        <p className="text-lg leading-relaxed text-[var(--km-muted)]">
          Keep Supermetrics when the requirement is “every source, our warehouse, our model.” That
          includes finance joins, custom Looker builds, and feeding Claude from a governed extract.
          Kampalo does not replace that pipeline.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">When Kampalo is enough</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Use Kampalo when paid search and social are the decision, you do not want to maintain a
          Looker report, and you want Kai to rank campaigns from the same snapshot the UI shows.
          Developer teams can still attach MCP to that snapshot.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="/#pricing" className="km-btn-primary">
            See Kampalo plans
          </a>
          <Link href="/kai/mcp" className="km-btn-ghost">
            Kai and MCP
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="km-h2">FAQ</h2>
        <div className="space-y-5">
          {SUPERMETRICS_FAQS.map((faq) => (
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

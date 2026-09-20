import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import FaqList from '@/components/FaqList';
import { TOOL_COMPARISONS } from '@/lib/competitors';
import { pageMetadata } from '@/lib/site';
import {
  ALTERNATIVES_FAQS,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'AgencyAnalytics Alternatives 2026 | Databox, DashThis & Looker Studio',
  description:
    'AgencyAnalytics alternatives compared by job: Kampalo for Google Ads + Meta PPC reporting, Databox for KPI dashboards, DashThis for marketing reporting software, Looker Studio / Google Data Studio for a DIY canvas.',
  path: '/alternatives',
  keywords: [
    'AgencyAnalytics alternatives',
    'Databox alternative',
    'DashThis alternative',
    'Looker Studio alternative',
    'Google Data Studio alternative',
    'Whatagraph alternative',
    'Supermetrics alternative',
    'PPC reporting software',
    'agency reporting software',
  ],
});

const jobs = [
  {
    title: 'Pick Kampalo when',
    body: 'You searched AgencyAnalytics alternative or PPC reporting software, but the weekly question is Google or Meta—and which campaigns. Product UI, branded PDFs, Kai. Not 80 connectors.',
  },
  {
    title: 'Pick agency reporting software when',
    body: 'The product you sell is a client portal or designed PDF across SEO, PPC, social, and email. AgencyAnalytics, DashThis, and Whatagraph are built for that job. Roundups often list Swydo as the closest AgencyAnalytics like-for-like.',
  },
  {
    title: 'Pick a KPI wall, pipeline, or canvas when',
    body: 'Databox if you need a KPI dashboard across the business. Supermetrics if analysts already live in Looker, Sheets, or a warehouse. Looker Studio (Google Data Studio) if someone will maintain the report.',
  },
];

const keywordMap = [
  {
    searched: 'AgencyAnalytics alternative',
    means: 'Agency / client reporting software',
    kampalo: 'Only if Google + Meta is the real job',
  },
  {
    searched: 'Databox alternative',
    means: 'KPI dashboard, goals, benchmarks',
    kampalo: 'Only if the KPIs are ads campaigns',
  },
  {
    searched: 'DashThis alternative',
    means: 'Marketing reporting software / templates',
    kampalo: 'When the report is secondary to the decision',
  },
  {
    searched: 'Whatagraph alternative',
    means: 'Cross-channel visual reporting',
    kampalo: 'If you should not pay for 50 connectors',
  },
  {
    searched: 'Supermetrics alternative',
    means: 'Marketing intelligence / data pipeline',
    kampalo: 'If you need a product UI, not ETL',
  },
  {
    searched: 'Looker Studio alternative',
    means: 'Google Data Studio DIY canvas',
    kampalo: 'If nobody should repair the report monthly',
  },
];

export default function AlternativesPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'AgencyAnalytics alternatives', path: '/alternatives' },
        ]),
        faqSchema(ALTERNATIVES_FAQS),
        itemListSchema(
          'AgencyAnalytics and dashboard alternatives',
          TOOL_COMPARISONS.map((tool) => ({ name: tool.searchKeyword, path: tool.path })),
        ),
      ]}
    >
      <p className="km-kicker">AgencyAnalytics alternatives</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">
        AgencyAnalytics alternatives — plus Databox, DashThis, and Looker Studio
      </h1>
      <p className="km-lead mb-12">
        Most “best agency reporting software” roundups mix three jobs: client PDFs, KPI dashboards,
        and data pipelines. Kampalo is a fourth job—PPC reporting for Google Ads and Meta, then
        asking Kai what to scale. Use the comparisons below when you are replacing a tool, not
        collecting connectors.
      </p>

      <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {jobs.map((item) => (
          <div key={item.title} className="km-card px-[1.5rem] py-[1.5rem]">
            <h2 className="mb-3 text-[1.125rem] font-semibold">{item.title}</h2>
            <p className="leading-relaxed text-[var(--km-muted)]">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Match the keyword to the product</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Competitor title tags target “marketing reporting software”, “KPI dashboard”, and
          “[vendor] alternative”. Those phrases are not interchangeable. This table is the map.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-[0.9375rem]">
            <caption className="sr-only">
              Search keywords mapped to competitor product jobs and when Kampalo fits
            </caption>
            <thead>
              <tr className="border-b border-[var(--km-border)]">
                <th className="px-[1rem] py-[0.75rem] font-semibold">People search</th>
                <th className="px-[1rem] py-[0.75rem] font-semibold">Usually means</th>
                <th className="px-[1rem] py-[0.75rem] font-semibold">Kampalo?</th>
              </tr>
            </thead>
            <tbody>
              {keywordMap.map((row) => (
                <tr key={row.searched} className="border-b border-[var(--km-border)]">
                  <td className="px-[1rem] py-[0.75rem] font-semibold text-[var(--km-ink)]">
                    {row.searched}
                  </td>
                  <td className="px-[1rem] py-[0.75rem] text-[var(--km-muted)]">{row.means}</td>
                  <td className="px-[1rem] py-[0.75rem] text-[var(--km-muted)]">{row.kampalo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Compare Kampalo with each tool</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TOOL_COMPARISONS.map((tool) => (
            <Link key={tool.slug} href={tool.path} className="km-card block px-[1.5rem] py-[1.5rem]">
              <h3 className="mb-2 text-[1.25rem] font-semibold">{tool.searchKeyword}</h3>
              <p className="leading-relaxed text-[var(--km-muted)]">{tool.hubBlurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Pricing in one line</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Kampalo is billed in GBP by integration slots: Free £0, Individual Starter £8/month
          (or £80/year), Enterprise £40/month (or £400/year). Starter and Enterprise include a
          7-day trial (card required). Starter has 4 shared slots and you can create 4 boards;
          Enterprise has 16 slots, 16 boards pooled, plus up to 4 full brand workspaces. Agency
          reporting tools usually price per client, per report, or per source credit—right for a
          different product.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="/#pricing" className="km-btn-primary">
            Start 7-day trial
          </a>
          <Link href="/blog/google-ads-meta-dashboard-alternatives" className="km-btn-ghost">
            2026 alternatives roundup
          </Link>
        </div>
      </section>

      <FaqList faqs={ALTERNATIVES_FAQS} />
    </SeoPageShell>
  );
}

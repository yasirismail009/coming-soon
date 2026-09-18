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
  title: 'Kampalo Alternatives to AgencyAnalytics, Databox & Looker Studio',
  description:
    'Kampalo is a Google Ads + Meta dashboard with Kai—an alternative to AgencyAnalytics, Databox, DashThis, Whatagraph, Supermetrics, and Looker Studio when the job is paid search versus social.',
  path: '/alternatives',
});

const jobs = [
  {
    title: 'Pick Kampalo when',
    body: 'The weekly question is Google or Meta, and which campaigns. You want one product UI, branded PDFs, and Kai on the same synced numbers—not 80 connectors.',
  },
  {
    title: 'Pick a reporting suite when',
    body: 'The product you sell is a client portal or designed PDF across SEO, PPC, social, and email. AgencyAnalytics, DashThis, and Whatagraph are built for that job.',
  },
  {
    title: 'Pick a pipeline or canvas when',
    body: 'Analysts already live in Looker, Sheets, or a warehouse. Keep Supermetrics or Looker Studio. Kampalo does not replace ETL.',
  },
];

export default function AlternativesPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Alternatives', path: '/alternatives' },
        ]),
        faqSchema(ALTERNATIVES_FAQS),
        itemListSchema(
          'Kampalo tool comparisons',
          TOOL_COMPARISONS.map((tool) => ({ name: `Kampalo vs ${tool.name}`, path: tool.path })),
        ),
      ]}
    >
      <p className="km-kicker">Tool alternatives</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">
        Kampalo as an alternative to agency reporting tools
      </h1>
      <p className="km-lead mb-12">
        Most “reporting software” roundups mix three jobs: client PDFs, KPI walls, and data
        pipelines. Kampalo is a fourth job—operators comparing Google Ads and Meta, then asking Kai
        what to scale. Use the comparisons below when you are replacing a tool, not collecting
        connectors.
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
        <h2 className="km-h2">Compare Kampalo with each tool</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TOOL_COMPARISONS.map((tool) => (
            <Link key={tool.slug} href={tool.path} className="km-card block px-[1.5rem] py-[1.5rem]">
              <h3 className="mb-2 text-[1.25rem] font-semibold">Kampalo vs {tool.name}</h3>
              <p className="leading-relaxed text-[var(--km-muted)]">{tool.hubBlurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Pricing in one line</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Kampalo is billed in GBP by integration slots: Free £0, Individual Starter £8/month
          (or £80/year), Enterprise £40/month (or £400/year). Starter has 4 shared slots;
          Enterprise has 16, plus up to 4 brand clients. Agency
          reporting tools usually price per client, per report, or per source credit—right for a
          different product.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="/#pricing" className="km-btn-primary">
            See Kampalo plans
          </a>
          <Link href="/blog/google-ads-meta-dashboard-alternatives" className="km-btn-ghost">
            2026 dashboard roundup
          </Link>
        </div>
      </section>

      <FaqList faqs={ALTERNATIVES_FAQS} />
    </SeoPageShell>
  );
}

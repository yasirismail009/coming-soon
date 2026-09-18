import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import FaqList from '@/components/FaqList';
import { BLOG_POSTS, getBlogPost } from '@/lib/blog';
import { TOOL_COMPARISONS } from '@/lib/competitors';
import { pageMetadata } from '@/lib/site';
import {
  articleSchema,
  breadcrumbSchema,
  DASHBOARD_ALTERNATIVES_FAQS,
  faqSchema,
} from '@/lib/structuredData';

const POST = getBlogPost('google-ads-meta-dashboard-alternatives');

export const metadata = pageMetadata({
  title: POST.title,
  description: POST.description,
  path: POST.path,
  type: 'article',
  publishedTime: POST.datePublished,
});

const picks = [
  {
    name: 'Kampalo',
    href: '/google-ads-meta-dashboard',
    best: 'Operators who need Google vs Meta this week, plus Kai',
    skip: '80-source client portals or a warehouse',
  },
  {
    name: 'AgencyAnalytics',
    href: '/compare/agencyanalytics',
    best: 'Agencies whose product is a white-label client report across many channels, including SEO rank tracking',
    skip: 'In-house teams that only run Google and Meta',
  },
  {
    name: 'Databox',
    href: '/compare/databox',
    best: 'A live KPI wall across marketing and the rest of the business',
    skip: 'Campaign-level Google vs Meta allocation',
  },
  {
    name: 'DashThis',
    href: '/compare/dashthis',
    best: 'Small agencies that need a template PDF without building Looker',
    skip: 'Teams that live in the ads UI all week, not in a report builder',
  },
  {
    name: 'Whatagraph',
    href: '/compare/whatagraph',
    best: 'Designed, blended reports at a higher agency price',
    skip: 'Two-channel workspaces that should not pay for 50 connectors',
  },
  {
    name: 'Supermetrics',
    href: '/compare/supermetrics',
    best: 'Moving marketing data into Sheets, Looker, or a warehouse',
    skip: 'Anyone who does not already own the BI layer',
  },
  {
    name: 'Looker Studio',
    href: '/compare/looker-studio',
    best: 'Free canvas when an analyst will maintain Google-heavy reports',
    skip: 'Teams that cannot staff a broken connector every month',
  },
];

export default function DashboardAlternativesGuidePage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: POST.title, path: POST.path },
        ]),
        articleSchema({
          title: POST.title,
          description: POST.description,
          path: POST.path,
          datePublished: POST.datePublished,
        }),
        faqSchema(DASHBOARD_ALTERNATIVES_FAQS),
      ]}
    >
      <p className="km-kicker">
        {POST.kicker} · {POST.dateLabel}
      </p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">{POST.title}</h1>
      <p className="km-lead mb-12">{POST.description}</p>

      <section className="mb-16 space-y-5 text-lg leading-relaxed text-[var(--km-muted)]">
        <h2 className="km-h2">Pick the job before the vendor</h2>
        <p>
          “Best marketing dashboard” lists usually rank connector count. That metric picks a client
          reporting suite or an ETL tool. If the actual job is “should this pound go to Google Ads
          or Meta?”, you need consistent ROAS, CTR, and CPA on one date range—not 80 tiles.
        </p>
        <p>
          This roundup splits the category the way buyers actually shop. Kampalo is included because
          we build that narrower product. The other six are the names that show up in the same
          shortlists. None of them is universally worse; they solve different jobs.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Who each tool is for</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-[0.9375rem]">
            <caption className="sr-only">
              Best-fit job and skip condition for seven Google Ads and Meta dashboard tools
            </caption>
            <thead>
              <tr className="border-b border-[var(--km-border)]">
                <th className="px-[1rem] py-[0.75rem] font-semibold">Tool</th>
                <th className="px-[1rem] py-[0.75rem] font-semibold">Best when</th>
                <th className="px-[1rem] py-[0.75rem] font-semibold">Skip when</th>
              </tr>
            </thead>
            <tbody>
              {picks.map((row) => (
                <tr key={row.name} className="border-b border-[var(--km-border)]">
                  <td className="px-[1rem] py-[0.75rem] font-semibold text-[var(--km-ink)]">
                    <Link href={row.href} className="text-[var(--km-link)] underline">
                      {row.name}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.75rem] text-[var(--km-muted)]">{row.best}</td>
                  <td className="px-[1rem] py-[0.75rem] text-[var(--km-muted)]">{row.skip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16 space-y-5 text-lg leading-relaxed text-[var(--km-muted)]">
        <h2 className="km-h2">What to compare besides integrations</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Whether Google and Meta share one ROAS definition, or you still reconcile exports.</li>
          <li>Who maintains the dashboard when a connector breaks—your analyst, or the vendor.</li>
          <li>Whether AI reads the same snapshot the UI shows, or summarises a report after the fact.</li>
          <li>Price shape: per connection, per client, per source credit, or “free plus labour.”</li>
        </ul>
        <p>
          Kampalo prices in GBP by integration slots (Free, Starter £8/month, Enterprise £40/month).
          Each Google Ads or Meta Ads account, Shopify store, and Gmail-level GA4 or SEO grant uses
          one shared slot. That is cheap for mixed channels and the wrong model if you need eighty sources.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Full Kampalo vs pages</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          {TOOL_COMPARISONS.map((tool) => (
            <li key={tool.slug}>
              <Link href={tool.path} className="text-[var(--km-link)] underline">
                Kampalo vs {tool.name}
              </Link>
              {' — '}
              {tool.hubBlurb}
            </li>
          ))}
          <li>
            <Link href="/alternatives" className="text-[var(--km-link)] underline">
              Alternatives hub
            </Link>
            {' — '}when Kampalo is and is not a replacement
          </li>
        </ul>
      </section>

      <section className="mb-16 flex flex-col gap-4 sm:flex-row">
        <Link href="/google-ads-meta-dashboard" className="km-btn-primary">
          Google + Meta dashboard
        </Link>
        <Link href={BLOG_POSTS.find((post) => post.slug === 'google-ads-vs-meta').path} className="km-btn-ghost">
          Google vs Meta budget guide
        </Link>
      </section>

      <FaqList faqs={DASHBOARD_ALTERNATIVES_FAQS} />
    </SeoPageShell>
  );
}

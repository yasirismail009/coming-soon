import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  DASHBOARD_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Google Ads & Meta Dashboard — Unified ROAS',
  description:
    'One dashboard for Google Ads and Meta. Compare spend, ROAS, CTR, and CPA side by side, then ask Kai which campaigns to scale from your synced data.',
  path: '/google-ads-meta-dashboard',
});

const surfaces = [
  {
    title: 'Spend and revenue together',
    body: 'See both platforms on the same date range. Currencies stay labelled so a PKR account is not silently mixed into a USD one.',
  },
  {
    title: 'Campaign and account compare',
    body: 'Tick two accounts or campaigns—Google vs Meta, client vs client—and read ROAS, CPA, and CTR on the same rows.',
  },
  {
    title: 'Kai on the same numbers',
    body: 'Ask which campaigns to scale. Kai ranks from the synced snapshot the dashboard already shows, not a live API guess.',
  },
];

export default function GoogleAdsMetaDashboardPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Google Ads & Meta dashboard', path: '/google-ads-meta-dashboard' },
        ]),
        faqSchema(DASHBOARD_FAQS),
      ]}
    >
      <p className="km-kicker">Unified ads analytics</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">
        Google Ads and Meta in one dashboard
      </h1>
      <p className="km-lead mb-12">
        Stop reconciling two exports. Kampalo syncs Google Ads and Meta into one workspace so you can
        compare ROAS, spend, and CPA—then ask Kai where budget should go next.
      </p>

      <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {surfaces.map((item) => (
          <div key={item.title} className="km-card px-[1.5rem] py-[1.5rem]">
            <h2 className="mb-3 text-[1.125rem] font-semibold">{item.title}</h2>
            <p className="leading-relaxed text-[var(--km-muted)]">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="km-h2">What the dashboard is for</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Native Ads Manager and Meta Ads Manager are built for buying. Kampalo is built for the
          weekly decision: which channel and which campaigns deserve more spend. That is a different
          job from a 80-source agency report pack or a warehouse connector.
        </p>
        <ul className="list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          <li>Platform and campaign ROAS, ROI, CTR, CPC, and CPA</li>
          <li>Trends across daily, weekly, and custom windows</li>
          <li>GA4 and Search Console beside paid, not instead of it</li>
          <li>Organic Facebook and Instagram kept separate from paid ROAS</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Not Looker Studio, not a spreadsheet</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Looker Studio plus a paid connector works if someone on the team already maintains the
          report. Kampalo is for operators who want the comparison without building the dashboard
          first. If you already warehouse dozens of sources, keep that stack and use Kampalo for
          Google-versus-Meta decisions.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="/#pricing" className="km-btn-primary">
            See pricing
          </a>
          <Link href="/compare" className="km-btn-ghost">
            How platform compare works
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="km-h2">FAQ</h2>
        <div className="space-y-5">
          {DASHBOARD_FAQS.map((faq) => (
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

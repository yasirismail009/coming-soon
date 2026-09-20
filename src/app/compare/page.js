import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  COMPARE_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Google Ads vs Meta Ads Dashboard — Compare PPC Performance',
  description:
    'Google Ads vs Facebook Ads (Meta) in one PPC dashboard—spend, ROAS, CTR, and CPA. Compare channels, then ask Kai which campaigns to scale.',
  path: '/compare',
  keywords: [
    'Google Ads vs Meta Ads',
    'Google Ads vs Facebook Ads',
    'PPC dashboard',
    'compare Google Ads and Meta',
  ],
});

const benefits = [
  {
    title: 'Same language for every channel',
    body: 'See spend, clicks, conversions, ROAS, CTR, and CPA together—without reconciling two different exports.',
  },
  {
    title: 'Budget with clearer evidence',
    body: 'Move spend toward what is working using synced account data, not last week’s spreadsheet.',
  },
  {
    title: 'Ask Kai who is winning',
    body: 'When the dashboard is not enough, ask in plain language. Kai ranks winners on ROAS, CTR, and CPC so recommendations are easy to check.',
  },
];

export default function ComparePage() {
  return (
    <div className="km-page">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Compare platforms', path: '/compare' },
          ]),
          faqSchema(COMPARE_FAQS),
        ]}
      />
      <Header />
      <main className="km-main">
        <div className="km-prose">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--km-accent)] mb-3">
            Cross-platform PPC reporting
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Compare Google Ads vs Meta Ads without the tab chaos
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
            If you run paid search and social together, you should not need two logins and a spreadsheet to
            decide where budget goes. Kampalo is a Google Ads vs Facebook Ads (Meta) dashboard: both
            channels, same ROAS language, then Kai on what to scale.
          </p>

          <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-800"
              >
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              What you can compare
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-lg text-slate-600 dark:text-slate-300">
              <li>Platform-level return on ad spend (ROAS), ROI, CTR, and cost per acquisition (CPA)</li>
              <li>Campaign and account performance across Google Ads and Meta</li>
              <li>Trends over daily, weekly, and custom date ranges</li>
              <li>Where budget looks efficient versus where it underperforms</li>
            </ul>
          </section>

          <section className="mb-16 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 bg-slate-50/80 dark:bg-slate-800/40">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              From dashboard to decision
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Use comparison views for the full picture, then ask Kai questions like “Which Meta campaign beat
              Google on ROAS last week?” Answers stay grounded in your synced stats and clear ranking rules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kai"
                className="km-btn-primary"
              >
                Learn about Kai
              </Link>
              <Link
                href="/documentation"
                className="km-btn-ghost"
              >
                Read documentation
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Comparing tools, not just platforms
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Need Google versus Meta inside Kampalo? You are on that page. Choosing a vendor? Start
              with the{' '}
              <a href="/alternatives" className="text-[var(--km-link)] underline">
                AgencyAnalytics alternatives hub
              </a>{' '}
              or a direct comparison:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-slate-600 dark:text-slate-300">
              <li>
                <a href="/compare/agencyanalytics" className="text-[var(--km-link)] underline">
                  AgencyAnalytics alternative
                </a>
                {' — '}client reporting suite versus a Google + Meta workspace
              </li>
              <li>
                <a href="/compare/databox" className="text-[var(--km-link)] underline">
                  Databox alternative
                </a>
                {' — '}operator ads workspace versus a KPI dashboard
              </li>
              <li>
                <a href="/compare/dashthis" className="text-[var(--km-link)] underline">
                  DashThis alternative
                </a>
                {' — '}decision workspace versus marketing reporting software
              </li>
              <li>
                <a href="/compare/whatagraph" className="text-[var(--km-link)] underline">
                  Whatagraph alternative
                </a>
                {' — '}two-channel UI versus blended visual reports
              </li>
              <li>
                <a href="/compare/supermetrics" className="text-[var(--km-link)] underline">
                  Supermetrics alternative
                </a>
                {' — '}product dashboard versus a data pipeline
              </li>
              <li>
                <a href="/compare/looker-studio" className="text-[var(--km-link)] underline">
                  Looker Studio alternative
                </a>
                {' — '}product dashboard versus a DIY canvas (Google Data Studio)
              </li>
              <li>
                <a href="/blog/google-ads-vs-meta" className="text-[var(--km-link)] underline">
                  Google Ads vs Meta guide
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">FAQ</h2>
            <div className="space-y-5">
              {COMPARE_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-800"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

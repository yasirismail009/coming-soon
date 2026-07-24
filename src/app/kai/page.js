import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  KAI_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Kai AI Agent — Ask Which Ads to Scale',
  description:
    'Kai is Kampalo’s AI marketing assistant. Ask about Google Ads, Meta Ads, and Meta organic—get clear ROAS, CTR, and CPC guidance from your synced data.',
  path: '/kai',
});

const flowSteps = [
  {
    title: 'Understand your question',
    body: 'You ask in plain language—for example, “Which Meta campaign beat Google on ROAS last week?” Kai figures out what you need before it looks anything up.',
  },
  {
    title: 'Check the right parts of your data',
    body: 'Kai looks across Google Ads, Meta Ads, and Meta organic insights using the stats already synced into Kampalo.',
  },
  {
    title: 'Rank winners, then explain',
    body: 'Clear ranking rules for ROAS, CTR, and CPC keep recommendations consistent and easy to check. You get a short answer you can act on—not a wall of numbers.',
  },
];

const specialtyAreas = [
  {
    title: 'Google Ads',
    body: 'Campaign and account performance across your connected Google Ads and Search Ads 360 data.',
  },
  {
    title: 'Meta Ads',
    body: 'Facebook and Instagram ads performance, including useful breakdowns when available.',
  },
  {
    title: 'Meta organic',
    body: 'Page and Instagram organic questions alongside your paid results.',
  },
  {
    title: 'Trends & comparisons',
    body: 'Cross-platform trends, KPI questions, and dashboard-level decisions.',
  },
];

export default function KaiPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Kai', path: '/kai' },
          ]),
          faqSchema(KAI_FAQS),
        ]}
      />
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#174A6E] dark:text-blue-300 mb-3">
            Kampalo Kai
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Ask Kai which campaigns to scale
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            Kai is the AI assistant inside Kampalo. Instead of exporting spreadsheets into a generic chatbot,
            you ask about Google Ads, Meta Ads, and Meta organic—and get recommendations grounded in the data
            already connected to your workspace.
          </p>

          <section className="mb-16 rounded-2xl bg-gradient-to-br from-[#174A6E] to-[#0B3049] p-8 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Built for marketers, not prompt engineers</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              Kai does not invent numbers. It reads your synced Kampalo stats, compares campaigns with clear
              ranking rules, and explains which ones win on return on ad spend (ROAS), click-through rate (CTR),
              and cost per click (CPC).
            </p>
            <p className="text-white/85 leading-relaxed">
              Chat uses your latest synced data—it does not open live Google or Meta sessions while you type.
              Refresh integrations in the app when you want newer numbers.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">How a question works</h2>
            <ol className="space-y-6">
              {flowSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-5 border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50/80 dark:bg-slate-800/50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#174A6E] text-white font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              What Kai can look at
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Depending on your question, Kai focuses on the right slice of your connected advertising data.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialtyAreas.map((area) => (
                <li
                  key={area.title}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-800"
                >
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">{area.title}</p>
                  <p className="text-slate-600 dark:text-slate-300">{area.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Where you use Kai
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Chat with Kai inside Kampalo—including streaming replies and saved conversations—alongside
              dashboards for trends and platform comparisons. Teams that build custom workflows can also
              connect through our developer integrations (MCP).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pricing"
                className="inline-flex justify-center bg-[#174A6E] hover:bg-[#0f3451] text-white px-7 py-3 rounded-xl font-semibold transition-colors"
              >
                Start free trial
              </Link>
              <Link
                href="/compare"
                className="inline-flex justify-center border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white px-7 py-3 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Compare Google Ads &amp; Meta
              </Link>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-5">
              {KAI_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-800"
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

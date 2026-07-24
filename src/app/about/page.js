import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'About Tekreign & Kampalo',
  description:
    'Tekreign builds Kampalo—AI marketing analytics with Kai for teams that run Google Ads and Meta in one place.',
  path: '/about',
});

const TEKREIGN_URL = 'https://tekreign.com';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#174A6E] dark:text-blue-300 mb-3">
              About us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Tekreign &amp; Kampalo
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We are a software engineering team built for innovation—including{' '}
              <strong className="text-slate-800 dark:text-slate-200">Kampalo</strong>, our AI marketing
              analytics platform for teams that run Google Ads and Meta together.
            </p>
          </div>

          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#174A6E] to-[#0B3049] rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Who we are</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                Tekreign brings together engineers who care about craft, clarity, and outcomes. We design and deliver
                software that solves real problems—from early ideas to production systems customers rely on every day.
              </p>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                We have delivered <strong className="text-white font-semibold">more than 20 products</strong>. That
                breadth shapes how we think: reusable patterns, strong foundations, and a bias toward shipping value
                early and iterating with feedback.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Our full portfolio and company story live on our main site—{' '}
                <a
                  href={TEKREIGN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                >
                  tekreign.com
                </a>
                .
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Kampalo vision</h2>
            <p className="text-sm font-medium text-[#174A6E] dark:text-blue-300 mb-6 uppercase tracking-wide">
              Marketing platform
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Modern marketers juggle Google Ads, Meta, and more—each with its own dashboard and exports. Kampalo
              gives you <strong className="text-slate-900 dark:text-white">one place to see performance</strong> and{' '}
              <strong className="text-slate-900 dark:text-white">Kai</strong> to help decide what to scale next.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Our goal is simple:{' '}
              <strong className="text-slate-900 dark:text-white">
                less time gathering data, more time improving results.
              </strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/80 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">One marketing workspace</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Connect the channels you already use and review performance side by side—starting with Google Ads and
                  Meta.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/80 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Answers you can act on</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Dashboards for the full picture; Kai for plain-language recommendations on return, clicks, and cost.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/80 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Built to grow with you</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Secure connections and a reliable foundation as accounts, teams, and budgets expand.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/80 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Always improving</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We keep shipping integrations and workflows based on how real teams run campaigns.
                </p>
              </div>
            </div>
            <p className="text-center mt-8">
              <Link
                href="/#features"
                className="text-[#174A6E] dark:text-blue-300 font-semibold hover:underline underline-offset-4"
              >
                Explore Kampalo on the homepage
              </Link>
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Tekreign vision</h2>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wide">
              Beyond Kampalo
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              As a company, Tekreign helps organizations move faster with reliable software and practical AI
              assistants—systems that stay observable, controllable, and aligned with how your business works.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/80 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Useful AI assistants</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Multi-step workflows that combine models, tools, and human checkpoints—so automation stays trustworthy.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/80 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Quality you can measure</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Evaluation and guardrails so systems improve over time and stay reliable in production.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/80 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Product discipline</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Shipping many products taught us to invest in architecture and clear ownership so velocity scales.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/80 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Close collaboration</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We work tightly with partners and users—because the best software comes from feedback, not
                  assumptions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/50 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Explore our work</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              This site focuses on Kampalo, our marketing analytics product. For more of what Tekreign builds—case
              studies, products, and partnerships—visit our main site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={TEKREIGN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-[#174A6E] hover:bg-[#0f3451] text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Visit tekreign.com
              </a>
              <Link
                href="/"
                className="inline-flex justify-center items-center bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Back to home
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { TEKREIGN_CONTACT } from '@/constants/companyContact';
import { pageMetadata } from '@/lib/site';
import { breadcrumbSchema, faqSchema, HELP_FAQS } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Help Center',
  description:
    'Get help with Kampalo: account setup, Google Ads and Meta connections, billing, troubleshooting, and Kai.',
  path: '/help',
});

export default function HelpCenter() {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      topics: [
        { question: 'How do I create an account?', answer: 'Click "Start Free Trial" on our homepage, enter your email, verify it, and complete your profile.' },
        { question: 'What subscription plan should I choose?', answer: 'Start with the Free plan to explore features, then upgrade based on your needs. Premium is ideal for growing businesses, and Enterprise offers unlimited access.' },
        { question: 'How long does setup take?', answer: 'Account setup takes less than 5 minutes. Platform connections typically take 2-5 minutes per integration.' },
      ],
    },
    {
      title: 'Platform Integrations',
      icon: '🔌',
      topics: [
        { question: 'How do I connect my Google Ads account?', answer: 'Go to Settings → Integrations, click "Connect Google Ads", sign in with your Google account, and authorize access. Select the accounts you want to connect.' },
        { question: 'Why is my Meta Ads connection failing?', answer: 'Ensure you have admin access to the ad account, try disconnecting and reconnecting, or check that your Facebook account permissions are correct.' },
        { question: 'Can I connect multiple accounts from the same platform?', answer: 'Yes, Premium and Enterprise plans allow multiple account connections per platform.' },
        { question: 'How do I refresh data from connected platforms?', answer: 'Click the "Refresh" button next to any connected platform in Settings → Integrations, or wait for automatic sync every 4-6 hours.' },
      ],
    },
    {
      title: 'Analytics & Reporting',
      icon: '📊',
      topics: [
        { question: 'What metrics does Kampalo track?', answer: 'We track spend, impressions, clicks, conversions, ROI, ROAS, CTR, CPA, conversion rate, and related KPIs across connected platforms.' },
        { question: 'How do I create a custom report?', answer: 'Navigate to Reports → Create New Report, select your date range, platforms, metrics, and filters, then save or schedule the report.' },
        { question: 'Can I compare performance across platforms?', answer: 'Yes, use the Cross-Platform Comparison feature to analyze performance side-by-side and identify trends.' },
        { question: 'How accurate is the data?', answer: 'Data is pulled directly from platform APIs and synced regularly. Some metrics may have slight delays due to platform processing times.' },
      ],
    },
    {
      title: 'Kai AI Assistant',
      icon: '🤖',
      topics: [
        { question: 'What is Kai?', answer: 'Kai is Kampalo’s AI marketing assistant. Ask questions in plain language about your Google Ads and Meta performance; Kai answers from your synced data and highlights which campaigns to scale.' },
        { question: 'Does Kai call Google or Meta live in chat?', answer: 'No. Kai uses campaign stats already synced into Kampalo. Refresh integrations in the app when you need newer numbers.' },
        { question: 'Where can I learn more about Kai?', answer: 'Visit the Kai product page for how questions work, what data Kai can see, and how it fits with your dashboards.' },
      ],
    },
    {
      title: 'Account & Billing',
      icon: '💳',
      topics: [
        { question: 'How do I upgrade my plan?', answer: 'Go to Settings → Billing, select "Upgrade Plan", choose your new plan, and complete payment. Changes take effect immediately.' },
        { question: 'Can I cancel my subscription anytime?', answer: 'Yes, you can cancel at any time from Settings → Billing. Your subscription will remain active until the end of the billing period.' },
        { question: 'Do you offer refunds?', answer: 'Refunds are handled on a case-by-case basis. Contact our support team to discuss your situation.' },
        { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards and PayPal. Enterprise customers may arrange invoicing.' },
      ],
    },
    {
      title: 'Troubleshooting',
      icon: '🔧',
      topics: [
        { question: 'My data is not updating. What should I do?', answer: 'Try manually refreshing the data, check that platform connections are active, verify API status, and ensure your account hasn\'t been disconnected.' },
        { question: 'I\'m seeing incorrect metrics. Why?', answer: 'Verify that platform connections are working, check date ranges, ensure you have proper account permissions, and contact support if discrepancies persist.' },
        { question: 'The dashboard is loading slowly. How can I fix this?', answer: 'Clear your browser cache, try a different browser, reduce the date range, or disconnect and reconnect problematic platform integrations.' },
        { question: 'I can\'t log into my account.', answer: 'Use the "Forgot Password" link, check your email spam folder, ensure cookies are enabled, or contact support for account recovery.' },
      ],
    },
  ];

  return (
    <div className="km-page">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Help Center', path: '/help' },
          ]),
          faqSchema(HELP_FAQS),
        ]}
      />
      <Header />
      <main className="km-main">
        <div className="km-prose-wide">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Help Center
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-[42rem] mx-auto">
              Quick answers for setup, integrations, analytics, billing, and Kai—so you can get back to optimizing campaigns.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-[42rem] mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-[1.5rem] py-[1rem] pl-[3rem] text-slate-900 placeholder-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#4B95F0] dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 km-prose">
            <Link href="/documentation" className="bg-gradient-to-br from-[#4B95F0] to-[#6D4AFF] rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-white/80 text-sm">Complete guides and tutorials</p>
            </Link>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Email support</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">
                Reach Tekreign at{' '}
                <a
                  href={`mailto:${TEKREIGN_CONTACT.contactEmail}`}
                  className="text-[var(--km-accent)] font-medium hover:underline"
                >
                  {TEKREIGN_CONTACT.contactEmail}
                </a>
                . We typically respond within one business day.
              </p>
              <a
                href={`mailto:${TEKREIGN_CONTACT.contactEmail}`}
                className="km-btn-primary km-btn-sm mt-4"
              >
                Send email
              </a>
            </div>
          </div>

          <div className="km-prose mb-16 rounded-2xl border border-red-200 dark:border-red-900/50 bg-red-50/70 dark:bg-red-950/25 p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Disconnecting integrations or deleting your account
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            In the Kampalo app, disconnecting an integration permanently deletes synced data for that connection—there is
              no recovery. Deleting your account from Settings removes all integrations, connections, and stored
              analytics forever.
            </p>
            <Link
              href="/data-deletion"
              className="inline-flex items-center text-sm font-semibold text-[var(--km-accent)] hover:underline"
            >
              Read full data deletion &amp; disconnection instructions →
            </Link>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {helpCategories.map((category, categoryIndex) => (
              <section key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                        {topic.question}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {topic.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Support Section */}
          <section className="mt-16 bg-gradient-to-r from-[#4B95F0] to-[#6D4AFF] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-[42rem] mx-auto">
              Our team is here to help you get the most out of Kampalo. Email{' '}
              <a
                href={`mailto:${TEKREIGN_CONTACT.contactEmail}`}
                className="underline underline-offset-2 font-semibold"
              >
                {TEKREIGN_CONTACT.contactEmail}
              </a>{' '}
              and we will get back to you as soon as we can.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${TEKREIGN_CONTACT.contactEmail}`}
                className="inline-flex items-center justify-center rounded-xl bg-white px-[2rem] py-[0.75rem] font-semibold text-[var(--km-accent)] hover:bg-slate-100"
              >
                Email {TEKREIGN_CONTACT.contactEmail}
              </a>
              <Link
                href="/documentation"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-[#0f3451]/50 px-[2rem] py-[0.75rem] font-semibold text-white hover:bg-[#0f3451]/70"
              >
                View Documentation
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

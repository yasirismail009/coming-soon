import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Help Center - KAMPALO',
  description: 'KAMPALO Help Center - Get support and answers to common questions.',
};

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
        { question: 'What metrics does KAMPALO track?', answer: 'We track ROI, ROAS, CTR, CPA, Conversion Rate, Spend, Impressions, Clicks, Leads, and more across all connected platforms.' },
        { question: 'How do I create a custom report?', answer: 'Navigate to Reports → Create New Report, select your date range, platforms, metrics, and filters, then save or schedule the report.' },
        { question: 'Can I compare performance across platforms?', answer: 'Yes, use the Cross-Platform Comparison feature to analyze performance side-by-side and identify trends.' },
        { question: 'How accurate is the data?', answer: 'Data is pulled directly from platform APIs and synced regularly. Some metrics may have slight delays due to platform processing times.' },
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
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Help Center
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Find answers to common questions, learn how to use KAMPALO, and get the support you need.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-6 py-4 pl-12 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#174A6E] focus:border-transparent"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Link href="/documentation" className="bg-gradient-to-br from-[#174A6E] to-[#0B3049] rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-white/80 text-sm">Complete guides and tutorials</p>
            </Link>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Live Chat</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Get instant support from our team</p>
              <button className="mt-4 bg-[#174A6E] hover:bg-[#0f3451] text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Email Support</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">We'll respond within 24 hours</p>
              <a href="mailto:support@kampalo.com" className="mt-4 inline-block bg-[#174A6E] hover:bg-[#0f3451] text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Send Email
              </a>
            </div>
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
          <section className="mt-16 bg-gradient-to-r from-[#174A6E] to-[#0B3049] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of KAMPALO. Reach out and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@kampalo.com"
                className="bg-white hover:bg-slate-100 text-[#174A6E] px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Contact Support
              </a>
              <Link
                href="/documentation"
                className="bg-[#0f3451]/50 hover:bg-[#0f3451]/70 text-white border-2 border-white/30 px-8 py-3 rounded-xl font-semibold transition-colors"
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

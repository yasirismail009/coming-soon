'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    gradient: 'from-teal-500 to-[#174A6E]',
    title: 'Kai AI assistant',
    description:
      'Ask about ROAS, spend, campaigns, and Meta organic performance. Kai answers from your synced data—not generic web guesses.',
    featured: true,
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: 'from-[#1f5a85] to-[#174A6E]',
    title: 'Agency home & brand clients',
    description:
      'Individual or Enterprise signup. Run an agency workspace with brand clients, then invite Admin, Manager, Marketer, Client User, or Visitor roles.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: 'from-[#174A6E] to-[#0B3049]',
    title: 'Dashboard, Trends & KPI Comparison',
    description:
      'Unified overview, overall trends, and enterprise KPI comparison—so teams share one source of truth for spend and results.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-500',
    title: 'Accounts & Campaigns',
    description:
      'Google Ads, Search Ads 360, and Meta campaign detail—with device, region, placement, and hourly breakdowns when you need them.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-500',
    title: 'Connect',
    description:
      'One Google sign-in for Ads, SA360, GA4, and Search Console. One Meta sign-in for Ads, Page, and Instagram. Enterprise can auto-include all accounts; Individual plans pick within limits.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-orange-600',
    title: 'Google Analytics',
    description:
      'GA4 home, reports, and Drive online sales views—next to the ads that influence those numbers.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-[#174A6E]',
    title: 'SEO Suite',
    description:
      'Search Console plus on-page and off-page checks, performance audits, page metadata, indexing, and sitemap visibility.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: 'from-pink-500 to-rose-600',
    title: 'Organic Insights',
    description:
      'Facebook Page and Instagram insights, post detail, and comment moderation with toxicity scoring and auto-moderation.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: 'from-violet-500 to-[#174A6E]',
    title: 'Reports & notifications',
    description:
      'Schedule branded reports across Ads, GA4, Search Console, and organic—scoped to brand, client, or user. Stay notified when syncs finish.',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Everything in one workspace
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ads, analytics, SEO, organic Meta, reports, and Kai—gated by your plan, built for agencies and brand teams.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-8 border hover:shadow-xl transition-all ${
                feature.featured
                  ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#174A6E] to-[#0B3049] border-[#174A6E] text-white shadow-lg shadow-[#174A6E]/20'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  feature.featured
                    ? 'bg-white/15'
                    : `bg-gradient-to-r ${feature.gradient}`
                }`}
              >
                {feature.icon}
              </div>
              {feature.featured && (
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-200 mb-2">
                  AI assistant
                </p>
              )}
              <h3
                className={`text-lg font-bold mb-3 ${
                  feature.featured ? 'text-white' : 'text-slate-900 dark:text-white'
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  feature.featured ? 'text-white/85' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {feature.description}
              </p>
              {feature.featured && (
                <a
                  href="#kai"
                  className="inline-flex mt-5 text-sm font-semibold text-white underline underline-offset-4 hover:text-blue-100"
                >
                  See Kai in action
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

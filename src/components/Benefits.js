'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'One workspace instead of five tabs',
    description:
      'Ads, GA4, SEO Suite, Organic Insights, and Reports live together—so your team stops hopping between tools.',
  },
  {
    title: 'Know what to fund next',
    description:
      'Compare KPIs, then ask Kai about campaigns or Meta organic—based on your synced data, not guesses.',
  },
  {
    title: 'Built for individuals and agencies',
    description:
      'Individual plans pick accounts within limits. Enterprise auto-includes accounts, adds brand clients, roles, and higher quotas.',
  },
];

const stats = [
  { label: 'Live connections today', value: 'Google + Meta' },
  { label: 'How you get answers', value: 'Dashboards + Kai' },
  { label: 'Trial', value: '14 days free', highlight: true },
];

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8 lg:mb-12"
            >
              Less reporting. More optimizing.
            </motion.h2>
            <div className="space-y-6 lg:space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 lg:mr-6">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-2 lg:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm lg:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-10 border border-slate-200 dark:border-slate-700 shadow-xl"
          >
            <div className="space-y-6 lg:space-y-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-[#174A6E] to-[#0B3049] rounded-full mb-4 lg:mb-6"
                >
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2">Built for busy teams</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base lg:text-lg">Analytics without the tab chaos</p>
              </div>

              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-4 lg:p-5 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <span className="text-slate-600 dark:text-slate-300 text-sm lg:text-base">{stat.label}</span>
                    <span className={`text-lg lg:text-xl font-bold ${stat.highlight ? 'text-green-600 dark:text-green-400' : 'text-slate-900 dark:text-white'}`}>
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

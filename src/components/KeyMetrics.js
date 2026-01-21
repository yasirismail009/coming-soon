'use client';

import { motion } from 'framer-motion';

const metrics = [
  { name: 'ROAS', desc: 'Return on Ad Spend' },
  { name: 'ROI %', desc: 'Return on Investment' },
  { name: 'CPA', desc: 'Cost Per Acquisition' },
  { name: 'CTR', desc: 'Click-Through Rate' },
  { name: 'CVR', desc: 'Conversion Rate' },
  { name: 'AOV', desc: 'Average Order Value' },
  { name: 'RPC', desc: 'Revenue Per Click' },
  { name: 'Reach', desc: 'Audience Reach' },
  { name: 'Engagement', desc: 'User Engagement' },
  { name: 'Video', desc: 'Video Metrics' },
];

export default function KeyMetrics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const metricVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Track What Matters Most
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive KPIs and metrics to optimize your advertising ROI
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={metricVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/50 rounded-xl p-6 lg:p-8 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-all"
            >
              <div className="text-xl lg:text-2xl font-bold text-[#174A6E] dark:text-[#174A6E]/80 mb-2">{metric.name}</div>
              <div className="text-xs lg:text-sm text-slate-600 dark:text-slate-300">{metric.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

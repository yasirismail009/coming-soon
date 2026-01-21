'use client';

import { motion } from 'framer-motion';

export default function CTA() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#174A6E] to-[#0B3049] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8"
          >
            Ready to Unify Your Marketing Analytics?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-white/90 mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of marketers who are saving time and increasing ROI with KAMPALO. Start your free trial today—no credit card required.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-[#174A6E]/5 text-[#174A6E] px-8 py-4 lg:py-5 rounded-xl font-semibold text-base lg:text-lg transition-all shadow-lg"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0f3451]/50 hover:bg-[#0f3451]/70 text-white border-2 border-white/30 px-8 py-4 lg:py-5 rounded-xl font-semibold text-base lg:text-lg transition-all"
            >
              Schedule Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

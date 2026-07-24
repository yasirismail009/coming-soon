'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { resolveDashboardImage } from '@/utils/dashboardScreenshots';
import LaptopFrame from '@/components/LaptopFrame';

const heroDashboards = [
  { id: 'kai', alt: 'Kampalo Kai — AI marketing analyst' },
  { id: 'overview', alt: 'Kampalo Dashboard — performance overview' },
  { id: 'accountsCampaigns', alt: 'Kampalo Accounts & Campaigns' },
  { id: 'organicInsights', alt: 'Kampalo Organic Insights' },
];

export default function Hero() {
  const { theme } = useTheme();
  const [currentDashboard, setCurrentDashboard] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  // Auto-rotate dashboards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDashboard((prev) => (prev + 1) % heroDashboards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#174A6E]/10 dark:bg-[#174A6E]/30 text-[#174A6E] dark:text-white text-sm font-medium mb-8"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
            Meet Kai — AI assistant for ads &amp; organic
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            <span className="block">Kampalo</span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block bg-gradient-to-r from-[#174A6E] to-[#0B3049] dark:from-white dark:to-blue-200 bg-clip-text text-transparent"
            >
              See all your ads. Ask Kai what to scale.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed"
          >
            Connect Google and Meta once. Then ask Kai—your AI assistant—about ROAS, spend, campaigns, and organic performance.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#174A6E] hover:bg-[#0f3451] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg shadow-[#174A6E]/25"
            >
              Start Free Trial
            </motion.button>
            <motion.a
              href="#kai"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex justify-center items-center bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-xl font-semibold text-base transition-all"
            >
              Meet Kai
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 text-sm md:text-base text-slate-600 dark:text-slate-400"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Credit Card Required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              14-Day Free Trial
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancel Anytime
            </div>
          </motion.div>
          </motion.div>

          {/* Right Column - Single Laptop with Rotating Screens */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <LaptopFrame className="w-full max-w-2xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentDashboard}-${theme}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={resolveDashboardImage(heroDashboards[currentDashboard].id, theme)}
                    alt={heroDashboards[currentDashboard].alt}
                    fill
                    className="object-cover object-left-top"
                    sizes="(max-width: 1024px) 0px, 672px"
                    priority={currentDashboard === 0}
                    quality={80}
                  />
                </motion.div>
              </AnimatePresence>
            </LaptopFrame>
            
            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {heroDashboards.map((_, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    width: currentDashboard === index ? '24px' : '8px',
                    opacity: currentDashboard === index ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`h-2 rounded-full bg-[#174A6E] ${
                    currentDashboard === index ? 'w-6' : 'w-2'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

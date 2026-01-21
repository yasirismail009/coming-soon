'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const heroDashboards = [
  { id: 'main', image: '/assets/main_dashboard.png' },
  { id: 'google', image: '/assets/google_dashboard.png' },
  { id: 'facebook', image: '/assets/facebook_dashboard.png' },
  { id: 'comparison', image: '/assets/comparision_dashbaord.png' },
];

export default function Hero() {
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

  // Laptop Frame Component
  const LaptopFrame = ({ children, className = '' }) => {
    return (
      <div className={`relative ${className}`}>
        {/* Laptop Base */}
        <div className="relative bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-t-lg p-1.5 shadow-2xl">
          {/* Screen Bezel */}
          <div className="bg-slate-900 rounded-lg p-1.5">
            {/* Camera/Indicator */}
            <div className="h-0.5 w-12 bg-slate-700 rounded-full mx-auto mb-1.5"></div>
            {/* Screen Content */}
            <div className="bg-white dark:bg-slate-900 rounded overflow-hidden" style={{ aspectRatio: '16/10', maxHeight: '400px' }}>
              {children}
            </div>
          </div>
        </div>
        {/* Laptop Base Bottom */}
        <div className="h-1.5 bg-gradient-to-b from-slate-400 to-slate-500 dark:from-slate-800 dark:to-slate-900 rounded-b-lg mx-auto w-[85%]"></div>
        {/* Trackpad */}
        <div className="h-0.5 bg-slate-600 dark:bg-slate-700 rounded-full mx-auto w-[30%] mt-1"></div>
      </div>
    );
  };

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
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#174A6E]/10 dark:bg-[#174A6E]/30 text-[#174A6E] dark:text-[#174A6E]/80 text-sm font-medium mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Unify Your Marketing Analytics
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            One Dashboard for
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block bg-gradient-to-r from-[#174A6E] to-[#0B3049] bg-clip-text text-transparent"
            >
              All Your Ads
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed"
          >
            Connect, monitor, analyze, and optimize your advertising campaigns across Google Ads, Meta, and more—all from a single, unified platform.
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-xl font-semibold text-base transition-all"
            >
              Watch Demo
            </motion.button>
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
            <LaptopFrame>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDashboard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={heroDashboards[currentDashboard].image}
                    alt={`KAMPALO Dashboard ${currentDashboard + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 800px"
                    priority={currentDashboard === 0}
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

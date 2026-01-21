'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const dashboards = [
  {
    id: 'main',
    name: 'Unified Dashboard',
    description: 'Get a complete overview of all your advertising campaigns in one place',
    image: '/assets/main_dashboard.png',
  },
  {
    id: 'google',
    name: 'Google Ads Dashboard',
    description: 'Comprehensive analytics and insights for your Google Ads campaigns',
    image: '/assets/google_dashboard.png',
  },
  {
    id: 'facebook',
    name: 'Meta Ads Dashboard',
    description: 'Monitor and optimize your Facebook and Instagram ad performance',
    image: '/assets/facebook_dashboard.png',
  },
  {
    id: 'comparison',
    name: 'Cross-Platform Comparison',
    description: 'Compare performance metrics across all your advertising platforms side-by-side',
    image: '/assets/comparision_dashbaord.png',
  },
];

// Laptop Frame Component
const LaptopFrame = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Laptop Base */}
      <div className="relative bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-t-lg p-2 shadow-2xl">
        {/* Screen Bezel */}
        <div className="bg-slate-900 rounded-lg p-2">
          {/* Camera/Indicator */}
          <div className="h-1 w-16 bg-slate-700 rounded-full mx-auto mb-2"></div>
          {/* Screen Content */}
          <div className="bg-white dark:bg-slate-900 rounded overflow-hidden aspect-video">
            {children}
          </div>
        </div>
      </div>
      {/* Laptop Base Bottom */}
      <div className="h-2 bg-gradient-to-b from-slate-400 to-slate-500 dark:from-slate-800 dark:to-slate-900 rounded-b-lg mx-auto w-[85%]"></div>
      {/* Trackpad */}
      <div className="h-1 bg-slate-600 dark:bg-slate-700 rounded-full mx-auto w-[30%] mt-1"></div>
    </div>
  );
};

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState('main');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeDashboard = dashboards.find((d) => d.id === activeTab) || dashboards[0];

  // Auto-rotate dashboards every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = dashboards.findIndex((d) => d.id === current);
        const nextIndex = (currentIndex + 1) % dashboards.length;
        return dashboards[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            See Your Data in Action
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore powerful dashboards designed to give you complete visibility into your advertising performance
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {dashboards.map((dashboard) => (
            <button
              key={dashboard.id}
              onClick={() => {
                setActiveTab(dashboard.id);
                setIsAutoPlaying(false);
              }}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                activeTab === dashboard.id
                  ? 'bg-[#174A6E] text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {dashboard.name}
            </button>
          ))}
        </motion.div>

        {/* Dashboard Preview in Laptop Frame */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 max-w-4xl mx-auto relative"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <LaptopFrame>
                  <div className="relative w-full h-full">
                    <Image
                      src={activeDashboard.image}
                      alt={activeDashboard.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      priority={activeTab === 'main'}
                    />
                  </div>
                </LaptopFrame>
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.div
            key={`info-${activeTab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 text-center"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {activeDashboard.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {activeDashboard.description}
            </p>
          </motion.div>

          {/* Auto-play control */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              {isAutoPlaying ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Pause
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Play
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Dashboard Grid - All Screenshots in Laptop Frames */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={dashboard.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="cursor-pointer"
              onClick={() => {
                setActiveTab(dashboard.id);
                setIsAutoPlaying(false);
              }}
            >
              <LaptopFrame className="scale-75 lg:scale-90 origin-center">
                <div className="relative w-full h-full">
                  <Image
                    src={dashboard.image}
                    alt={dashboard.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </LaptopFrame>
              <div className="mt-4 text-center">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                  {dashboard.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {dashboard.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

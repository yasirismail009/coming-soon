'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { resolveDashboardImage } from '@/utils/dashboardScreenshots';
import LaptopFrame from '@/components/LaptopFrame';

/** Tab labels match the in-app sidebar exactly. Screenshots are full product UI (nav + page). */
const dashboards = [
  {
    id: 'kai',
    name: 'Kai',
    description: 'Ask about spend, ROAS, and what to optimize next',
  },
  {
    id: 'overview',
    name: 'Dashboard',
    description: 'Performance overview across connected accounts',
  },
  {
    id: 'trends',
    name: 'Trends',
    description: 'How metrics move over your selected date range',
  },
  {
    id: 'kpis',
    name: 'KPI Comparison',
    description: 'Side-by-side KPI comparison (enterprise)',
  },
  {
    id: 'accountsCampaigns',
    name: 'Accounts & Campaigns',
    description: 'Google Ads and Meta Ads detail in one place',
  },
  {
    id: 'analytics',
    name: 'Google Analytics',
    description: 'GA4 traffic, pages, and sales trends',
  },
  {
    id: 'seo',
    name: 'SEO Suite',
    description: 'Audit domains—scores, inspection, and indexing',
  },
  {
    id: 'organicInsights',
    name: 'Organic Insights',
    description: 'Page and Instagram insights plus moderation',
  },
  {
    id: 'reports',
    name: 'Reports',
    description: 'Generate, brand, and schedule exports',
  },
  {
    id: 'connect',
    name: 'Connect',
    description: 'One Google OAuth and one Meta OAuth',
  },
];

export default function DashboardShowcase() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('kai');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeDashboard = dashboards.find((d) => d.id === activeTab) || dashboards[0];

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            The same workspace your team opens every day
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Full product screens—Kai through Connect—exactly as they appear in Kampalo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {dashboards.map((dashboard) => (
            <button
              key={dashboard.id}
              type="button"
              onClick={() => {
                setActiveTab(dashboard.id);
                setIsAutoPlaying(false);
              }}
              className={`px-3.5 sm:px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeTab === dashboard.id
                  ? 'bg-[#174A6E] text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {dashboard.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${theme}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <LaptopFrame>
                <Image
                  src={resolveDashboardImage(activeDashboard.id, theme)}
                  alt={`Kampalo ${activeDashboard.name}`}
                  fill
                  className="object-cover object-left-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                  priority={activeTab === 'kai'}
                />
              </LaptopFrame>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
              {activeDashboard.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {activeDashboard.description}
            </p>
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
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
      </div>
    </section>
  );
}

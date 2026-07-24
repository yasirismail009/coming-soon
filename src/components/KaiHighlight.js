'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { resolveDashboardImage } from '@/utils/dashboardScreenshots';
import LaptopFrame from '@/components/LaptopFrame';

const prompts = [
  'Which campaigns have the best ROAS?',
  'Compare Google vs Meta this month',
  'Where should I cut spend?',
  'How are my Instagram posts performing?',
];

export default function KaiHighlight() {
  const { theme } = useTheme();

  return (
    <section
      id="kai"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B3049] via-[#174A6E] to-[#0B3049] relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 80% 60%, rgba(96,165,250,0.18), transparent 35%)',
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-14"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-blue-100 mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" aria-hidden />
            Meet Kai — your AI assistant
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl mx-auto">
            Ask Kampalo what to scale next
          </h2>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
            Kai answers plain-language questions from your synced Google Ads, Meta Ads, and Meta organic data—ROAS, spend, and what to optimize.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <LaptopFrame>
              <Image
                src={resolveDashboardImage('kai', theme)}
                alt="Kampalo Kai AI assistant"
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </LaptopFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-5 space-y-6"
          >
            <ul className="space-y-3 text-white/90">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-200 shrink-0" aria-hidden />
                <span>Plain-language questions—no spreadsheets required</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-200 shrink-0" aria-hidden />
                <span>Grounded in your connected ads and organic data</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-200 shrink-0" aria-hidden />
                <span>Chat history that stays with your workspace</span>
              </li>
            </ul>

            <div>
              <p className="text-blue-100 text-xs font-semibold uppercase tracking-wide mb-3">
                Try asking
              </p>
              <div className="flex flex-wrap gap-2">
                {prompts.map((prompt) => (
                  <span
                    key={prompt}
                    className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90"
                  >
                    {prompt}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/kai"
                className="inline-flex justify-center items-center bg-white hover:bg-slate-100 text-[#174A6E] px-7 py-3.5 rounded-xl font-semibold transition-colors"
              >
                How Kai works
              </Link>
              <a
                href="/#features"
                className="inline-flex justify-center items-center border-2 border-white/40 hover:border-white text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
              >
                See all features
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

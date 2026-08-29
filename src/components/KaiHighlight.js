'use client';

import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { resolveDashboardImage } from '@/utils/dashboardScreenshots';
import KaiMark from '@/components/KaiMark';
import LaptopFrame from '@/components/LaptopFrame';

const prompts = [
  'Which campaigns have the best ROAS?',
  'Compare Google vs Meta this month',
  'Where should I cut spend?',
];

export default function KaiHighlight() {
  const { theme } = useTheme();

  return (
    <section
      id="kai"
      className="relative mt-28 overflow-hidden border-y border-[var(--km-border)] bg-[radial-gradient(90%_120%_at_20%_0%,#ece6ff_0%,#edf0f6_45%,#edf0f6_100%)] dark:bg-[radial-gradient(90%_120%_at_20%_0%,#1b1246_0%,#0c0a22_45%,#05080f_100%)]"
    >
      <div
        aria-hidden
        className="km-glow km-orb right-[-8%] bottom-[-20%]"
        style={{ background: 'radial-gradient(closest-side, rgba(109,74,255,0.42), transparent)' }}
      />
      <div className="km-wrap relative grid items-center gap-10 py-[4.5rem] lg:grid-cols-[0.85fr_1.15fr] lg:gap-[3.75rem] lg:py-[6.5rem]">
        <div>
          <KaiMark size={56} />
          <h2 className="mt-[1.625rem] mb-[1.125rem] km-h2 font-extrabold leading-[1.08] tracking-[-0.035em]">
            Ask Kai instead of building a pivot table
          </h2>
          <p className="mb-7 text-[1.0625rem] leading-[1.7] text-[#6b5ea8] dark:text-[#B4A8E4] text-pretty">
            Kai reads the same synced data the dashboard does. Ask which campaigns have the best ROAS, how Google compared to Meta this month, or where to cut spend — and get an answer with the numbers attached.
          </p>
          <div className="flex flex-col gap-[0.6875rem]">
            {prompts.map((prompt) => (
              <div
                key={prompt}
                className="rounded-full border border-[rgba(151,124,255,0.32)] bg-[rgba(109,74,255,0.12)] px-[1.25rem] py-[0.9375rem] text-[0.9375rem] font-semibold text-[#5b3fd6] dark:text-[#DDD6FA]"
              >
                {prompt}
              </div>
            ))}
          </div>
        </div>
        <LaptopFrame url="app.kampalo.com/kai" accent>
          <Image
            src={resolveDashboardImage('kai', theme)}
            alt="Kai chat interface with suggested questions about ROAS and spend"
            fill
            className="object-cover object-left-top"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </LaptopFrame>
      </div>
    </section>
  );
}

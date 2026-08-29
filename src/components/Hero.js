'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { resolveDashboardImage } from '@/utils/dashboardScreenshots';
import KaiMark from '@/components/KaiMark';
import LaptopFrame from '@/components/LaptopFrame';

export default function Hero() {
  const { theme } = useTheme();
  const spotRef = useRef(null);
  const hostRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const host = hostRef.current;
    const spot = spotRef.current;
    if (!host || !spot || reduce) return;

    const onMove = (e) => {
      const r = host.getBoundingClientRect();
      spot.style.opacity = '1';
      spot.style.transform = `translate3d(${e.clientX - r.left}px, ${e.clientY - r.top}px, 0) translate(-50%, -50%)`;
    };
    const onLeave = () => {
      spot.style.opacity = '0';
    };
    host.addEventListener('mousemove', onMove);
    host.addEventListener('mouseleave', onLeave);
    return () => {
      host.removeEventListener('mousemove', onMove);
      host.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      id="top"
      ref={hostRef}
      className="relative overflow-hidden bg-[radial-gradient(130%_90%_at_50%_-20%,#c5d7ea_0%,#edf0f6_42%,#edf0f6_100%)] dark:bg-[radial-gradient(130%_90%_at_50%_-20%,#17395e_0%,#0a1526_42%,#05080f_100%)]"
    >
      <div
        ref={spotRef}
        aria-hidden
        className="km-orb-spot top-0 left-0 opacity-0 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(closest-side, rgba(109,74,255,0.28), rgba(109,74,255,0))',
        }}
      />
      <div
        aria-hidden
        className="km-glow km-orb-wide top-[-18%] left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(closest-side, var(--km-glow-blue), transparent)' }}
      />
      <div
        aria-hidden
        className="km-glow km-orb top-[-8%] right-[2%] w-[40%] max-w-[32.5rem]"
        style={{
          background: 'radial-gradient(closest-side, var(--km-glow-purple), transparent)',
          animationDelay: '2s',
        }}
      />

      <div className="km-wrap relative py-[4.5rem] md:py-[6.5rem] text-center">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--km-border)] bg-white/50 dark:bg-white/5 px-[1.125rem] py-[0.4375rem] pl-2.5 text-[0.8125rem] font-semibold text-[var(--km-muted)] backdrop-blur-md">
          <KaiMark size={17} />
          Kai, your marketing analyst, is included on every plan
          <span aria-hidden className="km-pulse h-1.5 w-1.5 rounded-full bg-[#34D399]" />
        </div>

        <h1 className="mx-auto mb-6 max-w-[14em] km-display font-extrabold leading-[1.02] tracking-[-0.042em] text-balance">
          Every ad account, in <span className="km-gradient-text">one dashboard</span>
        </h1>
        <p className="mx-auto mb-[2.375rem] max-w-[33em] text-[1.1875rem] leading-[1.62] text-[var(--km-muted)] text-pretty">
          Kampalo unifies Google Ads, Meta Ads, Analytics, Search Console and organic social into a single workspace — spend, revenue and ROAS side by side, for every account you run.
        </p>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3.5">
          <Link href="/contact" className="km-btn-primary">
            Contact us
          </Link>
          <a href="#platform" className="km-btn-ghost">
            See the platform
          </a>
        </div>
        <div className="mb-[3.875rem] text-[0.78125rem] font-bold uppercase tracking-[0.18em] text-[var(--km-faint)]">
          Ask. Automate. Grow.
        </div>

        <div className="km-float mx-auto max-w-[90%]">
          <div className="relative rounded-[1.375rem] border border-white/40 bg-gradient-to-b from-white/40 to-white/10 p-3.5 shadow-[0_3.75rem_8.125rem_-2.5rem_rgba(15,23,42,0.35)] backdrop-blur-md dark:border-white/16 dark:from-white/14 dark:to-white/3 dark:shadow-[0_3.75rem_8.125rem_-2.5rem_rgba(0,0,0,0.95),0_0_7.5rem_rgba(75,149,240,0.22)]">
            <LaptopFrame url="app.kampalo.com/dashboard">
              <Image
                src={resolveDashboardImage('overview', theme)}
                alt="Kampalo dashboard showing ROAS, spend, revenue and conversions across Google and Meta"
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 1080px) 100vw, 1080px"
                priority
                quality={80}
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="km-sheen absolute top-0 bottom-0 w-2/5 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
              </div>
            </LaptopFrame>
          </div>
          <div
            aria-hidden
            className="relative ml-[-9%] h-[0.9375rem] w-[118%] rounded-b-[0.875rem] bg-gradient-to-b from-[#c5ced9] to-[#9aa6b5] shadow-[0_1.5rem_2.5rem_-1.125rem_rgba(15,23,42,0.35)] dark:from-[#2B3646] dark:to-[#141B27] dark:shadow-[0_1.5rem_2.5rem_-1.125rem_rgba(0,0,0,0.9)]"
          />
          <div aria-hidden className="mx-auto h-[0.3125rem] w-[12%] rounded-b-md bg-[#c8d0db] dark:bg-[#0B1019]" />
        </div>
      </div>
    </section>
  );
}

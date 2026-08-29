'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { resolveDashboardImage } from '@/utils/dashboardScreenshots';
import LaptopFrame from '@/components/LaptopFrame';

const layouts = [
  {
    id: 'overview',
    label: 'Overview',
    note: 'Overview — eight KPI cards, each with its own trend line, then the charts below.',
  },
  {
    id: 'focus',
    label: 'Focus',
    note: 'Focus — one hero metric at full width with the three you check next stacked beside it.',
  },
  {
    id: 'compact',
    label: 'Compact',
    note: 'Compact — every KPI on a single strip, charts immediately underneath.',
  },
];

export default function DashboardShowcase() {
  const { theme } = useTheme();
  const [layout, setLayout] = useState('overview');
  const [picked, setPicked] = useState(false);
  const pinRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pin = pinRef.current;
    if (!pin || reduce || picked) return;

    const onScroll = () => {
      const vh = window.innerHeight;
      const r = pin.getBoundingClientRect();
      const span = pin.offsetHeight - vh;
      if (span <= 0) return;
      let p = -r.top / span;
      p = Math.min(0.999, Math.max(0, p));
      const next = layouts[Math.floor(p * layouts.length)].id;
      setLayout((cur) => (cur === next ? cur : next));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [picked]);

  const current = layouts.find((l) => l.id === layout) || layouts[0];

  return (
    <section ref={pinRef} className="relative km-wrap pt-28 min-h-0 lg:min-h-[150vh]">
      <div className="grid items-center gap-10 lg:sticky lg:top-[7.375rem] lg:grid-cols-[0.85fr_1.15fr] lg:gap-[3.75rem]">
        <div>
          <div className="km-kicker">Dashboard layouts</div>
          <h2 className="km-h2">The density you want, not the one we picked</h2>
          <p className="km-lead mb-[1.625rem]">
            Overview gives every KPI its own card with a sparkline. Focus puts revenue front and centre. Compact fits the whole picture above the fold. Same data, same period controls, switched in one click.
          </p>
          <div className="km-pill-track mb-5">
            {layouts.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`km-pill ${layout === item.id ? 'is-on' : ''}`}
                onClick={() => {
                  setPicked(true);
                  setLayout(item.id);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="m-0 text-[0.9375rem] leading-relaxed text-[var(--km-faint)]">{current.note}</p>
        </div>
        <LaptopFrame url="app.kampalo.com/dashboard">
          {layouts.map((item) => (
            <Image
              key={item.id}
              src={resolveDashboardImage(item.id, theme)}
              alt={`Kampalo dashboard, ${item.label} layout`}
              fill
              className={`object-cover object-left-top transition-opacity duration-500 ${
                layout === item.id ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          ))}
        </LaptopFrame>
      </div>
    </section>
  );
}

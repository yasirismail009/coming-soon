'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: 6, label: 'product surfaces reading one synced dataset' },
  { value: 9, label: 'metrics trended side by side on any window' },
  { value: 4, label: 'report templates, branded per client' },
  { value: 5, label: 'breakdowns behind every campaign' },
];

export default function KeyMetrics() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = root.querySelectorAll('[data-count]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          io.unobserve(el);
          const target = parseFloat(el.getAttribute('data-count')) || 0;
          if (reduce) {
            el.textContent = String(target);
            return;
          }
          const dur = 1100;
          const t0 = performance.now();
          const step = (now) => {
            const p = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = String(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          el.textContent = '0';
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="km-wrap pt-20">
      <div
        ref={rootRef}
        className="grid grid-cols-2 overflow-hidden rounded-[1.25rem] border border-[var(--km-border)] bg-[var(--km-border)] gap-px lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[var(--km-bg)] px-[1.875rem] py-9">
            <div className="km-gradient-text text-[3rem] font-extrabold leading-none tracking-[-0.04em]">
              <span data-count={stat.value}>{stat.value}</span>
            </div>
            <div className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--km-muted)]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

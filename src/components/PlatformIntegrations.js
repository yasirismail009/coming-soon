'use client';

const items = [
  { label: 'Connects to', accent: true },
  { label: 'Google Ads' },
  { label: 'Meta Ads' },
  { label: 'Google Analytics 4' },
  { label: 'Search Console' },
  { label: 'Instagram' },
  { label: 'Facebook Pages' },
  { label: 'TikTok Ads soon', soon: true },
];

function Row() {
  return items.map((item, i) => (
    <span
      key={`${item.label}-${i}`}
      className={
        item.accent
          ? 'whitespace-nowrap text-xs font-bold uppercase tracking-[0.14em] text-[var(--km-accent)]'
          : item.soon
            ? 'whitespace-nowrap text-[0.9375rem] font-semibold text-[var(--km-faint)]'
            : 'whitespace-nowrap text-[1.0625rem] font-bold text-[var(--km-muted)]'
      }
    >
      {item.label}
    </span>
  ));
}

export default function PlatformIntegrations() {
  return (
    <section
      id="platforms"
      className="border-y border-[var(--km-border)] bg-[var(--km-bg-elevated)]"
    >
      <div className="overflow-hidden py-[1.375rem] [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="km-marquee flex w-max items-center gap-11 pl-11">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}

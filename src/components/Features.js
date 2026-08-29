const surfaces = [
  {
    title: 'Dashboard',
    body: 'Eight headline KPIs with period-over-period deltas, spend against revenue over time, and the platform split. Three density layouts.',
    more: 'Overview, Focus and Compact — switched in one click, same period controls.',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#8CC0FF" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: 'Trends',
    body: 'Revenue, spend, ROAS, CTR and CPA as sparklines across any window, so you can see what is rising, falling or flat.',
    more: 'Filter to Google or Meta and the whole board re-reads for that platform.',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#8CC0FF" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
  {
    title: 'KPI comparison',
    body: 'Google against Meta, account against account, client against client — with the better value marked in every row.',
    more: 'Currencies stay labelled rather than silently converted.',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#8CC0FF" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
        <path d="M12 3v18M5 7l-3 7h6zM19 7l-3 7h6zM6 5h12" />
      </svg>
    ),
  },
  {
    title: 'SEO Suite',
    body: 'Lighthouse audits, Search Console performance, URL inspection and the Indexing API in a single run.',
    more: 'Core Web Vitals and failing audits ranked by impact.',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#8CC0FF" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </svg>
    ),
  },
  {
    title: 'Organic insights',
    body: 'Facebook Page and Instagram reach, engagement and follower movement, kept separate from paid spend.',
    more: 'Read on page insight tokens, never mixed into ads numbers.',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#8CC0FF" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
        <path d="M17 3a4 4 0 100 8 4 4 0 000-8zM7 13a4 4 0 100 8 4 4 0 000-8zM7 3v8M17 13v8" />
      </svg>
    ),
  },
  {
    title: 'Reports',
    body: 'Branded PDFs and CSVs per client, built from four report types and sent on a schedule you set once.',
    more: "Your client's colours, logo and footer on every page.",
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#8CC0FF" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
        <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="platform" className="km-wrap pt-28">
      <div className="mb-[3.25rem] max-w-[42em]">
        <div className="km-kicker">The platform</div>
        <h2 className="km-h2">Six surfaces, one source of numbers</h2>
        <p className="km-lead">
          Every view reads from the same synced data, so the ROAS on a client report matches the ROAS in the dashboard and the one Kai quotes back to you.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {surfaces.map((item) => (
          <div key={item.title} className="km-card group px-[1.75rem] py-[2rem]">
            <div className="km-icon-box">{item.icon}</div>
            <h3 className="mt-5 mb-2 text-[1.25rem] font-extrabold tracking-[-0.015em]">{item.title}</h3>
            <p className="m-0 text-[0.9375rem] leading-relaxed text-[var(--km-muted)]">{item.body}</p>
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-3.5 group-hover:max-h-40 group-hover:opacity-100">
              <div className="border-t border-[var(--km-border)] pt-3.5 text-sm leading-relaxed text-[var(--km-link)]">
                {item.more}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

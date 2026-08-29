const faqs = [
  {
    q: 'How long does connecting take?',
    a: 'One OAuth flow per provider. Google covers Ads, Analytics and Search Console; Meta covers Ads, Page Insights and Instagram. The first sync starts immediately and you can watch its progress on the Connect screen.',
  },
  {
    q: 'Does it handle multiple currencies?',
    a: 'Yes. Each account keeps its own currency in cards and tables, and comparisons label the currency on every value rather than silently converting.',
  },
  {
    q: 'Can clients see their own data?',
    a: 'Brand clients scope a workspace to the accounts assigned to them, with their own report branding. Most teams still send the branded PDF rather than a login.',
  },
  {
    q: 'What is Kai actually reading?',
    a: 'Only the data already synced into your workspace for the period in view. It answers with the same figures the dashboard shows and names the campaigns and accounts behind them.',
  },
  {
    q: 'Is TikTok Ads supported?',
    a: 'Not yet. It sits on the Connect screen as the next provider, alongside Google and Meta.',
  },
];

export default function Benefits() {
  return (
    <section className="km-wrap pt-28">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-[3.75rem]">
        <h2 className="km-h2 m-0">
          Questions we get
          <br />
          before a demo
        </h2>
        <div className="border-t border-[var(--km-border)]">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-[var(--km-border)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.125rem] font-bold text-[var(--km-ink)] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="shrink-0 text-[1.375rem] font-normal text-[var(--km-faint)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mb-6 max-w-[44em] text-base leading-[1.7] text-[var(--km-muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

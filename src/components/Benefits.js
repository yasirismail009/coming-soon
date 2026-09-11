import { HOME_FAQS } from '@/lib/structuredData';

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
          {HOME_FAQS.map((item) => (
            <details key={item.question} className="group border-b border-[var(--km-border)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.125rem] font-bold text-[var(--km-ink)] [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="shrink-0 text-[1.375rem] font-normal text-[var(--km-faint)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mb-6 max-w-[44em] text-base leading-[1.7] text-[var(--km-muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Browser-style frame for full-app screenshots, matching the Kampalo v2 chrome.
 */
export default function LaptopFrame({
  children,
  className = '',
  url = 'app.kampalo.com',
  accent = false,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-[var(--km-shot-bg)] shadow-[0_3.125rem_6.25rem_-2.5rem_rgba(0,0,0,0.55)] dark:shadow-[0_3.125rem_6.25rem_-2.5rem_rgba(0,0,0,0.95)] ${
        accent
          ? 'border-[rgba(151,124,255,0.34)]'
          : 'border-[var(--km-border)]'
      } ${className}`}
    >
      <div
        className={`flex items-center gap-[0.4375rem] px-[0.875rem] py-[0.625rem] border-b ${
          accent
            ? 'bg-[rgba(151,124,255,0.12)] border-[rgba(151,124,255,0.2)]'
            : 'bg-black/[0.03] dark:bg-white/5 border-[var(--km-border)]'
        }`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] shrink-0" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] shrink-0" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840] shrink-0" aria-hidden />
        <div className="flex-1 flex justify-center min-w-0">
          <span
            className={`truncate px-[1rem] py-[0.25rem] rounded-full text-[0.71875rem] font-semibold ${
              accent
                ? 'bg-[rgba(151,124,255,0.18)] text-[#6D4AFF] dark:text-[#C4B8F2]'
                : 'bg-black/[0.05] dark:bg-white/7 text-[var(--km-chrome)]'
            }`}
          >
            {url}
          </span>
        </div>
        <span className="w-10 shrink-0" aria-hidden />
      </div>
      <div className="relative w-full aspect-[1920/870] bg-[#0B111C]">{children}</div>
    </div>
  );
}

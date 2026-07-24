/**
 * Browser-style frame for full-app screenshots (~1920×870).
 * Keeps native aspect so UI stays sharp—no laptop letterboxing or side crop.
 */
export default function LaptopFrame({ children, className = '' }) {
  return (
    <div
      className={`relative rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45)] overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-3 px-3 sm:px-4 py-2.5 border-b border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/80">
        <div className="flex items-center gap-1.5 shrink-0" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="mx-auto max-w-[14rem] sm:max-w-xs truncate rounded-md bg-white dark:bg-slate-800 px-3 py-1 text-center text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 border border-slate-200/70 dark:border-slate-700/70">
            app.kampalo.com
          </div>
        </div>
        <div className="w-10 shrink-0" aria-hidden />
      </div>
      <div className="relative w-full aspect-[1920/870] bg-slate-950">
        <div className="absolute inset-0">{children}</div>
      </div>
    </div>
  );
}

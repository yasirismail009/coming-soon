/**
 * Laptop device chrome — same visual as the main marketing sections (dashboard showcase).
 */
export default function LaptopFrame({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-t-lg p-2 shadow-2xl">
        <div className="bg-slate-900 rounded-lg p-2">
          <div className="h-1 w-16 bg-slate-700 rounded-full mx-auto mb-2" />
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded bg-white dark:bg-slate-900">
            <div className="absolute inset-0">{children}</div>
          </div>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-b from-slate-400 to-slate-500 dark:from-slate-800 dark:to-slate-900 rounded-b-lg mx-auto w-[85%]" />
      <div className="h-1 bg-slate-600 dark:bg-slate-700 rounded-full mx-auto w-[30%] mt-1" />
    </div>
  );
}

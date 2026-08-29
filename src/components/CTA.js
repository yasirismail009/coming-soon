import Link from 'next/link';

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative mt-28 overflow-hidden border-t border-[var(--km-border)] bg-[radial-gradient(110%_130%_at_50%_110%,#c5d7ea_0%,#edf0f6_50%,#edf0f6_100%)] dark:bg-[radial-gradient(110%_130%_at_50%_110%,#1b3e68_0%,#0c1526_50%,#05080f_100%)]"
    >
      <div
        aria-hidden
        className="km-glow km-orb bottom-[-25%] left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(closest-side, rgba(109,74,255,0.34), transparent)' }}
      />
      <div className="km-wrap relative py-[5.5rem] text-center lg:py-[6.875rem]">
        <h2 className="mx-auto mb-[1.125rem] max-w-[13em] km-h1 font-extrabold leading-[1.05] tracking-[-0.04em] text-balance">
          See your own numbers in Kampalo
        </h2>
        <p className="mx-auto mb-9 max-w-[32em] text-[1.125rem] leading-[1.65] text-[var(--km-muted)]">
          Connect one Google or Meta account and the dashboard fills in on the first sync. Bring the rest when you are ready.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link href="/contact" className="km-btn-primary">
            Contact us
          </Link>
          <a href="#pricing" className="km-btn-ghost">
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}

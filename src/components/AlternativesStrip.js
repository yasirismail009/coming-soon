import Link from 'next/link';
import { TOOL_COMPARISONS } from '@/lib/competitors';

export default function AlternativesStrip() {
  return (
    <section className="km-wrap pt-28" aria-labelledby="alternatives-heading">
      <div className="mb-[2.25rem] max-w-[42em]">
        <div className="km-kicker">Compared with</div>
        <h2 id="alternatives-heading" className="km-h2">
          An alternative when the job is Google versus Meta
        </h2>
        <p className="km-lead">
          Agency reporting suites, KPI walls, and Looker canvases solve different jobs. Kampalo is
          the operator workspace for paid search and social.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOOL_COMPARISONS.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.path}
            className="km-card block px-[1.5rem] py-[1.35rem]"
          >
            <h3 className="mb-2 text-[1.0625rem] font-semibold">vs {tool.name}</h3>
            <p className="text-[0.9375rem] leading-relaxed text-[var(--km-muted)]">{tool.hubBlurb}</p>
          </Link>
        ))}
      </div>
      <p className="mt-8">
        <Link href="/alternatives" className="text-[var(--km-link)] font-semibold underline underline-offset-4">
          See all alternatives
        </Link>
        {' · '}
        <Link
          href="/blog/google-ads-meta-dashboard-alternatives"
          className="text-[var(--km-link)] font-semibold underline underline-offset-4"
        >
          2026 dashboard roundup
        </Link>
      </p>
    </section>
  );
}

import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import FaqList from '@/components/FaqList';
import { absoluteUrl, pageMetadata } from '@/lib/site';
import { otherToolComparisons } from '@/lib/competitors';
import { breadcrumbSchema, faqSchema } from '@/lib/structuredData';

export function compareToolMetadata(tool) {
  return pageMetadata({
    title: tool.title,
    description: tool.description,
    path: tool.path,
    keywords: tool.keywords,
  });
}

export default function CompareToolPage({ tool, faqs }) {
  const others = otherToolComparisons(tool.slug);

  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Compare', path: '/compare' },
          { name: 'Alternatives', path: '/alternatives' },
          { name: tool.searchKeyword, path: tool.path },
        ]),
        faqSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: tool.h1,
          url: absoluteUrl(tool.path),
          description: tool.description,
          about: [
            { '@type': 'SoftwareApplication', name: 'Kampalo' },
            { '@type': 'SoftwareApplication', name: tool.name },
          ],
          keywords: (tool.keywords || []).join(', '),
        },
      ]}
    >
      <p className="km-kicker">{tool.searchKeyword}</p>
      <h1 className="km-h1 mb-3 text-[var(--km-ink)]">{tool.h1}</h1>
      <h2 className="mb-6 text-[1.25rem] font-semibold text-[var(--km-muted)]">
        Kampalo vs {tool.name}
      </h2>
      <p className="km-lead mb-8">{tool.lead}</p>
      {tool.searchIntent ? (
        <p className="mb-12 text-lg leading-relaxed text-[var(--km-muted)]">{tool.searchIntent}</p>
      ) : null}

      <div className="mb-16 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-[0.9375rem]">
          <caption className="sr-only">
            Kampalo compared with {tool.name} by job, sources, AI, and delivery
          </caption>
          <thead>
            <tr className="border-b border-[var(--km-border)]">
              <th className="px-[1rem] py-[0.75rem] font-semibold"> </th>
              <th className="px-[1rem] py-[0.75rem] font-semibold">Kampalo</th>
              <th className="px-[1rem] py-[0.75rem] font-semibold">{tool.name}</th>
            </tr>
          </thead>
          <tbody>
            {tool.rows.map(([label, kampalo, other]) => (
              <tr key={label} className="border-b border-[var(--km-border)]">
                <td className="px-[1rem] py-[0.75rem] font-semibold text-[var(--km-ink)]">{label}</td>
                <td className="px-[1rem] py-[0.75rem] text-[var(--km-muted)]">{kampalo}</td>
                <td className="px-[1rem] py-[0.75rem] text-[var(--km-muted)]">{other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mb-16">
        <h2 className="km-h2">{tool.whenOtherTitle}</h2>
        <p className="text-lg leading-relaxed text-[var(--km-muted)]">{tool.whenOther}</p>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">{tool.whenKampaloTitle}</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">{tool.whenKampalo}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="/#pricing" className="km-btn-primary">
            Start 7-day trial
          </a>
          <Link href={tool.ctaSecondary.href} className="km-btn-ghost">
            {tool.ctaSecondary.label}
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Other {tool.categoryKeyword} comparisons</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          <li>
            <Link href="/alternatives" className="text-[var(--km-link)] underline">
              AgencyAnalytics alternatives hub
            </Link>
            {' — '}PPC reporting, KPI dashboards, and Looker Studio in one list
          </li>
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={item.path} className="text-[var(--km-link)] underline">
                {item.searchKeyword}
              </Link>
              {' — '}
              {item.hubBlurb}
            </li>
          ))}
        </ul>
      </section>

      <FaqList faqs={faqs} />
    </SeoPageShell>
  );
}

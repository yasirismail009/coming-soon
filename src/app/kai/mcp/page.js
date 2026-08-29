import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import KaiMark from '@/components/KaiMark';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  MCP_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Kai MCP — Ask Claude About Google Ads & Meta',
  description:
    'Connect Kampalo to Claude, Cursor, or any MCP client. Tools read the same synced Google Ads and Meta stats Kai uses in-app—not a live Ads API scrape.',
  path: '/kai/mcp',
});

export default function KaiMcpPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Kai', path: '/kai' },
          { name: 'MCP', path: '/kai/mcp' },
        ]),
        faqSchema(MCP_FAQS),
      ]}
    >
      <KaiMark size={40} className="mb-4" />
      <p className="km-kicker">Developer integrations</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">
        Ask Claude about your ads—on Kampalo’s snapshot
      </h1>
      <p className="km-lead mb-12">
        MCP (Model Context Protocol) exposes the same marketing tools Kai uses inside Kampalo.
        Your agent asks about Google Ads and Meta; answers come from workspace data you already
        synced, with the same ROAS, CTR, and CPC ranking rules.
      </p>

      <section className="mb-16">
        <h2 className="km-h2">Why not a raw Google Ads MCP?</h2>
        <p className="text-lg leading-relaxed text-[var(--km-muted)]">
          A per-platform MCP hands the model raw rows and leaves metric definitions to the prompt.
          Kampalo MCP sits on the governed snapshot: Google and Meta already aligned, currencies
          labelled, organic kept off paid ROAS. The model asks for a ranking; it does not reinvent
          CPA.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Who should use it</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          <li>Teams that already work in Claude, Cursor, or another MCP client</li>
          <li>Custom workflows that need Kai-style answers outside the Kampalo chat screen</li>
          <li>Not required for marketers who only use Kai in the app</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">What it will not do</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          MCP does not open a live Google or Meta session while you type. It does not pause
          campaigns from chat. Refresh connections in Kampalo when you need a newer extract.
          Setup details live in{' '}
          <Link href="/documentation" className="text-[var(--km-link)] underline">
            documentation
          </Link>
          .
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/kai" className="km-btn-primary">
            Use Kai in the app
          </Link>
          <Link href="/contact" className="km-btn-ghost">
            Ask about MCP access
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="km-h2">FAQ</h2>
        <div className="space-y-5">
          {MCP_FAQS.map((faq) => (
            <div key={faq.question} className="km-card px-[1.5rem] py-[1.5rem]">
              <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
              <p className="leading-relaxed text-[var(--km-muted)]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </SeoPageShell>
  );
}

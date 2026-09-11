import AppLink from '@/components/AppLink';
import SeoPageShell from '@/components/SeoPageShell';
import KaiMark from '@/components/KaiMark';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  MCP_FAQS,
} from '@/lib/structuredData';
import { GROK_BOT_MCP_URL } from '@/lib/grokBot';

export const metadata = pageMetadata({
  title: 'Kampalo MCP — Grok Bot, Cursor & Claude',
  description:
    'Connect Grok Bot, Cursor, or Claude to Kampalo MCP. Read synced Google Ads, Meta, GA4, and SEO data. Automate pauses (with confirm), alerts, and report JSON. In-app Kai stays read-only.',
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
        MCP for Grok Bot, Cursor, and Claude
      </h1>
      <p className="km-lead mb-12">
        MCP (Model Context Protocol) is the pipe. Grok Bot uses it to brief your ads and to run
        Kampalo automations. Answers come from workspace data you already synced — not a live Ads
        API scrape.
      </p>

      <section className="mb-16">
        <h2 className="km-h2">Read and act</h2>
        <p className="mb-4 text-lg leading-relaxed text-[var(--km-muted)]">
          Read tools cover Google Ads, Meta Ads, GA4, Search Console / SEO, and organic Facebook /
          Instagram. Write tools (Grok Bot plugin) can propose a pause, confirm it, manage ads and
          SEO alerts, save ROAS rules, and generate report JSON.
        </p>
        <p className="text-lg leading-relaxed text-[var(--km-muted)]">
          In-app Kai stays read-only. Live pause still needs your confirm. Endpoint:{' '}
          <code className="text-[0.95em]">{GROK_BOT_MCP_URL}</code> — not <code className="text-[0.95em]">/api</code>.
        </p>
      </section>

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
          <li>Teams that already work in Grok Bot, Cursor, or another MCP client</li>
          <li>Operators who want briefs plus confirmed pauses and alerts outside the Kampalo chat screen</li>
          <li>Not required if you only ask Kai in the app</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">What it will not do</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          MCP does not open a live Google or Meta session while you type. It does not change
          budgets, create campaigns, or write Shopify/TikTok. Pause without a proposal plus your
          confirm is refused. Refresh connections in Kampalo when you need a newer extract.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <AppLink href="/kai/grok-bot" className="km-btn-primary">
            Grok Bot automation
          </AppLink>
          <AppLink href="/kai" className="km-btn-ghost">
            Use Kai in the app
          </AppLink>
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

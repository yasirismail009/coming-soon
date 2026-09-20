import AppLink from '@/components/AppLink';
import SeoPageShell from '@/components/SeoPageShell';
import KaiMark from '@/components/KaiMark';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
} from '@/lib/structuredData';
import {
  GROK_BOT_FAQS,
  GROK_BOT_MCP_URL,
  GROK_BOT_PLUGIN_REPO,
} from '@/lib/grokBot';

export const metadata = pageMetadata({
  title: 'Grok Bot — Automate Kampalo Pauses, Alerts & Reports',
  description:
    'Kampalo for Grok Bot (and Cursor): brief Google vs Meta from synced data, then propose pauses and confirm live. AI that acts with your sign-off. In-app Kai stays read-only.',
  path: '/kai/grok-bot',
});

const jobs = [
  {
    title: 'Brief performance',
    body: 'Google vs Meta, GA4, SEO analysis, and organic Facebook Page / Instagram — from the snapshot already in Kampalo.',
  },
  {
    title: 'Propose a pause',
    body: 'Pick a weak selected campaign. Grok Bot creates a proposal. The live ad stays on until you confirm.',
  },
  {
    title: 'Confirm the pause',
    body: 'You say confirm. Kampalo writes PAUSED to Google Ads or Meta. Two steps, on purpose.',
  },
  {
    title: 'Watchdogs',
    body: 'Ads alerts (ROAS, CPA, spend pace), SEO / AI-referral alerts, and optional ROAS auto-pause rules that start in dry-run.',
  },
  {
    title: 'Report pack',
    body: 'Generate performance report JSON from synced data. PDF stays in the Kampalo app.',
  },
];

const outOfScope = [
  'Connect OAuth or pick new ad accounts',
  'Change budgets or create campaigns',
  'Shopify or TikTok writes',
  'Pause without a proposal plus your explicit confirm',
  'Turn a live auto-pause rule on without you asking',
];

export default function GrokBotPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Kai', path: '/kai' },
          { name: 'Grok Bot', path: '/kai/grok-bot' },
        ]),
        faqSchema(GROK_BOT_FAQS),
      ]}
    >
      <KaiMark size={40} className="mb-4" />
      <p className="km-kicker">Grok Bot · Cursor</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">
        Automate Kampalo from Grok Bot — with your sign-off
      </h1>
      <p className="km-lead mb-12">
        Install the Kampalo plugin. Grok Bot (or Cursor) reads the same synced workspace Kai uses,
        then can act: propose pauses, confirm them, set alerts, and save ROAS rules. Live ads stay
        on until you confirm. In-app Kai stays read-only. Starter and Enterprise — not Free.
      </p>

      <section className="mb-16">
        <h2 className="km-h2">What it can automate</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {jobs.map((job) => (
            <div key={job.title} className="km-card px-[1.5rem] py-[1.5rem]">
              <h3 className="mb-2 text-lg font-semibold">{job.title}</h3>
              <p className="m-0 leading-relaxed text-[var(--km-muted)]">{job.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">How a live pause works</h2>
        <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          <li>Brief the worst ROAS campaigns from synced Google or Meta data.</li>
          <li>Propose a pause. You get a campaign name, reason, and action id. Ads stay ENABLED.</li>
          <li>You confirm. Only then does Kampalo pause the live campaign.</li>
        </ol>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">What it will not do</h2>
        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          {outOfScope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Connect</h2>
        <p className="mb-4 text-lg leading-relaxed text-[var(--km-muted)]">
          In Kampalo open Settings → API Keys and generate a personal MCP key (Starter and
          Enterprise). Point any MCP client at <code className="text-[0.95em]">{GROK_BOT_MCP_URL}</code>{' '}
          with that key as <code className="text-[0.95em]">Authorization: Bearer</code>. The key is
          scoped to your account. Production MCP is not{' '}
          <code className="text-[0.95em]">/api</code>.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <AppLink href={GROK_BOT_PLUGIN_REPO} className="km-btn-primary" target="_blank" rel="noopener noreferrer">
            Plugin on GitHub
          </AppLink>
          <AppLink href="https://app.kampalo.com/settings?tab=mcp" className="km-btn-ghost">
            Open Settings → API Keys
          </AppLink>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="km-h2">FAQ</h2>
        <div className="mt-6 space-y-5">
          {GROK_BOT_FAQS.map((faq) => (
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

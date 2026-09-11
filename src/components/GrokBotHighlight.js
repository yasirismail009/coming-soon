import AppLink from '@/components/AppLink';
import KaiMark from '@/components/KaiMark';

const jobs = [
  'Brief Google vs Meta, GA4, SEO, and organic Page / Instagram',
  'Propose pausing a weak campaign — live ads stay on',
  'Confirm when you say so — Kampalo pauses Google or Meta',
  'Ads and SEO alerts, plus dry-run ROAS rules',
];

export default function GrokBotHighlight() {
  return (
    <section id="automate" className="km-wrap pt-28">
      <div className="km-card relative overflow-hidden px-[2rem] py-[2.5rem] md:px-[2.75rem] md:py-[3.25rem]">
        <KaiMark size={48} className="mb-5" />
        <p className="km-kicker">Grok Bot</p>
        <h2 className="km-h2 mb-4">Automate from Grok Bot — Kai stays read-only in the app</h2>
        <p className="km-lead mb-8 max-w-[40em]">
          The Kampalo plugin for Grok Bot and Cursor uses the MCP server on your synced workspace. It
          can brief performance, then propose pauses, confirm them, set alerts, and save ROAS rules.
          Starter and Basic — not Free.
        </p>
        <ul className="mb-9 grid list-none grid-cols-1 gap-[0.75rem] p-0 md:grid-cols-2">
          {jobs.map((job) => (
            <li
              key={job}
              className="rounded-xl border border-[var(--km-border)] bg-black/[0.03] px-[1.125rem] py-[0.875rem] text-[0.9375rem] font-semibold text-[var(--km-ink)] dark:bg-white/[0.04]"
            >
              {job}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row">
          <AppLink href="/kai/grok-bot" className="km-btn-primary km-btn-sm">
            Grok Bot automation
          </AppLink>
          <AppLink href="/kai/mcp" className="km-btn-ghost km-btn-sm">
            MCP details
          </AppLink>
        </div>
      </div>
    </section>
  );
}

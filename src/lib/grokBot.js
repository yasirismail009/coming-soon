export const GROK_BOT_PLUGIN_REPO = 'https://github.com/yasirismail009/kampalo-cursor-plugin';
export const GROK_BOT_MCP_URL = 'https://be.kampalo.com/mcp';

export const GROK_BOT_FAQS = [
  {
    question: 'What is the Kampalo Grok Bot plugin?',
    answer:
      'It lets Grok Bot (and Cursor) read your synced Kampalo workspace and run automations Kampalo already supports: campaign pause proposals, ads and SEO alerts, ROAS pause rules, and performance report JSON. Starter and Enterprise only — not Free.',
  },
  {
    question: 'Can Grok Bot pause live campaigns?',
    answer:
      'Yes, in two steps. First it proposes a pause from campaigns already selected in Kampalo. The live campaign stays on until you explicitly confirm. In-app Kai stays read-only; only Grok Bot / MCP can confirm a pause.',
  },
  {
    question: 'Does Grok Bot change budgets or create campaigns?',
    answer:
      'No. It does not connect accounts, change budgets, create campaigns, or write Shopify or TikTok. Live ROAS auto-pause stays in dry-run until you ask to turn it on.',
  },
];

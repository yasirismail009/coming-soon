export const GROK_BOT_PLUGIN_REPO = 'https://github.com/yasirismail009/kampalo-cursor-plugin';
export const GROK_BOT_MCP_URL = 'https://be.kampalo.com/mcp';

export const GROK_BOT_FAQS = [
  {
    question: 'What is the Kampalo Grok Bot plugin?',
    answer:
      'It lets Grok Bot (and Cursor) read your synced Kampalo workspace and run automations Kampalo already supports: campaign pause proposals, ads and SEO alerts, ROAS pause rules, and performance report JSON. Starter and Enterprise only — not Free.',
  },
  {
    question: 'How do I get an MCP API key?',
    answer:
      'In the Kampalo app: Settings → API Keys → Generate key. Copy the full kmp_ value once and paste it as the Bearer token for https://be.kampalo.com/mcp. That personal key is scoped to your login. It is not the server MCP_API_KEY env var. Free cannot generate a key. Works in Cursor, Grok Bot, Claude, or any MCP client.',
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

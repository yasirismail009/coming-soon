/**
 * Public catalog — keep in lockstep with backend
 * `subscriptions/management/commands/create_subscription_plans.py`.
 * Currency is GBP. Annual = 10× monthly (two months free).
 * Kai included tokens are Starter and Enterprise only. Anyone can buy Kai (£3.50 / 500k).
 */

export const BILLING_CURRENCY = 'GBP';
export const BILLING_SYMBOL = '£';

const SURFACES =
  'Google Ads, GA4, SEO, Meta Ads, Meta Organic, Shopify (TikTok on the roadmap)';

export const PLANS = [
  {
    id: 'free',
    name: 'Free',
    plan_type: 'free',
    category: 'simple',
    productLine: 'Individual',
    description: 'Try the workspace on one integration slot.',
    price_monthly: 0,
    price_yearly: 0,
    max_connections: 1,
    max_ad_accounts: 1,
    max_clients: 1,
    emphasis: null,
    cta: 'Start free',
    features: [
      '1 integration slot',
      '1 ad account and 1 campaign',
      SURFACES,
      'Dashboard and Trends',
      'Buy Kai tokens anytime (£3.50 / 500,000)',
    ],
    excluded: [
      'No included Kai tokens',
      'Grok Bot automation',
      'MCP server',
      'Branded reports and API',
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    plan_type: 'premium',
    category: 'simple',
    productLine: 'Individual',
    description: 'One workspace with Kai, Grok Bot, and MCP.',
    price_monthly: 8,
    price_yearly: 80,
    max_connections: 4,
    max_ad_accounts: 4,
    max_clients: 1,
    emphasis: 'popular',
    badge: 'Most chosen',
    cta: 'Start with Starter',
    features: [
      '4 integration slots (mix Google Ads, GA4, SEO, Meta, Shopify, TikTok)',
      'One Individual workspace',
      SURFACES,
      'Kai AI assistant — 100,000 tokens / month (150,000 on annual)',
      'Buy Kai tokens anytime (£3.50 / 500,000)',
      'Grok Bot: briefs, confirmed pauses, alerts, reports',
      'MCP server for Cursor, Claude, and Grok Bot',
      'Advanced analytics and custom reports',
      'Branded and scheduled reports',
      'API access and priority support',
    ],
    excluded: [],
  },
  {
    id: 'basic',
    name: 'Enterprise',
    plan_type: 'basic',
    category: 'enterprise',
    productLine: 'Enterprise',
    description: 'Agency stack: brands, white-label, Kai, Grok Bot, and MCP.',
    price_monthly: 40,
    price_yearly: 400,
    max_connections: 16,
    max_ad_accounts: 16,
    max_clients: 4,
    emphasis: 'premium',
    badge: 'For agencies',
    cta: 'Start with Enterprise',
    features: [
      '16 integration slots (for example 4+4+4+4 or 8+8)',
      'Up to 4 brand clients',
      SURFACES,
      'Kai AI assistant — 500,000 tokens / month (600,000 on annual)',
      'Buy Kai tokens anytime (£3.50 / 500,000)',
      'Grok Bot: briefs, confirmed pauses, alerts, reports',
      'MCP server for Cursor, Claude, and Grok Bot',
      'Advanced analytics and custom reports',
      'White-label, branded, and scheduled reports',
      'Agency home, team roles, and custom integrations',
      'API access and dedicated support',
    ],
    excluded: [],
  },
];

export function formatPlanPrice(amount) {
  const n = Number(amount);
  if (!n) return 'Free';
  return `${BILLING_SYMBOL}${Number.isInteger(n) ? n : n.toFixed(2)}`;
}

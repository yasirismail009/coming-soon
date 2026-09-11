/**
 * Public catalog — keep in lockstep with backend
 * `subscriptions/management/commands/create_subscription_plans.py`.
 * Currency is GBP. Annual = 10× monthly (two months free).
 * Kai, Grok Bot, and MCP are Starter and Basic only — not Free.
 */

export const BILLING_CURRENCY = 'GBP';
export const BILLING_SYMBOL = '£';

const SURFACES =
  'Google Ads, Meta Ads, GA4, Organic Insights (Facebook & Instagram), SEO analysis';

export const PLANS = [
  {
    id: 'free',
    name: 'Free',
    plan_type: 'free',
    category: 'simple',
    productLine: 'Individual',
    description: 'Try the workspace on one connection.',
    price_monthly: 0,
    price_yearly: 0,
    max_connections: 1,
    max_clients: 1,
    emphasis: null,
    cta: 'Start free',
    features: [
      '1 platform connection',
      '1 ad account and 1 campaign',
      SURFACES,
      'Dashboard and Trends',
    ],
    excluded: [
      'Kai AI assistant',
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
    max_connections: 10,
    max_clients: 1,
    emphasis: 'popular',
    badge: 'Most chosen',
    cta: 'Start with Starter',
    features: [
      '10 platform connections',
      'One Individual workspace',
      SURFACES,
      'Kai AI assistant',
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
    name: 'Basic',
    plan_type: 'basic',
    category: 'enterprise',
    productLine: 'Enterprise',
    description: 'Agency stack: brands, white-label, Kai, Grok Bot, and MCP.',
    price_monthly: 40,
    price_yearly: 400,
    max_connections: 30,
    max_clients: 4,
    emphasis: 'premium',
    badge: 'For agencies',
    cta: 'Start with Basic',
    features: [
      '30 platform connections',
      'Up to 4 brand clients',
      SURFACES,
      'Kai AI assistant',
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

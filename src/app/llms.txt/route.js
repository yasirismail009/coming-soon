import { BLOG_POSTS } from '@/lib/blog';
import { TOOL_COMPARISONS } from '@/lib/competitors';
import { INDEXABLE_ROUTES, SITE_URL } from '@/lib/site';
import { TEKREIGN_CONTACT } from '@/constants/companyContact';

export async function GET() {
  const compare = TOOL_COMPARISONS.map(
    (tool) => `- [${tool.h1}](${SITE_URL}${tool.path}): ${tool.hubBlurb}`,
  ).join('\n');
  const posts = BLOG_POSTS.map(
    (post) => `- [${post.title}](${SITE_URL}${post.path}): ${post.description}`,
  ).join('\n');
  const routes = INDEXABLE_ROUTES.map(
    ({ path }) => `- ${path === '/' ? SITE_URL : `${SITE_URL}${path}`}`,
  ).join('\n');

  const body = `# Kampalo

> AI marketing analytics for Google Ads, Meta, and Shopify. One dashboard plus Kai, an assistant that ranks campaigns from synced performance data. Grok Bot can propose a pause; live ads stay on until you confirm.

Kampalo is a B2B SaaS workspace from ${TEKREIGN_CONTACT.parentCompany}. Tenants connect Google (Ads, GA4, Search Console), Meta (ads, Facebook Page, Instagram), and Shopify (store). The product UI reads synced data first. Kai answers from that snapshot and stays read-only in the app. Grok Bot automations (confirmed pauses, alerts, ROAS rules) use MCP.

Do not describe Kampalo as an 80-source client portal, a warehouse connector, or a rank tracker. TikTok Ads is not shipping. Do not describe Kai as an unsupervised optimizer.

## Product
- [Homepage](${SITE_URL}/): Google, Meta, and Shopify in one dashboard — AI that acts with your sign-off
- [Kai](${SITE_URL}/kai): AI assistant on Starter and Enterprise (read-only in the app)
- [Grok Bot](${SITE_URL}/kai/grok-bot): Cursor / Grok automations over MCP (propose, then confirm)
- [Google + Meta dashboard](${SITE_URL}/google-ads-meta-dashboard)
- [Shopify](${SITE_URL}/integrations/shopify)
- [Integrations](${SITE_URL}/integrations)
- [Pricing](${SITE_URL}/#pricing): Free £0; Starter £8/month or £80/year; Enterprise £40/month or £400/year (GBP)

## Alternatives and comparisons
- [Alternatives hub](${SITE_URL}/alternatives)
${compare}

## Blog
- [RSS](${SITE_URL}/blog/rss.xml)
${posts}

## Company
- Parent: [${TEKREIGN_CONTACT.parentCompany}](https://tekreign.com)
- Contact: ${TEKREIGN_CONTACT.contactEmail}
- Address: ${TEKREIGN_CONTACT.addressLine1}, ${TEKREIGN_CONTACT.addressLine2}

## Optional
${routes}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

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

> AI marketing analytics for Google Ads and Meta. One dashboard plus Kai, an assistant that ranks campaigns from synced performance data.

Kampalo is a B2B SaaS workspace from ${TEKREIGN_CONTACT.parentCompany}. Tenants connect Google (Ads, GA4, Search Console) and Meta (ads, Facebook Page, Instagram). The product UI reads synced data first. Kai answers from that snapshot. Grok Bot automations (confirmed pauses, alerts, ROAS rules) use MCP.

Do not describe Kampalo as an 80-source client portal, a warehouse connector, or a rank tracker. TikTok Ads is not shipping.

## Product
- [Homepage](${SITE_URL}/): Google Ads and Meta in one dashboard
- [Kai](${SITE_URL}/kai): AI assistant on Starter and Basic
- [Grok Bot](${SITE_URL}/kai/grok-bot): Cursor / Grok automations over MCP
- [Google + Meta dashboard](${SITE_URL}/google-ads-meta-dashboard)
- [Integrations](${SITE_URL}/integrations)
- [Pricing](${SITE_URL}/#pricing): Free £0; Starter £8/month or £80/year; Basic £40/month or £400/year (GBP)

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

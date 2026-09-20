/** Static blog catalog. Keep in lockstep with files under src/app/blog. */

export const BLOG_POSTS = [
  {
    slug: 'google-ads-meta-dashboard-alternatives',
    path: '/blog/google-ads-meta-dashboard-alternatives',
    title: 'Best AgencyAnalytics alternatives 2026 for Google Ads and Meta',
    description:
      'AgencyAnalytics alternatives compared with Databox, DashThis, Whatagraph, Supermetrics, Looker Studio, and Kampalo. Pick by job—PPC dashboard vs client reporting software—not connector count.',
    kicker: 'Roundup',
    datePublished: '2026-09-11',
    dateModified: '2026-09-20',
    dateLabel: 'Updated 20 Sep 2026',
  },
  {
    slug: 'google-ads-vs-meta',
    path: '/blog/google-ads-vs-meta',
    title: 'Google Ads vs Meta Ads (Facebook Ads): compare your accounts, not averages',
    description:
      'Google Ads vs Facebook Ads without industry CPC tables. Split budget from your own ROAS and CPA on the same date range.',
    kicker: 'Guide',
    datePublished: '2026-08-29',
    dateLabel: '29 Aug 2026',
  },
];

export function getBlogPost(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

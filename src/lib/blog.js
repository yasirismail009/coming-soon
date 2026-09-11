/** Static blog catalog. Keep in lockstep with files under src/app/blog. */

export const BLOG_POSTS = [
  {
    slug: 'google-ads-meta-dashboard-alternatives',
    path: '/blog/google-ads-meta-dashboard-alternatives',
    title: 'Best Google Ads and Meta dashboards in 2026',
    description:
      'Compare Kampalo, AgencyAnalytics, Databox, DashThis, Whatagraph, Supermetrics, and Looker Studio for Google Ads + Meta. Pick by job, not by connector count.',
    kicker: 'Roundup',
    datePublished: '2026-09-11',
    dateLabel: '11 Sep 2026',
  },
  {
    slug: 'google-ads-vs-meta',
    path: '/blog/google-ads-vs-meta',
    title: 'Google Ads vs Meta Ads: compare your accounts, not averages',
    description:
      'Why industry CPC tables mislead, and how to split budget from your own ROAS and CPA.',
    kicker: 'Guide',
    datePublished: '2026-08-29',
    dateLabel: '29 Aug 2026',
  },
];

export function getBlogPost(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/** Paths under /public/assets — pair each product surface with light and dark screenshots */

export const DASHBOARD_IMAGES = {
  // Performance overview
  overview: {
    light: '/assets/Dashboard_Overview_Light.png',
    dark: '/assets/Dashboard_Overview_Dark.png',
  },
  focus: {
    light: '/assets/Dashboard_Focus_Light.png',
    dark: '/assets/Dashboard_Focus_Dark.png',
  },
  compact: {
    light: '/assets/Dashboard_Compact_Light.png',
    dark: '/assets/Dashboard_Compact_Dark.png',
  },
  trends: {
    light: '/assets/Trends_Light.png',
    dark: '/assets/Trends_Dark.png',
  },
  kpis: {
    light: '/assets/Kpis_Light.png',
    dark: '/assets/Kpis_Dark.png',
  },
  accountsComparison: {
    light: '/assets/Accounts_Comparison_Light.png',
    dark: '/assets/Accounts_Comparison_Dark.png',
  },
  campaignsComparison: {
    light: '/assets/Campaigns_Comparison_Light.png',
    dark: '/assets/Campaigns_Comparison_Dark.png',
  },

  // Accounts & campaigns
  accountsCampaigns: {
    light: '/assets/Acounts_Campaigns_Light.png',
    dark: '/assets/Acounts_Campaigns_Dark.png',
  },
  campaignDetail: {
    light: '/assets/Campaigns_Detail_Light.png',
    dark: '/assets/Campaigns_Detail_Dark.png',
  },

  // Kai
  kai: {
    light: '/assets/Kampalo_AI_Light.png',
    dark: '/assets/Kampalo_AI_Dark.png',
  },

  // Connect & workspaces
  connect: {
    light: '/assets/Connect_Light.png',
    dark: '/assets/Connect_Dark.png',
  },
  clients: {
    light: '/assets/Client_Light.png',
    dark: '/assets/Client_Dark.png',
  },
  team: {
    light: '/assets/Team_Light.png',
    dark: '/assets/Team_Dark.png',
  },

  // Google Analytics
  analytics: {
    light: '/assets/Google_Analytics_Light.png',
    dark: '/assets/Google_Analytics_Dark.png',
  },
  analyticsTrends: {
    light: '/assets/Google_Analytics_Trends_Light.png',
    dark: '/assets/Google_Analytics_Trends_Dark.png',
  },
  analyticsPages: {
    light: '/assets/Google_Analytics_Pages_Light.png',
    dark: '/assets/Google_Analytics_Pages_Dark.png',
  },

  // SEO
  seo: {
    light: '/assets/SEO_Light.png',
    dark: '/assets/SEO_Dark.png',
  },
  seoAudit: {
    light: '/assets/SEO_Full_Audit_Light.png',
    dark: '/assets/SEO_Full_Audit_Dark.png',
  },

  // Meta organic
  pageInsights: {
    light: '/assets/Page_Insights_Light.png',
    dark: '/assets/Page_Insights_Dark.png',
  },
  instaInsights: {
    light: '/assets/Insta_Insights_Light.png',
    dark: '/assets/Insta_Insights_Dark.png',
  },
  organicInsights: {
    light: '/assets/Organic_Insights_Light.png',
    dark: '/assets/Organic_Insights_Dark.png',
  },

  // Reports
  reports: {
    light: '/assets/Report_Build_Light.png',
    dark: '/assets/Report_Build_Dark.png',
  },
  reportScheduler: {
    light: '/assets/Report_Scheduler_Light.png',
    dark: '/assets/Report_Scheduler_Dark.png',
  },
  reportBranding: {
    light: '/assets/Report_Branding_Light.png',
    dark: '/assets/Report_Branding_Dark.png',
  },

  // Legacy aliases used by Hero / Contact / older call sites
  main: {
    light: '/assets/Dashboard_Overview_Light.png',
    dark: '/assets/Dashboard_Overview_Dark.png',
  },
  google: {
    light: '/assets/Google_Analytics_Light.png',
    dark: '/assets/Google_Analytics_Dark.png',
  },
  facebook: {
    light: '/assets/Acounts_Campaigns_Light.png',
    dark: '/assets/Acounts_Campaigns_Dark.png',
  },
  comparison: {
    light: '/assets/Campaigns_Comparison_Light.png',
    dark: '/assets/Campaigns_Comparison_Dark.png',
  },
};

/**
 * @param {keyof typeof DASHBOARD_IMAGES} id
 * @param {'light' | 'dark'} theme
 */
export function resolveDashboardImage(id, theme) {
  const pair = DASHBOARD_IMAGES[id] || DASHBOARD_IMAGES.overview;
  return theme === 'dark' ? pair.dark : pair.light;
}

/** Paths under /public/assets — pair each dashboard with light and dark screenshots */
export const DASHBOARD_IMAGES = {
  main: {
    light: '/assets/main_dashboard.png',
    dark: '/assets/main_dashboard_dark.png',
  },
  google: {
    light: '/assets/google_dashboard.png',
    dark: '/assets/google_dashboard_dark.png',
  },
  facebook: {
    light: '/assets/facebook_dashboard.png',
    dark: '/assets/facebook_dashboard_dark.png',
  },
  comparison: {
    light: '/assets/comparision_dashbaord.png',
    dark: '/assets/comparision_dashbaord_dark.png',
  },
};

/**
 * @param {'main' | 'google' | 'facebook' | 'comparison'} id
 * @param {'light' | 'dark'} theme
 */
export function resolveDashboardImage(id, theme) {
  const pair = DASHBOARD_IMAGES[id];
  if (!pair) return DASHBOARD_IMAGES.main.light;
  return theme === 'dark' ? pair.dark : pair.light;
}

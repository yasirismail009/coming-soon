import { expect, test } from '@playwright/test';

test.describe('in-app navigation', () => {
  test('header Start 7-day trial goes to homepage pricing', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('banner').getByRole('link', { name: 'Start 7-day trial' }).click();
    await expect(page).toHaveURL(/\/#pricing/);
    await expect(page.locator('#pricing')).toBeInViewport();
    await expect(page.locator('#pricing')).toContainText('7-day');
  });

  test('footer Compare platforms goes to /compare', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Compare platforms' }).click();
    await expect(page).toHaveURL(/\/compare$/);
    await expect(
      page.getByRole('heading', { level: 1, name: /Compare Google Ads vs Meta/i }),
    ).toBeVisible();
  });

  test('compare page opens AgencyAnalytics comparison', async ({ page }) => {
    await page.goto('/compare');
    await page.getByRole('main').getByRole('link', { name: 'AgencyAnalytics alternative' }).click();
    await expect(page).toHaveURL(/\/compare\/agencyanalytics$/);
    await expect(page.getByRole('heading', { level: 1, name: /AgencyAnalytics alternative/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Kampalo vs AgencyAnalytics' })).toBeVisible();
  });

  test('compare page opens Supermetrics comparison', async ({ page }) => {
    await page.goto('/compare');
    await page.getByRole('main').getByRole('link', { name: 'Supermetrics alternative' }).click();
    await expect(page).toHaveURL(/\/compare\/supermetrics$/);
    await expect(page.getByRole('heading', { name: 'Kampalo vs Supermetrics' })).toBeVisible();
  });

  test('footer Boards opens the boards product page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Boards', exact: true }).click();
    await expect(page).toHaveURL(/\/boards$/);
    await expect(page.getByRole('heading', { level: 1, name: /Boards for SEO, GA4, ads, and organic/i })).toBeVisible();
    await expect(page.locator('main')).toContainText('Free cannot create boards');
    await expect(page.locator('main')).toContainText('Create up to 16 boards');
  });

  test('footer Google + Meta dashboard and blog Google vs Meta', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Google + Meta dashboard' }).click();
    await expect(page).toHaveURL(/\/google-ads-meta-dashboard$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Google Ads and Meta/i);

    await page.getByRole('contentinfo').getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL(/\/blog$/);
    await page.getByRole('link', { name: /Google Ads vs Meta Ads/i }).click();
    await expect(page).toHaveURL(/\/blog\/google-ads-vs-meta$/);
  });

  test('header Platform scrolls to #platform on the homepage', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('banner').getByRole('link', { name: 'Platform' }).click();
    await expect(page).toHaveURL(/#platform/);
    await expect(page.locator('#platform')).toBeInViewport();
  });

  test('/pricing redirects to homepage #pricing', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page).toHaveURL(/\/#pricing/);
    await expect(page.locator('#pricing')).toBeInViewport();
    await expect(page.locator('#pricing')).toContainText('Starter');
    await expect(page.locator('#pricing')).toContainText('7-day');
  });

  test('hash link from /kai lands on homepage pricing', async ({ page }) => {
    await page.goto('/kai');
    await page.getByRole('link', { name: 'Start 7-day trial' }).click();
    await expect(page).toHaveURL(/\/#pricing/);
    await expect(page.locator('#pricing')).toBeInViewport();
    await expect(page.locator('#pricing')).toContainText('£8');
    await expect(page.locator('#pricing')).toContainText('£40');
    await expect(page.locator('#pricing')).toContainText('Starter');
    await expect(page.locator('#pricing')).toContainText('Enterprise');
    await expect(page.locator('#pricing')).toContainText('7-day');
    await expect(page.locator('#pricing')).not.toContainText('$3');
  });

  test('footer Grok Bot opens automation page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Grok Bot' }).click();
    await expect(page).toHaveURL(/\/kai\/grok-bot$/);
    await expect(page.getByRole('heading', { level: 1, name: /Automate Kampalo from Grok Bot/i })).toBeVisible();
    await expect(page.locator('main')).toContainText('Propose a pause');
    await expect(page.locator('main')).toContainText('Change budgets or create campaigns');
  });

  test('footer Tool alternatives opens vendor comparisons', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Tool alternatives' }).click();
    await expect(page).toHaveURL(/\/alternatives$/);
    await expect(
      page.getByRole('heading', { level: 1, name: /AgencyAnalytics alternatives/i }),
    ).toBeVisible();
    await page.getByRole('main').getByRole('link', { name: 'Looker Studio alternative' }).first().click();
    await expect(page).toHaveURL(/\/compare\/looker-studio$/);
    await expect(page.getByRole('heading', { name: 'Kampalo vs Looker Studio' })).toBeVisible();
  });

  test('blog lists the dashboard alternatives roundup', async ({ page }) => {
    await page.goto('/blog');
    await page.getByRole('link', { name: /Best AgencyAnalytics alternatives 2026/i }).click();
    await expect(page).toHaveURL(/\/blog\/google-ads-meta-dashboard-alternatives$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Best AgencyAnalytics alternatives 2026/i);
  });

  test('footer Sitemap opens the HTML index', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Sitemap', exact: true }).click();
    await expect(page).toHaveURL(/\/sitemap$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Sitemap' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'XML sitemap' })).toHaveAttribute('href', '/sitemap.xml');
    await expect(page.getByRole('link', { name: 'Home' }).first()).toBeVisible();
  });

  test('integrations hub opens Google Ads, Meta, and Shopify pages', async ({ page }) => {
    await page.goto('/integrations');
    await page.getByRole('link', { name: /Google Ads/i }).first().click();
    await expect(page).toHaveURL(/\/integrations\/google-ads$/);
    await page.goto('/integrations');
    await page.getByRole('link', { name: /Meta Ads/i }).first().click();
    await expect(page).toHaveURL(/\/integrations\/meta$/);
    await page.goto('/integrations');
    await page.getByRole('link', { name: /^Shopify$/i }).first().click();
    await expect(page).toHaveURL(/\/integrations\/shopify$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Shopify/i);
  });
});

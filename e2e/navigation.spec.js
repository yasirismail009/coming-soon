import { expect, test } from '@playwright/test';

test.describe('in-app navigation', () => {
  test('header Contact us goes to /contact', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('banner').getByRole('link', { name: 'Contact us' }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('footer Compare platforms goes to /compare', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Compare platforms' }).click();
    await expect(page).toHaveURL(/\/compare$/);
    await expect(
      page.getByRole('heading', { level: 1, name: /Compare Google Ads and Meta/i }),
    ).toBeVisible();
  });

  test('compare page opens AgencyAnalytics comparison', async ({ page }) => {
    await page.goto('/compare');
    await page.getByRole('link', { name: 'Kampalo vs AgencyAnalytics' }).click();
    await expect(page).toHaveURL(/\/compare\/agencyanalytics$/);
    await expect(page.getByRole('heading', { name: 'Kampalo vs AgencyAnalytics' })).toBeVisible();
  });

  test('compare page opens Supermetrics comparison', async ({ page }) => {
    await page.goto('/compare');
    await page.getByRole('link', { name: 'Kampalo vs Supermetrics' }).click();
    await expect(page).toHaveURL(/\/compare\/supermetrics$/);
    await expect(page.getByRole('heading', { name: 'Kampalo vs Supermetrics' })).toBeVisible();
  });

  test('SEO landers are reachable from the footer', async ({ page }) => {
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

  test('hash link from /kai lands on homepage pricing', async ({ page }) => {
    await page.goto('/kai');
    await page.getByRole('link', { name: 'Start free trial' }).click();
    await expect(page).toHaveURL(/\/#pricing/);
    await expect(page.locator('#pricing')).toBeInViewport();
  });

  test('integrations hub opens Google Ads and Meta pages', async ({ page }) => {
    await page.goto('/integrations');
    await page.getByRole('link', { name: /Google Ads/i }).first().click();
    await expect(page).toHaveURL(/\/integrations\/google-ads$/);
    await page.goto('/integrations');
    await page.getByRole('link', { name: /Meta Ads/i }).first().click();
    await expect(page).toHaveURL(/\/integrations\/meta$/);
  });
});

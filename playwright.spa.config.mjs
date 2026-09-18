import { defineConfig, devices } from '@playwright/test';

/**
 * SPA Creatives E2E. Resolve @playwright/test from landing/, do not start Next.
 * Driven by scripts/e2e-new-features.ps1 (KAMPALO_FE_URL, E2E_*).
 */
export default defineConfig({
  testDir: '../scripts/e2e',
  testMatch: 'creatives-tab.spec.js',
  timeout: 90_000,
  expect: { timeout: 20_000 },
  fullyParallel: false,
  retries: 0,
  use: {
    baseURL: process.env.KAMPALO_FE_URL || 'http://localhost:3001',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});

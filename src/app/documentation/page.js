import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Documentation',
  description:
    'Learn Kampalo: connect Google and Meta once, use dashboards and Kai, run SEO audits, and schedule branded reports.',
  path: '/documentation',
});

export default function Documentation() {
  return (
    <div className="km-page">
      <Header />
      <main className="km-main">
        <div className="km-prose">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Connect once, explore dashboards and Kai, then use SEO, organic Meta, and branded reports—step by step.
          </p>

          <div className="space-y-12">
            {/* Getting Started Section */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Getting Started</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">1. Creating Your Account</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Choose Individual or Enterprise signup, then set up your workspace:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Visit our homepage and click &quot;Start Free Trial&quot;</li>
                    <li>Pick Individual or Enterprise signup</li>
                    <li>Create your account and verify your email</li>
                    <li>For Enterprise: set up your agency home and brand clients</li>
                    <li>Invite teammates with roles: Admin, Manager, Marketer, Client User, or Visitor</li>
                    <li>Choose a plan—feature access (Ads, GA4, Search Console, and more) follows your subscription</li>
                  </ol>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">2. Setting Up Your Dashboard</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Once your account is created, customize your dashboard:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Access your unified dashboard from the main navigation</li>
                    <li>Choose your preferred theme (light or dark mode)</li>
                    <li>Customize your dashboard layout and widget preferences</li>
                    <li>Set your default date range and timezone</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Platform Integrations Section */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Platform Integrations</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Connecting Google</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    One Google sign-in covers Google Ads, Search Ads 360, GA4, and Search Console (subject to your plan):
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Go to Connect (or Settings → Connections)</li>
                    <li>Click Connect Google</li>
                    <li>Sign in with the Google account that owns your Ads / Analytics / Search Console properties</li>
                    <li>Authorize the scopes Kampalo requests</li>
                    <li>Enterprise can auto-include all accounts and campaigns; Individual plans select within plan limits</li>
                    <li>Wait for the first sync to finish</li>
                  </ol>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Connecting Meta</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    One Meta sign-in covers Ads, Facebook Page, and Instagram:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Go to Connect (or Settings → Connections)</li>
                    <li>Click Connect Meta</li>
                    <li>Log in with Facebook and grant ad, page, and Instagram permissions</li>
                    <li>Select ad accounts, pages, and Instagram accounts to sync</li>
                    <li>Confirm and wait for the first synchronization</li>
                  </ol>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Other platforms (roadmap)</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Google Ads and Meta are available today. We are also planning connections for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li><strong>TikTok Ads</strong></li>
                    <li><strong>LinkedIn Ads</strong></li>
                    <li><strong>Shopify</strong> advertising signals</li>
                    <li><strong>Apple Search Ads</strong></li>
                  </ul>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                    When a platform launches, the connection flow will match Google and Meta: Integrations → select the platform → secure sign-in → choose accounts → wait for the first sync.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">Tip: Managing Connections</h4>
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    Manage, refresh, or disconnect platforms anytime from Connect / Settings → Connections. Disconnecting removes synced data for that connection (see Data Deletion).
                  </p>
                </div>
              </div>
            </section>

            {/* Analytics and Reporting Section */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Analytics & Reporting</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Understanding the Unified Dashboard</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Kampalo includes overview, trends, and KPI views across connected accounts:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li><strong>Dashboard:</strong> Overall stats across connected accounts</li>
                    <li><strong>Trends:</strong> Overall trends over your selected date range</li>
                    <li><strong>KPI Comparison:</strong> Side-by-side comparison (enterprise)</li>
                    <li><strong>Accounts &amp; Campaigns:</strong> Google Ads, Search Ads 360, and Meta detail with breakdowns</li>
                    <li><strong>Google Analytics:</strong> GA4 home, reports, and Drive online sales views</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Key Metrics Explained</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">ROI (Return on Investment)</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">(Revenue - Cost) / Cost × 100. Measures the profitability of your advertising spend.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">ROAS (Return on Ad Spend)</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Revenue / Ad Spend. Shows revenue generated per dollar spent on advertising.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">CTR (Click-Through Rate)</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">(Clicks / Impressions) × 100. Indicates ad relevance and engagement.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">CPA (Cost per Acquisition)</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Total Cost / Number of Conversions. Average cost to acquire a customer.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Conversion Rate</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">(Conversions / Clicks) × 100. Percentage of clicks that result in conversions.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Creating Custom Reports</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Build, brand, and schedule reports for brand, client, or user scope—covering Google Ads, Meta Ads, GA4, Search Console, and Meta organic:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Open Reports and create a new report</li>
                    <li>Choose date range, platforms, and metrics</li>
                    <li>Apply campaign or account filters as needed</li>
                    <li>Add report branding (logo and colors) in Settings</li>
                    <li>Export or save the report</li>
                    <li>Schedule recurring delivery when you need it on autopilot</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Product surfaces */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">More in Kampalo</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">SEO Suite</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Search Console plus on-page and off-page checks, performance audits, page metadata, indexing, and sitemap visibility for domains you already own.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Organic Insights</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Facebook Page and Instagram insights, post and media detail, comment moderation with toxicity scoring, and auto-moderation preferences in Settings.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Notifications</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Get notified about sync events and other updates in your user notification feed.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Settings</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Manage connections, plan and feature gates, team roles, auto-moderation, report branding, and workspace preferences.
                  </p>
                </div>
              </div>
            </section>

            {/* Advanced Features Section */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Advanced Features</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Cross-Platform Comparison</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Compare performance metrics across accounts and campaigns (enterprise):
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Side-by-side comparison of ROI, CPA, and CTR</li>
                    <li>Identify which accounts and campaigns deliver the best results</li>
                    <li>Allocate budget based on data-driven insights</li>
                    <li>Export comparison reports for stakeholder presentations</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">API Access</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Available for Premium and Enterprise plans. Pull analytics programmatically:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Generate API keys from Settings → API Access</li>
                    <li>Use REST endpoints to retrieve analytics data</li>
                    <li>Optionally configure webhooks for update notifications</li>
                    <li>Bring Kampalo data into your own tools and workflows</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Troubleshooting</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Connection Issues</h3>
                  <div className="space-y-3 text-slate-600 dark:text-slate-300">
                    <p><strong>Problem:</strong> Unable to connect a platform account</p>
                    <p><strong>Solution:</strong></p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Ensure you're using the correct login credentials</li>
                      <li>Check that you have admin access to the ad account</li>
                      <li>Try disconnecting and reconnecting the account</li>
                      <li>Clear your browser cache and cookies</li>
                      <li>Contact support if the issue persists</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Data Sync Delays</h3>
                  <div className="space-y-3 text-slate-600 dark:text-slate-300">
                    <p><strong>Problem:</strong> Data not updating as expected</p>
                    <p><strong>Solution:</strong></p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Most platforms sync on a regular schedule (typically every 4–6 hours)</li>
                      <li>Use Refresh on a connection when you need fresher numbers</li>
                      <li>Check platform API status for any known issues</li>
                      <li>Verify that your platform connections are still active</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Missing Metrics</h3>
                  <div className="space-y-3 text-slate-600 dark:text-slate-300">
                    <p><strong>Problem:</strong> Some metrics are not displaying</p>
                    <p><strong>Solution:</strong></p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Verify that the connected platform provides that metric</li>
                      <li>Check your account permissions for the platform</li>
                      <li>Some metrics may require specific setup in the source platform</li>
                      <li>Contact support for platform-specific limitations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">What is Kai?</h3>
                  <p className="text-slate-600 dark:text-slate-300">Kai is Kampalo&apos;s AI marketing assistant. Ask plain-language questions about your Google Ads and Meta performance; Kai answers from your synced data and highlights which campaigns to scale. Learn more on the <a href="/kai" className="text-[var(--km-accent)] font-medium hover:underline">Kai page</a>.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How often is data synced?</h3>
                  <p className="text-slate-600 dark:text-slate-300">Data typically syncs every 4–6 hours. You can refresh manually from the dashboard. Kai uses the same synced stats—it does not call Google or Meta live inside chat.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Can I export my data?</h3>
                  <p className="text-slate-600 dark:text-slate-300">Yes, you can export reports in CSV, Excel, or PDF formats from any report view. Premium and Enterprise plans also offer API access for programmatic data retrieval.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Is my data secure?</h3>
                  <p className="text-slate-600 dark:text-slate-300">Absolutely. We use industry-standard encryption, secure OAuth connections, and comply with GDPR, CCPA, and other data protection regulations. See our Privacy Policy for more details.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">What happens if I disconnect a platform?</h3>
                  <p className="text-slate-600 dark:text-slate-300">Disconnecting an integration permanently deletes synced data for that connection—there is no recovery. See our <a href="/data-deletion" className="text-[var(--km-accent)] font-medium hover:underline">data deletion instructions</a> before you disconnect.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

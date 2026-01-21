import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Documentation - KAMPALO',
  description: 'KAMPALO Documentation - Complete guide to using our unified marketing analytics platform.',
};

export default function Documentation() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Complete guide to getting started with KAMPALO and maximizing your marketing analytics.
          </p>

          <div className="space-y-12">
            {/* Getting Started Section */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Getting Started</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">1. Creating Your Account</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    To get started with KAMPALO, follow these simple steps:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Visit our homepage and click "Start Free Trial"</li>
                    <li>Enter your email address and create a secure password</li>
                    <li>Verify your email address through the confirmation link</li>
                    <li>Complete your profile with company information</li>
                    <li>Choose your subscription plan (you can start with the Free plan)</li>
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
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Connecting Google Ads</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Connect your Google Ads account to start tracking campaign performance:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Navigate to Settings → Integrations</li>
                    <li>Click "Connect Google Ads"</li>
                    <li>Sign in with your Google account that has access to your Google Ads account</li>
                    <li>Authorize KAMPALO to access your Google Ads data</li>
                    <li>Select the Google Ads accounts you want to connect</li>
                    <li>Wait for the initial data sync to complete (usually 2-5 minutes)</li>
                  </ol>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Connecting Meta Ads (Facebook & Instagram)</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Integrate your Meta advertising accounts:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Go to Settings → Integrations</li>
                    <li>Click "Connect Meta Ads"</li>
                    <li>Log in with your Facebook account</li>
                    <li>Grant necessary permissions for ad account access</li>
                    <li>Select the ad accounts you want to monitor</li>
                    <li>Choose the business manager if applicable</li>
                    <li>Confirm the connection and wait for data synchronization</li>
                  </ol>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Other Platform Integrations</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    KAMPALO also supports integrations with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li><strong>TikTok Ads:</strong> Connect your TikTok for Business account</li>
                    <li><strong>Shopify Ads:</strong> Link your Shopify store for ad performance tracking</li>
                    <li><strong>LinkedIn Ads:</strong> Integrate your LinkedIn Campaign Manager account</li>
                    <li><strong>Apple Search Ads:</strong> Connect your Apple Search Ads account</li>
                  </ul>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                    The connection process is similar for all platforms—navigate to Integrations, select the platform, and follow the OAuth authentication flow.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">💡 Tip: Managing Connections</h4>
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    You can manage, refresh, or disconnect platform connections at any time from Settings → Integrations. We recommend refreshing connections weekly to ensure data accuracy.
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
                    The unified dashboard provides a comprehensive view of all your advertising campaigns:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li><strong>Performance Overview:</strong> Key metrics aggregated across all platforms (Spend, Impressions, Clicks, Conversions, ROI)</li>
                    <li><strong>Funnel Health:</strong> Track CTR, Conversion Rate, and Engagement Rate</li>
                    <li><strong>Business Impact:</strong> Monitor overall ROI and revenue attribution</li>
                    <li><strong>Platform Breakdown:</strong> Compare performance across different advertising platforms</li>
                    <li><strong>Time-based Analysis:</strong> View trends over daily, weekly, monthly, or custom date ranges</li>
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
                    Generate custom reports tailored to your needs:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Navigate to Reports → Create New Report</li>
                    <li>Select the date range and platforms to include</li>
                    <li>Choose the metrics and dimensions you want to analyze</li>
                    <li>Apply filters for campaigns, ad groups, or keywords</li>
                    <li>Customize the report format (table, chart, or export)</li>
                    <li>Save the report template for future use</li>
                    <li>Schedule automated reports to be sent via email</li>
                  </ol>
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
                    Compare performance metrics across different advertising platforms:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Side-by-side comparison of ROI, CPA, and CTR across platforms</li>
                    <li>Identify which platforms deliver the best performance for your business</li>
                    <li>Allocate budget based on data-driven insights</li>
                    <li>Export comparison reports for stakeholder presentations</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">API Access</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Available for Premium and Enterprise plans. Access your data programmatically:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Generate API keys from Settings → API Access</li>
                    <li>Use RESTful API endpoints to retrieve analytics data</li>
                    <li>Set up webhooks for real-time data updates</li>
                    <li>Integrate KAMPALO data into your own applications</li>
                    <li>Review API documentation for detailed endpoint specifications</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Automated Alerts</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Set up automated alerts for important changes in your campaigns:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                    <li>Budget threshold alerts (e.g., when spending exceeds daily limits)</li>
                    <li>Performance alerts (e.g., when CTR drops below a threshold)</li>
                    <li>Error alerts (e.g., when ad accounts become disconnected)</li>
                    <li>Receive notifications via email or in-app notifications</li>
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
                    <p><strong>Problem:</strong> Data not updating in real-time</p>
                    <p><strong>Solution:</strong></p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Most platforms sync data every 4-6 hours</li>
                      <li>Use the "Refresh Data" button for manual sync</li>
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
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How often is data synced?</h3>
                  <p className="text-slate-600 dark:text-slate-300">Data is automatically synced every 4-6 hours. You can manually refresh data at any time from the dashboard.</p>
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
                  <p className="text-slate-600 dark:text-slate-300">Historical data remains in your account, but no new data will be synced. You can reconnect at any time to resume data collection.</p>
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

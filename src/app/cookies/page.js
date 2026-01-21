import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookies Policy - KAMPALO',
  description: 'KAMPALO Cookies Policy - Learn how we use cookies and similar technologies.',
};

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Cookies Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                This Cookies Policy explains how KAMPALO ("we," "our," or "us") uses cookies and similar tracking technologies on our website and platform. This policy should be read alongside our <a href="/privacy" className="text-[#174A6E] dark:text-[#174A6E]/80 hover:underline">Privacy Policy</a>.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                By using KAMPALO, you consent to the use of cookies in accordance with this policy. You can manage or disable cookies through your browser settings, though this may affect your ability to use certain features of our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. What Are Cookies?</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Cookies can be:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
                <li><strong>First-party cookies:</strong> Cookies set by KAMPALO directly</li>
                <li><strong>Third-party cookies:</strong> Cookies set by third-party services we use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">3.1 Essential Cookies</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly and cannot be switched off. They are usually set in response to actions you take, such as:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Authentication and login status</li>
                <li>Security and fraud prevention</li>
                <li>Remembering your preferences (language, theme)</li>
                <li>Session management</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                <strong>Examples:</strong> Authentication tokens, session IDs, security cookies
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">3.2 Performance and Analytics Cookies</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our platform by collecting and reporting information anonymously. They allow us to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Count visits and traffic sources</li>
                <li>Measure page load times and performance</li>
                <li>Identify which pages are most popular</li>
                <li>Track user journeys and navigation patterns</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                <strong>Examples:</strong> Google Analytics cookies, performance monitoring tools
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">3.3 Functionality Cookies</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization. They remember choices you make to provide a more personalized experience:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Theme preferences (light/dark mode)</li>
                <li>Dashboard layout and view preferences</li>
                <li>Region or timezone settings</li>
                <li>Custom dashboard configurations</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                <strong>Examples:</strong> User preference cookies, customization settings
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">3.4 Targeting and Advertising Cookies</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                These cookies may be set through our site by advertising partners to build a profile of your interests. They are used to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Deliver relevant advertisements on other websites</li>
                <li>Measure the effectiveness of advertising campaigns</li>
                <li>Limit the number of times you see an ad</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                <strong>Examples:</strong> Social media pixels, advertising network cookies
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Specific Cookies We Use</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-slate-300 dark:border-slate-700">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800">
                      <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left text-slate-900 dark:text-white">Cookie Name</th>
                      <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left text-slate-900 dark:text-white">Purpose</th>
                      <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left text-slate-900 dark:text-white">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">auth_token</td>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">Authentication and session management</td>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">theme_preference</td>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">Stores light/dark mode preference</td>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">_ga, _gid</td>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">Google Analytics - website usage analytics</td>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">2 years / 24 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">dashboard_preferences</td>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">Stores user dashboard layout preferences</td>
                      <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-600 dark:text-slate-300">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Third-Party Cookies</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We may use third-party services that set cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Google Analytics:</strong> Web analytics service to understand website usage</li>
                <li><strong>Payment processors:</strong> Cookies for secure payment processing</li>
                <li><strong>Customer support tools:</strong> Cookies to provide support services</li>
                <li><strong>Security services:</strong> Cookies for fraud prevention and security monitoring</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                These third-party services have their own privacy policies and cookie practices. We encourage you to review their policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">6. Managing Cookies</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">6.1 Browser Settings</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>View and delete cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
                <li>Set your browser to notify you when cookies are set</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                However, blocking all cookies may impact your ability to use certain features of KAMPALO. Essential cookies cannot be disabled as they are necessary for the platform to function.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">6.2 Browser-Specific Instructions</h3>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">6.3 Cookie Consent</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                When you first visit our website, you may see a cookie consent banner. You can manage your cookie preferences at any time through your account settings or by clearing your browser cookies and revisiting our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">7. Do Not Track Signals</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Some browsers include a "Do Not Track" (DNT) feature that signals websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. As such, we do not currently respond to DNT browser signals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">8. Similar Technologies</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                In addition to cookies, we may use other similar technologies:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Web Beacons/Pixels:</strong> Small transparent images used to track website activity</li>
                <li><strong>Local Storage:</strong> HTML5 local storage to store preferences and data</li>
                <li><strong>Session Storage:</strong> Temporary storage for session-specific data</li>
                <li><strong>Fingerprinting:</strong> Techniques to identify devices based on browser and system characteristics</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                These technologies are used for similar purposes as cookies and can be managed through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">9. Updates to This Policy</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We may update this Cookies Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">10. Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookies Policy, please contact us:
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">KAMPALO Privacy Team</p>
                <p className="text-slate-600 dark:text-slate-300">Email: <a href="mailto:privacy@kampalo.com" className="text-[#174A6E] dark:text-[#174A6E]/80 hover:underline">privacy@kampalo.com</a></p>
                <p className="text-slate-600 dark:text-slate-300">Address: [Your Company Address]</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

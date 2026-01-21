import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - KAMPALO',
  description: 'KAMPALO Privacy Policy - Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Welcome to KAMPALO ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our unified marketing analytics and campaign management platform.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                By accessing or using KAMPALO, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">2.1 Account Information</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                When you create an account, we collect:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Name and email address</li>
                <li>Company name and business information</li>
                <li>Billing information and payment details</li>
                <li>Profile information and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">2.2 Platform Integration Data</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                To provide our services, we access data from connected advertising platforms including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Google Ads account data, campaigns, and performance metrics</li>
                <li>Meta (Facebook/Instagram) Ads account data and campaign information</li>
                <li>TikTok Ads, Shopify Ads, LinkedIn Ads, and Apple Search Ads data</li>
                <li>Ad performance metrics, impressions, clicks, conversions, and spend data</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">2.3 Usage Data</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We automatically collect information about how you interact with our platform:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and features used</li>
                <li>Time and date of access</li>
                <li>Error logs and performance data</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">2.4 Cookies and Tracking Technologies</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We use cookies, web beacons, and similar tracking technologies to enhance your experience. For more information, please see our <a href="/cookies" className="text-[#174A6E] dark:text-[#174A6E]/80 hover:underline">Cookies Policy</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and manage your account</li>
                <li>To authenticate platform connections and sync data</li>
                <li>To generate analytics reports and insights</li>
                <li>To send you service-related notifications and updates</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">4.1 Service Providers</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We may share information with third-party service providers who perform services on our behalf, such as:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Cloud hosting and infrastructure providers</li>
                <li>Payment processors</li>
                <li>Email and communication services</li>
                <li>Analytics and monitoring tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">4.2 Legal Requirements</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety, or that of our users or others.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">4.3 Business Transfers</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Data Security</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication and access controls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>OAuth 2.0 and secure API connections for platform integrations</li>
                <li>Employee training on data protection best practices</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">6. Your Rights</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To exercise these rights, please contact us at <a href="mailto:privacy@kampalo.com" className="text-[#174A6E] dark:text-[#174A6E]/80 hover:underline">privacy@kampalo.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">7. Data Retention</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal or regulatory purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">8. International Data Transfers</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">9. Children's Privacy</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">11. Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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

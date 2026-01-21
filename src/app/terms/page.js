import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms and Conditions - KAMPALO',
  description: 'KAMPALO Terms and Conditions - Read our terms of service and usage agreements.',
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                By accessing or using KAMPALO ("the Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these Terms, you may not access the Service.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use the Service. By creating an account or using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Description of Service</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                KAMPALO is a unified marketing analytics and campaign management platform that allows you to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Connect and manage multiple advertising platform accounts (Google Ads, Meta Ads, TikTok, Shopify, LinkedIn, Apple Search Ads)</li>
                <li>Monitor and analyze advertising campaign performance across platforms</li>
                <li>Generate unified analytics reports and insights</li>
                <li>Compare performance metrics across different advertising platforms</li>
                <li>Access advanced analytics features and custom reporting tools</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Account Registration and Security</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">3.1 Account Creation</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                To use KAMPALO, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">3.2 Account Security</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Use a strong, unique password for your account</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Not share your account credentials with third parties</li>
                <li>Ensure all account information remains accurate and up-to-date</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">3.3 Account Termination</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your account at any time for violations of these Terms or for any reason we deem necessary to protect the integrity of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Platform Integrations and Third-Party Services</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                KAMPALO integrates with third-party advertising platforms. When you connect your accounts:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>You grant us permission to access and retrieve data from your connected accounts</li>
                <li>You represent that you have the authority to authorize such access</li>
                <li>You agree to comply with the terms of service of all connected platforms</li>
                <li>You understand that changes to third-party platform APIs may affect Service functionality</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We are not responsible for the availability, accuracy, or content of third-party services. Your use of third-party services is subject to their respective terms and conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Subscription Plans and Payment</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">5.1 Subscription Tiers</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                KAMPALO offers various subscription plans with different features and limitations. You may upgrade, downgrade, or cancel your subscription at any time through your account settings.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">5.2 Payment Terms</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                By subscribing to a paid plan, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Pay all fees associated with your selected subscription plan</li>
                <li>Provide accurate and complete billing information</li>
                <li>Authorize us to charge your payment method for subscription fees</li>
                <li>Understand that subscription fees are charged in advance on a monthly or yearly basis</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">5.3 Refunds</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Refund policies vary by subscription plan. Free trial periods may be offered without charge. Once a paid subscription begins, refunds are provided at our discretion and in accordance with applicable laws.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">5.4 Price Changes</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We reserve the right to modify subscription prices at any time. Existing subscribers will be notified of price changes at least 30 days in advance. Price changes will apply to your next billing cycle unless you cancel your subscription.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">6. Acceptable Use Policy</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any laws or regulations in your jurisdiction</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit viruses, malware, or any harmful code</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use automated systems (bots, scrapers) to access the Service without authorization</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Resell, sublicense, or redistribute the Service without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">7. Intellectual Property Rights</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                The Service, including its original content, features, functionality, design, logos, and trademarks, is owned by KAMPALO and protected by international copyright, trademark, patent, and other intellectual property laws.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                You are granted a limited, non-exclusive, non-transferable license to access and use the Service for your personal or business purposes in accordance with these Terms. You may not copy, modify, distribute, sell, or lease any part of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">8. Data and Content</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">8.1 Your Data</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                You retain ownership of all data you upload or connect to the Service. By using the Service, you grant us a license to use, process, and store your data as necessary to provide the Service and in accordance with our Privacy Policy.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">8.2 Data Accuracy</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                While we strive to ensure data accuracy, we do not guarantee that all data displayed is error-free or up-to-date. Data is retrieved from third-party platforms and may be subject to delays, inaccuracies, or API limitations.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">8.3 Data Backup</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                You are responsible for maintaining backups of your data. We are not liable for any loss of data, and we recommend exporting important data regularly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">9. Service Availability and Modifications</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We strive to provide reliable service availability but do not guarantee uninterrupted or error-free access. The Service may be temporarily unavailable due to maintenance, updates, or unforeseen circumstances.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We do not warrant that the Service will meet your requirements, be available on an uninterrupted basis, be secure, or be error-free. You use the Service at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">11. Limitation of Liability</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, KAMPALO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Our total liability for any claims arising from or related to the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">12. Indemnification</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless KAMPALO, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content or data you provide through the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">13. Termination</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                You may terminate your account at any time by canceling your subscription and deleting your account through the Service settings.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We may terminate or suspend your account immediately, without prior notice, if you breach these Terms or engage in any conduct we deem harmful to the Service or other users.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Upon termination, your right to use the Service will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">14. Governing Law and Dispute Resolution</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization], except where prohibited by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">15. Changes to Terms</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of the Service after such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">16. Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-2">KAMPALO Legal Team</p>
                <p className="text-slate-600 dark:text-slate-300">Email: <a href="mailto:legal@kampalo.com" className="text-[#174A6E] dark:text-[#174A6E]/80 hover:underline">legal@kampalo.com</a></p>
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

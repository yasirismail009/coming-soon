import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { TEKREIGN_CONTACT } from '@/constants/companyContact';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'Kampalo privacy policy: how Tekreign collects, uses, and protects marketing analytics and account data.',
  path: '/privacy',
});

export default function PrivacyPolicy() {
  return (
    <div className="km-page">
      <Header />
      <main className="km-main">
        <div className="km-prose">
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
                Welcome to {TEKREIGN_CONTACT.productName}. The platform is operated by{' '}
                {TEKREIGN_CONTACT.parentCompany} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), the parent company
                responsible for this product. We are committed to protecting your privacy and ensuring the security of
                your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you use our unified marketing analytics and campaign management platform.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                By accessing or using {TEKREIGN_CONTACT.productName}, you agree to the collection and use of information
                in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do
                not use our services.
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
                To provide our services, we access data from platforms you connect, which may include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Google Ads campaigns, customers, and performance metrics</li>
                <li>Google Search Console (SEO) and Google Analytics 4 (GA4) data you authorize</li>
                <li>Meta Ads account, campaign, and creative data, plus Meta Organic (Pages and Instagram) if enabled</li>
                <li>Shopify store catalog, orders, and commerce metrics when Shopify is enabled for your workspace</li>
                <li>Ad performance metrics such as impressions, clicks, conversions, spend, and related identifiers</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We store a copy of synced marketing data in our database so dashboards can load without calling live
                provider APIs on every view. TikTok remains a roadmap integration and is not a shipping product.
              </p>

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
                We use cookies, web beacons, and similar tracking technologies to enhance your experience. For more information, please see our <a href="/cookies" className="text-[var(--km-link)] hover:underline">Cookies Policy</a>.
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
                <li>To detect, prevent, and address technical issues, abuse, and security threats (including login lockout after repeated failed sign-ins)</li>
                <li>To process payments and detect payment fraud through our payment processor (Stripe), including 3-D Secure where Stripe requests it</li>
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
                <li>
                  Payment processing (Stripe). Card numbers are collected on Stripe-hosted Checkout; we store only
                  limited card-on-file details such as brand and last four digits when you add a card
                </li>
                <li>Email and communication services</li>
                <li>
                  Website analytics (Google Analytics and Microsoft Clarity). Clarity records page interactions
                  (session replay and heatmaps) on kampalo.com and app.kampalo.com; custom user IDs are hashed in
                  the browser before they are sent
                </li>
                <li>Connected advertising platforms you authorize (Google, Meta, and Shopify when enabled)</li>
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
                We implement security measures appropriate to a B2B SaaS product, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Encryption of data in transit (HTTPS) and access controls by role inside each workspace</li>
                <li>OAuth 2.0 for Google, Meta, and other platform connections you authorize</li>
                <li>Session tokens that can be invalidated on logout (refresh-token blacklist)</li>
                <li>Server-side login lockout after repeated failed sign-in attempts from the same email or IP</li>
                <li>Security HTTP headers (including Content-Security-Policy and Permissions-Policy) on the application and marketing site</li>
                <li>Stripe-hosted Checkout with 3-D Secure when Stripe requests it; payment-fraud rules are configured in Stripe Radar on our Stripe account</li>
                <li>Automated code and dependency scanning in our development pipeline (this is not a substitute for a third-party penetration test)</li>
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
                <li><strong>Deletion:</strong> Request deletion of your personal information (right to erasure)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                <strong className="text-slate-900 dark:text-white">Deletion in the app.</strong> Workspace{' '}
                <strong className="text-slate-900 dark:text-white">administrators</strong> can permanently delete stored
                data from <strong className="text-slate-900 dark:text-white">Settings → Preferences</strong> (Danger
                Zone). You must type DELETE and re-enter your password:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>
                  <strong>Individual:</strong> Delete account removes the admin, the tenant, and all synced marketing
                  data we store for that workspace
                </li>
                <li>
                  <strong>Enterprise:</strong> Delete workspace removes the agency home, every brand client, teammates,
                  and synced data for that organization
                </li>
                <li>Team members (non-admins) cannot delete the workspace from the app</li>
                <li>
                  Disconnecting an integration on the Integrations page permanently deletes the Kampalo copy of that
                  connection&apos;s data (your accounts at Google, Meta, or Shopify are not deleted)
                </li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Step-by-step instructions are on our{' '}
                <Link href="/data-deletion" className="text-[var(--km-link)] hover:underline font-medium">
                  data deletion &amp; disconnection
                </Link>{' '}
                page. Deletion cannot be undone from Kampalo.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To exercise access, correction, portability, or other rights, or if you are not an admin, contact us at{' '}
                <a
                  href={`mailto:${TEKREIGN_CONTACT.contactEmail}`}
                  className="text-[var(--km-link)] hover:underline"
                >
                  {TEKREIGN_CONTACT.contactEmail}
                </a>
                . We may need to verify your identity before we act.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">7. Data Retention</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We retain your personal information and synced marketing data for as long as your workspace remains
                active, unless a longer period is required or permitted by law. When an admin deletes the account or
                workspace, we permanently delete the Kampalo-stored copy of that data, including connections, tokens, and
                synced analytics. We keep a hashed copy of the deleting admin&apos;s email for up to 30 days solely to
                prevent immediate re-registration abuse; that hash is not used for marketing. We may still retain a
                limited subset where the law requires it (for example billing, tax, or security logs) only for as long as
                necessary. Stripe may retain payment records under its own policies even after we cancel the subscription.
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
                If you use the KAMPALO application, read our{' '}
                <Link href="/data-deletion" className="text-[var(--km-link)] hover:underline font-medium">
                  data deletion &amp; disconnection instructions
                </Link>{' '}
                for what happens when you disconnect integrations or delete your account—data is removed permanently and
                cannot be recovered from KAMPALO.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                <p className="text-slate-900 dark:text-white font-semibold mb-1">
                  {TEKREIGN_CONTACT.parentCompany}{' '}
                  <span className="font-normal text-slate-600 dark:text-slate-400">
                    (parent company of {TEKREIGN_CONTACT.productName})
                  </span>
                </p>
                <p className="text-slate-900 dark:text-white font-semibold mb-3">{TEKREIGN_CONTACT.productName} Privacy Team</p>
                <p className="text-slate-600 dark:text-slate-300">
                  Email:{' '}
                  <a
                    href={`mailto:${TEKREIGN_CONTACT.contactEmail}`}
                    className="text-[var(--km-link)] hover:underline"
                  >
                    {TEKREIGN_CONTACT.contactEmail}
                  </a>
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  Address: {TEKREIGN_CONTACT.addressLine1}, {TEKREIGN_CONTACT.addressLine2}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

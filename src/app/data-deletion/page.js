import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import DataDeletionScreenshot from '@/components/DataDeletionScreenshot';
import { TEKREIGN_CONTACT } from '@/constants/companyContact';

export const metadata = {
  title: 'Data Deletion & Disconnection Instructions - KAMPALO',
  description:
    'What happens when you disconnect an integration or delete your KAMPALO account: permanent removal of data with no recovery.',
};

export default function DataDeletionInstructionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Data deletion &amp; disconnection instructions
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="rounded-2xl border-2 border-red-200 dark:border-red-900/60 bg-red-50/80 dark:bg-red-950/30 p-6 mb-10">
            <p className="text-slate-900 dark:text-white font-semibold mb-2">Read this before disconnecting or deleting</p>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              In the KAMPALO web application, certain actions permanently remove data we store for your workspace. There is
              no way to recover that data from KAMPALO after the action completes. This page describes those actions in
              plain language. It applies when you use the hosted KAMPALO web application (for example your production
              app domain).
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                1. Disconnecting an integration (Integrations page)
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                On the <strong className="text-slate-900 dark:text-white">Integrations</strong> page, each connected
                platform (for example Google Ads or Meta Ads) can be disconnected using the{' '}
                <strong className="text-slate-900 dark:text-white">Disconnect</strong> action on that integration card.
              </p>

              <DataDeletionScreenshot
                variant="disconnect"
                caption="Open Integrations in the sidebar, then use Disconnect on the integration you want to remove. Screens follow your site theme (light or dark)."
              />

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                When you confirm disconnection, KAMPALO will <strong className="text-slate-900 dark:text-white">permanently
                delete</strong> the data associated with that integration for your account, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>Synced campaign and account data tied to that connection</li>
                <li>Stored metrics, reports, and analytics derived from that platform inside KAMPALO</li>
                <li>Tokens and credentials that allowed KAMPALO to access that platform on your behalf</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                <strong className="text-red-700 dark:text-red-300">There is no data recovery.</strong> We do not retain a
                separate &quot;backup&quot; copy of that integration&apos;s KAMPALO-stored data for you to restore after
                disconnect. Your ad accounts on Google, Meta, or other providers are not deleted by this action—only
                the copy and linkage inside KAMPALO is removed.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                2. Deleting your account (App settings — Danger Zone)
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                In <strong className="text-slate-900 dark:text-white">Settings</strong> (gear icon in the app header), the{' '}
                <strong className="text-slate-900 dark:text-white">Danger Zone</strong> includes account deletion. If you
                choose <strong className="text-slate-900 dark:text-white">Delete account</strong> and complete any
                confirmation steps, the following applies to your KAMPALO workspace:
              </p>

              <DataDeletionScreenshot
                variant="accountDeletion"
                caption="Open Settings from the header, choose Security (or your account area), then review the Danger Zone before Delete account."
              />

              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300 space-y-2">
                <li>
                  <strong className="text-slate-900 dark:text-white">All integrations and connections</strong> are
                  removed
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">All synced advertising data</strong> stored in
                  KAMPALO is deleted
                </li>
                <li>
                  Dashboards, historical analytics, saved views, and other product data tied to your account are{' '}
                  <strong className="text-slate-900 dark:text-white">deleted forever</strong>
                </li>
                <li>Your user profile and access to the application are terminated as part of that process</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                <strong className="text-red-700 dark:text-red-300">This cannot be undone.</strong> You will not be able
                to recover connections, integrations, or the data that was stored in KAMPALO after account deletion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                3. What may still be retained
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                A small subset of information may be retained where required by law (for example billing or tax records,
                or security logs), only for as long as legally necessary. That retention is described in general terms in
                our{' '}
                <Link href="/privacy" className="text-[#174A6E] dark:text-blue-300 hover:underline font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Questions</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                If you are unsure whether to disconnect an integration or delete your account, contact us before you
                proceed:
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg not-prose">
                <p className="text-slate-900 dark:text-white font-semibold mb-1">
                  {TEKREIGN_CONTACT.parentCompany}{' '}
                  <span className="font-normal text-slate-600 dark:text-slate-400">
                    (parent company of {TEKREIGN_CONTACT.productName})
                  </span>
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Email:{' '}
                  <a
                    href={`mailto:${TEKREIGN_CONTACT.contactEmail}`}
                    className="text-[#174A6E] dark:text-blue-300 hover:underline font-medium"
                  >
                    {TEKREIGN_CONTACT.contactEmail}
                  </a>
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Address: {TEKREIGN_CONTACT.addressLine1}, {TEKREIGN_CONTACT.addressLine2}
                </p>
              </div>
            </section>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              <Link href="/help" className="text-[#174A6E] dark:text-blue-300 hover:underline">
                ← Back to Help Center
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

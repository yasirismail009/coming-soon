import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { pageMetadata } from '@/lib/site';
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  GOOGLE_VS_META_FAQS,
} from '@/lib/structuredData';

const TITLE = 'Google Ads vs Meta Ads: Compare Your Own ROAS';
const DESCRIPTION =
  'Google Ads captures demand; Meta creates it. Do not pick a winner from industry averages. Compare spend, ROAS, and CPA on the same date range.';
const PATH = '/blog/google-ads-vs-meta';
const PUBLISHED = '2026-08-29';

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: 'article',
});

export default function GoogleAdsVsMetaGuidePage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: 'Google Ads vs Meta', path: PATH },
        ]),
        articleSchema({
          title: TITLE,
          description: DESCRIPTION,
          path: PATH,
          datePublished: PUBLISHED,
        }),
        faqSchema(GOOGLE_VS_META_FAQS),
      ]}
    >
      <p className="km-kicker">Guide · 29 Aug 2026</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">
        Google Ads vs Meta Ads: compare your accounts, not averages
      </h1>
      <p className="km-lead mb-12">{DESCRIPTION}</p>

      <section className="mb-16 space-y-5 text-lg leading-relaxed text-[var(--km-muted)]">
        <h2 className="km-h2">The question people actually mean</h2>
        <p>
          “Which is better, Google or Meta?” usually means “where should this month’s budget go?”
          Search and social do different jobs. Google Ads (especially Search) shows up when someone
          is already looking. Meta Ads interrupt a feed to create demand. Treating them as one
          channel with two logos is how blended ROAS becomes a gut feel.
        </p>
        <p>
          Industry CPC and CPA tables are a starting point for a pitch deck. They are a poor
          allocation rule. Your conversion event, your margin, and your attribution window matter
          more than a 2026 average CPC.
        </p>
      </section>

      <section className="mb-16 space-y-5 text-lg leading-relaxed text-[var(--km-muted)]">
        <h2 className="km-h2">What to put on the same row</h2>
        <p>
          Compare both platforms on one date range and the same conversion definition you use
          internally. At minimum:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Spend, clicks, conversions, and revenue (or conversion value)</li>
          <li>ROAS or MER if you blend; keep a per-platform ROAS too</li>
          <li>CTR and CPC so you can see cheap clicks that do not convert</li>
          <li>CPA against the number you can actually afford</li>
        </ul>
        <p>
          Keep currencies labelled. A PKR Google account next to a USD Meta account is not a
          blended ROAS until you convert on purpose.
        </p>
      </section>

      <section className="mb-16 space-y-5 text-lg leading-relaxed text-[var(--km-muted)]">
        <h2 className="km-h2">How to move budget without a warehouse</h2>
        <p>
          If you already model incrementality in a warehouse, keep doing that. Most teams do not.
          A practical loop:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Read platform totals for the last 7 and 28 days, not a single day.</li>
          <li>Open the campaigns that spend the most—not only the ones with the prettiest ROAS.</li>
          <li>Ask whether a “winning” Meta campaign is eating the same conversions Google claims.</li>
          <li>Shift a small slice of budget first. Re-read the same comparison after the next sync.</li>
        </ol>
        <p>
          Kampalo is built for that loop:{' '}
          <Link href="/google-ads-meta-dashboard" className="text-[var(--km-link)] underline">
            one dashboard
          </Link>
          , then{' '}
          <Link href="/kai" className="text-[var(--km-link)] underline">
            Kai
          </Link>{' '}
          to rank campaigns on ROAS, CTR, and CPC from the synced snapshot.
        </p>
      </section>

      <section className="mb-16 space-y-5 text-lg leading-relaxed text-[var(--km-muted)]">
        <h2 className="km-h2">When the answer is “both”</h2>
        <p>
          Search often wins when intent is high and the keyword set is clean. Meta often wins when
          you need volume or creative tests. Many accounts should run both and reallocate weekly.
          The failure mode is two native UIs and a Friday spreadsheet.
        </p>
        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
          <Link href="/compare" className="km-btn-primary">
            Platform compare in Kampalo
          </Link>
          <Link href="/integrations" className="km-btn-ghost">
            Connect Google and Meta
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="km-h2">FAQ</h2>
        <div className="space-y-5">
          {GOOGLE_VS_META_FAQS.map((faq) => (
            <div key={faq.question} className="km-card px-[1.5rem] py-[1.5rem]">
              <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
              <p className="leading-relaxed text-[var(--km-muted)]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </SeoPageShell>
  );
}

import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { pageMetadata } from '@/lib/site';
import {
  breadcrumbSchema,
  faqSchema,
  BOARDS_FAQS,
} from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Boards — Mix SEO, GA4, Ads, and Organic',
  description:
    'Kampalo boards mix connected SEO, GA4, ads, and Meta Organic into one view. Free cannot create boards. Starter can create 4. Enterprise can create 16, pooled across up to 4 brand workspaces.',
  path: '/boards',
});

const surfaces = [
  {
    title: 'One mix per board',
    body: 'Pick products you already connected: Search Console, GA4, Google or Meta ads campaigns, and Meta Organic. Minimum two different products.',
  },
  {
    title: 'KPIs, then the PDF',
    body: 'Open a board for last-7-day widgets (SEO, GA4, AI/AEO, ads, organic) and export the board report from that page — not the Reports builder.',
  },
  {
    title: 'Share a read-only link',
    body: 'Admins and managers can create a revokeable URL. Recipients see the last 7 days. No date filters, no Kai, no edits.',
  },
];

const limits = [
  {
    title: 'Free',
    body: 'Cannot create boards. Upgrade to Starter to mix SEO, GA4, ads, and organic.',
  },
  {
    title: 'Starter',
    body: 'Create up to 4 boards in one Individual workspace. Creating a board does not use an integration slot.',
  },
  {
    title: 'Enterprise',
    body: 'Create up to 16 boards, pooled across the agency home and up to 4 full brand workspaces — not 16 per brand.',
  },
];

export default function BoardsPage() {
  return (
    <SeoPageShell
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Boards', path: '/boards' },
        ]),
        faqSchema(BOARDS_FAQS),
      ]}
    >
      <p className="km-kicker">Cross-product views</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">
        Boards for SEO, GA4, ads, and organic
      </h1>
      <p className="km-lead mb-12">
        A board is a saved mix of products you already connected. It is not a second dashboard, and
        it is not Google Ads versus Meta Ads — that comparison stays on its own page. Creation
        limits: Free cannot create boards; Starter 4; Enterprise 16 pooled across brands.
      </p>

      <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {surfaces.map((item) => (
          <div key={item.title} className="km-card px-[1.5rem] py-[1.5rem]">
            <h2 className="mb-3 text-[1.125rem] font-semibold">{item.title}</h2>
            <p className="leading-relaxed text-[var(--km-muted)]">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="km-h2">How many boards you can create</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Caps sit on the billed workspace, like integration slots. Linking a campaign does not
          consume a slot. On Enterprise the 16 boards are shared across every brand — not multiplied
          by four.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {limits.map((item) => (
            <div key={item.title} className="km-card px-[1.5rem] py-[1.5rem]">
              <h3 className="mb-2 text-[1.125rem] font-semibold">{item.title}</h3>
              <p className="leading-relaxed text-[var(--km-muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">What a board is not</h2>
        <ul className="list-disc space-y-3 pl-6 text-lg text-[var(--km-muted)]">
          <li>Google Ads plus Meta Ads only is KPI Comparison, not a board.</li>
          <li>Shopify and TikTok are not board sources yet.</li>
          <li>A board does not start OAuth or a new sync. Connect the products first.</li>
          <li>Public share links are last 7 days, read-only. Client-facing Kai is not on a share URL.</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="km-h2">Where boards live</h2>
        <p className="mb-6 text-lg leading-relaxed text-[var(--km-muted)]">
          Each board belongs to a workspace. Individual Starter uses that one home. Enterprise adds
          up to four full brand workspaces from the top-bar switcher; manage brands on Clients. The
          16-board cap still counts home and brands together.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="/#pricing" className="km-btn-primary">
            See board limits on pricing
          </a>
          <Link href="/google-ads-meta-dashboard" className="km-btn-ghost">
            Google + Meta dashboard
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="km-h2">FAQ</h2>
        <div className="space-y-5">
          {BOARDS_FAQS.map((faq) => (
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

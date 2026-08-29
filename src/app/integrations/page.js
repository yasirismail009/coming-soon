import Link from 'next/link';
import SeoPageShell from '@/components/SeoPageShell';
import { pageMetadata } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Integrations — Google Ads, Meta, GA4',
  description:
    'Connect Google Ads, Meta Ads, GA4, and Search Console to Kampalo. One sign-in per provider. Kai reads the same synced data.',
  path: '/integrations',
});

const items = [
  {
    href: '/integrations/google-ads',
    title: 'Google Ads',
    body: 'Ads, Search Ads 360, GA4, and Search Console under one Google sign-in.',
  },
  {
    href: '/integrations/meta',
    title: 'Meta Ads',
    body: 'Facebook and Instagram ads, with Page and Instagram insights kept off paid ROAS.',
  },
];

export default function IntegrationsIndexPage() {
  return (
    <SeoPageShell
      jsonLd={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Integrations', path: '/integrations' },
      ])}
    >
      <p className="km-kicker">Connections</p>
      <h1 className="km-h1 mb-6 text-[var(--km-ink)]">Kampalo integrations</h1>
      <p className="km-lead mb-12">
        One OAuth flow per provider. Google covers the Google family; Meta covers ads and optional
        organic insights. Refresh in the app when you want a newer snapshot.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="km-card block px-[1.5rem] py-[1.5rem]">
            <h2 className="mb-2 text-[1.25rem] font-semibold">{item.title}</h2>
            <p className="leading-relaxed text-[var(--km-muted)]">{item.body}</p>
          </Link>
        ))}
      </div>
    </SeoPageShell>
  );
}

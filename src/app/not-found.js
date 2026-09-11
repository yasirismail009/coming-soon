import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Page not found',
  description: 'That URL is not on kampalo.com. Open the sitemap or go back home.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="km-page">
      <Header />
      <main className="km-main">
        <div className="km-prose text-center">
          <p className="km-kicker">404</p>
          <h1 className="km-h1 mb-6 text-[var(--km-ink)]">This page is not on Kampalo</h1>
          <p className="km-lead mb-12">
            The URL may be mistyped or the page moved. The sitemap lists every public URL.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/" className="km-btn-primary">
              Home
            </Link>
            <Link href="/sitemap" className="km-btn-ghost">
              Sitemap
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

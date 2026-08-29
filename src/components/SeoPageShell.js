import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

/** Shared chrome for marketing/SEO articles. Keeps Header, Footer, and JSON-LD consistent. */
export default function SeoPageShell({ children, jsonLd, wide = false }) {
  return (
    <div className="km-page">
      {jsonLd ? <JsonLd data={jsonLd} /> : null}
      <Header />
      <main className="km-main">
        <div className={wide ? 'km-prose-wide' : 'km-prose'}>{children}</div>
      </main>
      <Footer />
    </div>
  );
}

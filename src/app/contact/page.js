import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactPageClient from '@/components/ContactPageClient';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact the Kampalo team for product demos, sales, enterprise plans, or help connecting Google Ads and Meta.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <ContactPageClient />
      <Footer />
    </div>
  );
}

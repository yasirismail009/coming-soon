import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata = {
  title: 'Contact Us - KAMPALO',
  description:
    'Get in touch about KAMPALO unified marketing analytics—demos, sales, enterprise plans, and technical support.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <ContactPageClient />
      <Footer />
    </div>
  );
}

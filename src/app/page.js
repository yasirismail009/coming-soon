import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KaiHighlight from '@/components/KaiHighlight';
import PlatformIntegrations from '@/components/PlatformIntegrations';
import Features from '@/components/Features';
import DashboardShowcase from '@/components/DashboardShowcase';
import KeyMetrics from '@/components/KeyMetrics';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: {
    absolute: 'Kampalo — AI Marketing Analytics for Google Ads & Meta',
  },
  description:
    'Kampalo unifies Google Ads, Search Ads 360, Meta, GA4, SEO, and organic insights. Ask Kai—your AI assistant—what to scale from your synced data.',
  path: '/',
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <Hero />
      <KaiHighlight />
      <PlatformIntegrations />
      <Features />
      <DashboardShowcase />
      <KeyMetrics />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

import HashScroll from '@/components/HashScroll';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PlatformIntegrations from '@/components/PlatformIntegrations';
import KeyMetrics from '@/components/KeyMetrics';
import Features from '@/components/Features';
import DashboardShowcase from '@/components/DashboardShowcase';
import ProductTour, { ReportsTour } from '@/components/ProductTour';
import KaiHighlight from '@/components/KaiHighlight';
import Pricing from '@/components/Pricing';
import Benefits from '@/components/Benefits';
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
    <div className="km-page">
      <HashScroll />
      <Header />
      <Hero />
      <PlatformIntegrations />
      <KeyMetrics />
      <Features />
      <DashboardShowcase />
      <ProductTour />
      <KaiHighlight />
      <ReportsTour />
      <Pricing />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}

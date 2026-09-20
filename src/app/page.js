import HashScroll from '@/components/HashScroll';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PlatformIntegrations from '@/components/PlatformIntegrations';
import KeyMetrics from '@/components/KeyMetrics';
import Features from '@/components/Features';
import DashboardShowcase from '@/components/DashboardShowcase';
import ProductTour, { ReportsTour } from '@/components/ProductTour';
import KaiHighlight from '@/components/KaiHighlight';
import GrokBotHighlight from '@/components/GrokBotHighlight';
import Pricing from '@/components/Pricing';
import AlternativesStrip from '@/components/AlternativesStrip';
import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/site';
import { faqSchema, HOME_FAQS } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: {
    absolute: 'Kampalo — Google Ads & Meta Dashboard with Kai',
  },
  description:
    'PPC reporting for Google Ads, Meta, and Shopify in one dashboard. An AgencyAnalytics and Looker Studio alternative when the job is paid search versus social—not 80-source client reporting. Kai proposes; you confirm.',
  path: '/',
  keywords: [
    'Google Ads Meta dashboard',
    'PPC reporting software',
    'Google Ads reporting tool',
    'Facebook Ads dashboard',
    'AgencyAnalytics alternative',
    'Looker Studio alternative',
    'Google Data Studio alternative',
    'Databox alternative',
    'DashThis alternative',
    'marketing dashboard',
    'Shopify ads dashboard',
    'AI marketing analytics',
  ],
});

export default function Home() {
  return (
    <div className="km-page">
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <HashScroll />
      <Header />
      <Hero />
      <PlatformIntegrations />
      <KeyMetrics />
      <Features />
      <DashboardShowcase />
      <ProductTour />
      <KaiHighlight />
      <GrokBotHighlight />
      <ReportsTour />
      <Pricing />
      <AlternativesStrip />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}

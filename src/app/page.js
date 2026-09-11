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
    'Kampalo unifies Google Ads, Meta Ads, GA4, and Search Console in one dashboard. Ask Kai which campaigns to scale. An alternative to Looker Studio and agency reporting tools when you only need Google versus Meta.',
  path: '/',
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

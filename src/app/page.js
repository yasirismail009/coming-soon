import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PlatformIntegrations from '@/components/PlatformIntegrations';
import Features from '@/components/Features';
import DashboardShowcase from '@/components/DashboardShowcase';
import KeyMetrics from '@/components/KeyMetrics';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <Hero />
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

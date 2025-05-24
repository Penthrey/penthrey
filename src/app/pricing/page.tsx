import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparePlans from "@/components/ComparePlans";
import FAQ from "@/components/FAQ";
import CtaSection from '@/components/CtaSection';
import PricingHero from '@/components/PricingHero';

export const metadata: Metadata = {
  title: 'Pricing - Penthry | Simple, Transparent Plans',
  description: 'Choose the perfect plan for your business. No hidden charges. From free starter plans to enterprise solutions.',
  keywords: 'pricing, plans, business software, penthry, CRM, HR management, finance tools',
};

export default function Pricing() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingHero />
      <ComparePlans />
      <FAQ />
      <CtaSection/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Footer />
      </div>
    </main>
  );
} 
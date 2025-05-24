import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/ResourcesHero";
import FeaturedBlog from "@/components/FeaturedBlog";
import HelpCenterHighlights from "@/components/HelpCenterHighlights";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: 'Resources - Penthry | Knowledge Hub',
  description: 'Learn how to get the most out of Penthry—explore tips, guides, webinars, and expert insights built to help your team thrive.',
  keywords: 'resources, knowledge hub, guides, tips, webinars, business insights, Penthry',
};

export default function Resources() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ResourcesHero />
      <FeaturedBlog />
    
      <Testimonials />
     
        <HelpCenterHighlights />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Footer />
      </div>
    </main>
  );
} 
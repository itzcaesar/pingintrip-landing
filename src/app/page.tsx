import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { FeaturedVehicles } from '@/components/FeaturedVehicles';
import { WhyChoose } from '@/components/WhyChoose';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';
import { InstagramFeed } from '@/components/InstagramFeed';
import { TravelPackages } from '@/components/TravelPackages';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FeaturedVehicles />
      <TravelPackages />
      <WhyChoose />
      <Testimonials />
      <CTASection />
    </>
  );
}

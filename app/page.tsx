import { ClientsBar } from '@/components/sections/ClientsBar';
import { InterestsTags } from '@/components/sections/InterestsTags';
import { Footer } from '@/components/sections/Footer';
import HeroSection from '@/components/sections/Hero';
import TrustedSection from '@/components/sections/TrustedSection';
import AboutSection from '@/components/sections/About';
import ServicesSection from '@/components/sections/Services';
import WorkSection from '@/components/sections/work';
import VideoShowcase from '@/components/sections/video';
import FollowSection from '@/components/sections/FollowSection';
import ContactSection from '@/components/sections/Contact';
import CaseStudiesSection from '@/components/sections/CaseStudies';
import { ScrollToTop } from '@/components/sections/scroll';

export default function Home() {
  return (
    <main className="overflow-hidden">
    <ScrollToTop/>
      <HeroSection />
      <AboutSection/>
      <TrustedSection/>
        <ServicesSection/>
        <WorkSection/>
      <ClientsBar/>
        <VideoShowcase/>
        <FollowSection/>
        <ContactSection/>
        <CaseStudiesSection/>
         <InterestsTags /> 
      <Footer />
    </main>
  );
}

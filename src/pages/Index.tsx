import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

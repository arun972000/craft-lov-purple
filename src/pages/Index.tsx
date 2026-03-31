import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnersSection from "@/components/PartnersSection";
import LeadershipSection from "@/components/LeadershipSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <WhyChooseUs />
      <div className="section-divider" />
      <PartnersSection />
      <div className="section-divider" />
      <LeadershipSection />
      <div className="section-divider" />
      <ShowcaseSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

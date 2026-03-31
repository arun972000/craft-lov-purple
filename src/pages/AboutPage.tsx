import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Page Header */}
      <section className="pt-32 pb-16 premium-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.2), transparent 60%)"
        }} />
        <div className="container-premium relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">About ContentCraft</h1>
          </motion.div>
        </div>
      </section>
      <AboutSection />
      <div className="section-divider" />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default AboutPage;

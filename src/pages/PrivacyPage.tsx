import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 premium-gradient relative overflow-hidden">
        <div className="container-premium relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Privacy Policy</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium max-w-3xl">
          <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
            <p className="text-foreground font-medium">Last updated: March 2026</p>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>ContentCraft Infotech Pvt. Ltd. ("we", "our", or "us") collects personal information you voluntarily provide when you contact us through our website, including your name, email address, phone number, and any message content. We may also automatically collect certain technical data such as IP address, browser type, and usage patterns through standard web analytics.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information collected to respond to your inquiries, provide our services, improve our website experience, send relevant communications about our services, and comply with legal obligations. We do not sell, trade, or rent your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">3. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">4. Third-Party Services</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies independently.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information held by us. To exercise these rights, please contact us at ck@contentcraftinfotech.com.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">6. Contact</h2>
              <p>For privacy-related inquiries, please contact us at: ck@contentcraftinfotech.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPage;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 premium-gradient relative overflow-hidden">
        <div className="container-premium relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Terms & Conditions</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium max-w-3xl">
          <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
            <p className="text-foreground font-medium">Last updated: March 2026</p>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the website of ContentCraft Infotech Pvt. Ltd., you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">2. Services</h2>
              <p>ContentCraft Infotech provides publishing services, publisher representation, and conference proceedings management. The specific terms of each engagement are governed by separate service agreements between the company and its clients.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">3. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of ContentCraft Infotech Pvt. Ltd. and is protected by applicable intellectual property laws. Unauthorized use or reproduction is prohibited.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">4. Limitation of Liability</h2>
              <p>ContentCraft Infotech shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services, to the fullest extent permitted by applicable law.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">5. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">6. Contact</h2>
              <p>For questions regarding these terms, please contact us at: ck@contentcraftinfotech.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsPage;

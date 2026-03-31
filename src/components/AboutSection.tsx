import { motion } from "framer-motion";
import { BookOpen, Globe, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full premium-gradient-light opacity-50 rounded-l-[100px] -z-10" />

      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-8 text-foreground">
              Advancing{" "}
              <span className="text-gradient">Academic Publishing</span>{" "}
              With Expertise
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                ContentCraft Infotech is a publishing and representation company headquartered in Chennai, India, promoted by experienced publishing professionals with decades of combined expertise in book production, sales, marketing, customer experience, and distribution.
              </p>
              <p>
                We serve as a strategic bridge between leading international publishers and the Indian academic ecosystem—connecting world-class content with institutions, researchers, and professionals who shape the future of knowledge.
              </p>
              <p>
                Our commitment to excellence extends beyond representation. We provide end-to-end publishing solutions that encompass editorial development, production management, marketing strategy, and distribution logistics, ensuring every project meets the highest standards of academic integrity and commercial viability.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { icon: BookOpen, label: "Publishing\nExcellence" },
                { icon: Globe, label: "Global\nNetwork" },
                { icon: Award, label: "Industry\nLeadership" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground whitespace-pre-line leading-tight">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 premium-gradient opacity-90" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-primary-foreground">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <BookOpen className="w-20 h-20 mb-8 opacity-40" strokeWidth={1} />
                </motion.div>
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold mb-2">20+</div>
                  <div className="text-sm tracking-[0.15em] uppercase opacity-70">Years of Excellence</div>
                </div>
                <div className="w-12 h-px bg-primary-foreground/30 my-8" />
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold mb-2">100+</div>
                  <div className="text-sm tracking-[0.15em] uppercase opacity-70">Institutional Partners</div>
                </div>
              </div>
            </div>
            {/* Decorative shadow card */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border border-primary/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

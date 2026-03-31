import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Academic library"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/90 via-primary/80 to-primary-deep/95" />

      {/* Animated floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(270 34% 56% / 0.4) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, hsl(270 48% 34% / 0.3) 0%, transparent 70%)" }}
        />
      </div>

      {/* Subtle line overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary-foreground/30 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary-foreground/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-premium text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[2px] mx-auto mb-8"
            style={{ background: "linear-gradient(90deg, transparent, hsl(270 34% 56%), transparent)" }}
          />
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-primary-foreground mb-8">
            Publishing & Representation{" "}
            <span className="block mt-2 bg-clip-text text-transparent" style={{
              backgroundImage: "linear-gradient(135deg, hsl(270 34% 76%), hsl(270 50% 90%))"
            }}>
              Solutions for Academic Excellence
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 text-primary-foreground/75 font-body"
        >
          Trusted by institutions, publishers, and professionals for delivering advanced publishing services, conference proceedings, and strategic academic representation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/services"
            className="px-8 py-4 rounded-full bg-primary-foreground text-primary font-semibold text-sm tracking-wide hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm tracking-wide hover:border-primary-foreground/60 hover:bg-primary-foreground/5 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

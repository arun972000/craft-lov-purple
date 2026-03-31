import { motion } from "framer-motion";
import { Building2, FileText, Presentation } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Publisher Representation",
    description: "Strategic representation of leading international publishers across the Indian subcontinent. We bridge the gap between global publishers and local academic institutions, ensuring seamless access to world-class content through dedicated relationship management, market intelligence, and institutional engagement.",
    features: ["Market Analysis & Strategy", "Institutional Outreach", "Relationship Management", "Sales Development"],
  },
  {
    icon: FileText,
    title: "Publishing Services",
    description: "Comprehensive end-to-end publishing solutions covering every stage of the production lifecycle. From manuscript development and editorial services to design, typesetting, and distribution, we deliver professionally crafted publications that meet international standards.",
    features: ["Editorial Development", "Design & Production", "Print Management", "Digital Publishing"],
  },
  {
    icon: Presentation,
    title: "Conference Proceedings",
    description: "Professional management and publication of academic conference proceedings. We handle the complete workflow from abstract management and peer review coordination to final publication and distribution, ensuring scholarly integrity at every step.",
    features: ["Abstract Management", "Peer Review Coordination", "Production & Indexing", "Digital Distribution"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 premium-gradient-light -z-10" />
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-foreground">
            Comprehensive Publishing{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl p-8 lg:p-10 hover-lift glow-border border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{service.description}</p>
              <ul className="space-y-2.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

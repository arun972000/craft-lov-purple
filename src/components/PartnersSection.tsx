import { motion } from "framer-motion";

const partners = [
  { name: "JoVE", initials: "JV" },
  { name: "Taylor & Francis", initials: "T&F" },
  { name: "Brill", initials: "BR" },
  { name: "De Gruyter", initials: "DG" },
  { name: "Cambridge University Press", initials: "CUP" },
  { name: "Manohar", initials: "MN" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding relative">
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
            Publisher Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-foreground">
            Representing <span className="text-gradient">World-Class</span> Publishers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-card rounded-2xl border border-border/50 p-8 flex flex-col items-center justify-center aspect-square hover-lift cursor-default"
            >
              <div className="text-3xl font-heading font-bold text-muted-foreground/40 group-hover:text-primary transition-colors duration-500 mb-3">
                {partner.initials}
              </div>
              <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-500 text-center font-medium">
                {partner.name}
              </span>
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 30px rgba(91, 45, 130, 0.06)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

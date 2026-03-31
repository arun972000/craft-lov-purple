import { motion } from "framer-motion";
import { Search, FileEdit, Printer, Truck, Globe, Users } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "Understanding publisher goals, market landscape, and institutional needs." },
  { icon: Users, title: "Engagement", desc: "Building relationships with academic institutions and key stakeholders." },
  { icon: FileEdit, title: "Production", desc: "Managing editorial, design, typesetting, and quality assurance." },
  { icon: Printer, title: "Publishing", desc: "Professional printing, digital conversion, and indexing services." },
  { icon: Truck, title: "Distribution", desc: "Strategic logistics and channel management across the subcontinent." },
  { icon: Globe, title: "Growth", desc: "Continuous market analysis, feedback loops, and relationship expansion." },
];

const ShowcaseSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
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
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-foreground">
            The Publishing <span className="text-gradient">Workflow</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:hidden" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Mobile dot */}
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center shrink-0 md:hidden z-10 relative left-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`bg-card rounded-2xl border border-border/50 p-6 hover-lift ${isLeft ? "" : ""}`}>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot - desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-card border border-border/50 items-center justify-center z-10">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

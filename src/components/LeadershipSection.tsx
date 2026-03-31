import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "C Kumareson",
    title: "Co-founder & Director",
    bio: "A seasoned publishing professional with over two decades of experience in academic publishing, sales strategy, and publisher relations. His deep understanding of the Indian institutional landscape and global publishing trends has been instrumental in establishing ContentCraft as a trusted name in the industry.",
  },
  {
    name: "KK Lakshmi",
    title: "Customer Service Manager",
    bio: "With extensive expertise in customer experience management and institutional liaison, she ensures seamless service delivery and fosters long-lasting relationships with clients and partners. Her dedication to operational excellence drives the company's reputation for reliability.",
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding relative overflow-hidden">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-foreground">
            The Team Behind <span className="text-gradient">Our Vision</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover-lift"
            >
              {/* Avatar Placeholder */}
              <div className="relative h-48 premium-gradient flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-7xl font-heading font-bold text-primary-foreground/20"
                >
                  {leader.name.split(" ").map(n => n[0]).join("")}
                </motion.div>
                {/* Subtle mesh */}
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2), transparent 50%)" }}
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">{leader.name}</h3>
                <p className="text-sm text-primary font-semibold mb-4">{leader.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{leader.bio}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/8 flex items-center justify-center hover:bg-primary/15 transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary/8 flex items-center justify-center hover:bg-primary/15 transition-colors cursor-pointer">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;

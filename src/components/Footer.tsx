import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8" style={{ background: "hsl(0 0% 7%)" }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: "linear-gradient(90deg, transparent 0%, hsl(270 34% 56% / 0.5) 50%, transparent 100%)"
      }} />

      <div className="container-premium">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl premium-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">C</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg" style={{ color: "hsl(0 0% 95%)" }}>
                  ContentCraft
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase" style={{ color: "hsl(0 0% 60%)" }}>
                  Infotech Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "hsl(0 0% 50%)" }}>
              A publishing and representation company headquartered in Chennai, India. Bridging global publishers with academic institutions across the subcontinent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4" style={{ color: "hsl(0 0% 80%)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm transition-colors duration-300 hover:opacity-80"
                    style={{ color: "hsl(0 0% 50%)" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4" style={{ color: "hsl(0 0% 80%)" }}>
              Legal
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Terms & Conditions", path: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm transition-colors duration-300 hover:opacity-80"
                    style={{ color: "hsl(0 0% 50%)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(0 0% 20%) 50%, transparent 100%)"
        }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "hsl(0 0% 40%)" }}>
            © {new Date().getFullYear()} ContentCraft Infotech Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "hsl(0 0% 30%)" }}>
            Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

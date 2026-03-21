import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Facebook, Code, TrendingUp, Palette, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Facebook,
    label: "FB Management",
    title: "Facebook Dominance",
    description: "Strategic content, targeted ads, community management, and analytics that turn your Facebook presence into a revenue engine.",
    features: ["Ad Campaign Strategy", "Content Calendar", "Audience Growth", "ROI Analytics"],
  },
  {
    icon: Globe,
    label: "Web Dev",
    title: "Web Architecture",
    description: "High-performance websites and web applications built with cutting-edge technology, designed to convert and scale.",
    features: ["Custom Development", "Responsive Design", "E-commerce", "Web Applications"],
  },
];

const subServices = [
  { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven campaigns" },
  { icon: Code, title: "Clean Code", desc: "Scalable architecture" },
  { icon: Palette, title: "UI/UX Design", desc: "Pixel-perfect interfaces" },
  { icon: BarChart3, title: "Analytics", desc: "Real-time insights" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            // Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ textWrap: "balance" }}>
            Two pillars.
            <br />
            <span className="text-muted-foreground">Infinite possibilities.</span>
          </h2>
        </motion.div>

        {/* Main service cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group card-surface p-8 md:p-10 transition-all duration-300 hover:border-primary/30 border-glow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  {service.label}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, fi) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-secondary-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/[0.03] blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Sub-services grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {subServices.map((sub, i) => (
            <motion.div
              key={sub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-6 text-center transition-all duration-200 hover:border-primary/20 active:scale-[0.97]"
            >
              <sub.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm mb-1">{sub.title}</h4>
              <p className="text-xs text-muted-foreground">{sub.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

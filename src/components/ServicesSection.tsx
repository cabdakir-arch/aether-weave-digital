import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Facebook, Megaphone, Target, TrendingUp, BarChart3, Users, Palette, Smartphone, ShoppingCart, PenTool, Zap } from "lucide-react";

const fbFeatures = [
  { icon: Target, title: "Targeted Ad Campaigns", desc: "Precision targeting to reach your ideal East African customers" },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven strategies that consistently grow your audience" },
  { icon: BarChart3, title: "Performance Analytics", desc: "Detailed reports so you see exactly where your money goes" },
  { icon: Users, title: "Community Management", desc: "We engage your audience and build lasting relationships" },
  { icon: PenTool, title: "Content Creation", desc: "Scroll-stopping posts designed for your brand voice" },
  { icon: Megaphone, title: "Brand Awareness", desc: "Get your business in front of thousands across the region" },
];

const webFeatures = [
  { icon: Palette, title: "Custom Design" },
  { icon: Smartphone, title: "Mobile-First" },
  { icon: ShoppingCart, title: "E-Commerce" },
  { icon: Zap, title: "Fast & Secure" },
];

// Animated notification component
const AnimatedNotification = ({ text, delay, emoji }: { text: string; delay: number; emoji: string }) => (
  <motion.div
    initial={{ opacity: 0, x: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border/50 shadow-sm"
  >
    <span className="text-lg">{emoji}</span>
    <span className="text-sm text-foreground font-medium">{text}</span>
  </motion.div>
);

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} id="services" className="relative py-24 md:py-32 bg-grain">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4 block font-bold">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ textWrap: "balance" }}>
            Everything your business
            <br />
            <span className="text-muted-foreground">needs to thrive online.</span>
          </h2>
        </motion.div>

        {/* === FACEBOOK MANAGEMENT — Hero Feature === */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="card-warm-hover p-8 md:p-12 relative overflow-hidden">
            {/* Decorative animated corner */}
            <motion.div
              className="absolute top-0 right-0 w-48 h-48 bg-terracotta-light rounded-bl-[120px] opacity-30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-14 h-14 bg-terracotta-light rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Facebook className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Most Popular</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Facebook Management</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                  From page setup to high-converting ad campaigns — we manage your entire Facebook presence so you can focus on running your business. Your customers are scrolling right now. Let's make sure they find you.
                </p>

                {/* Animated fake notifications */}
                <div className="space-y-3">
                  <AnimatedNotification emoji="🔔" text="New lead from Nairobi — Sarah K." delay={0.6} />
                  <AnimatedNotification emoji="📈" text="Ad reach increased 340% this week" delay={0.8} />
                  <AnimatedNotification emoji="💬" text="12 new messages from customers" delay={1.0} />
                </div>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-4">
                {fbFeatures.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-xl bg-background/60 border border-border/30 transition-shadow duration-300 hover:shadow-md"
                  >
                    <f.icon className="w-5 h-5 text-primary mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* === WEB DEVELOPMENT — Secondary === */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="card-warm-hover p-8 md:p-10 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-sage-light rounded-bl-[80px] opacity-30"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <motion.div
                className="w-14 h-14 bg-sage-light rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Globe className="w-7 h-7 text-secondary-foreground" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Web Development</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Beautiful, fast, mobile-first websites built for East African businesses. From portfolios to full e-commerce platforms — we build sites that earn trust and drive sales.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:min-w-[280px]">
              {webFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-background/60 border border-border/30"
                >
                  <f.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{f.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

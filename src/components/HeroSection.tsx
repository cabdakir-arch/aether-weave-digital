import { motion } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, Users, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingOrb = ({ delay, x, y, size, color }: { delay: number; x: string; y: string; size: string; color: string }) => (
  <motion.div
    className={`absolute ${size} rounded-full ${color} blur-[60px]`}
    style={{ left: x, top: y }}
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.6, 0.3],
      x: [0, 20, -10, 0],
      y: [0, -15, 10, 0],
    }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const AnimatedMetric = ({ label, value, icon: Icon, delay }: { label: string; value: string; icon: any; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm"
  >
    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-bold text-sm text-foreground">{value}</div>
    </div>
  </motion.div>
);

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  return <span>{displayed}<motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="text-primary">|</motion.span></span>;
};

// Animated graph bars for the visual side
const AnimatedGraph = () => (
  <div className="flex items-end gap-2 h-32">
    {[40, 55, 35, 70, 50, 85, 65, 95, 75, 100, 80, 90].map((h, i) => (
      <motion.div
        key={i}
        className="flex-1 rounded-t-md bg-gradient-to-t from-primary/80 to-primary/20"
        initial={{ height: 0 }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 0.8, delay: 0.8 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grain pt-20">
      {/* Animated orbs */}
      <FloatingOrb delay={0} x="70%" y="10%" size="w-[350px] h-[350px]" color="bg-terracotta-light" />
      <FloatingOrb delay={2} x="-5%" y="60%" size="w-[250px] h-[250px]" color="bg-sage-light" />
      <FloatingOrb delay={4} x="50%" y="70%" size="w-[200px] h-[200px]" color="bg-accent/20" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-sage-light rounded-full text-sm text-secondary-foreground font-medium"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Proudly serving East Africa
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ textWrap: "balance" }}
            >
              We make your
              <br />
              Facebook{" "}
              <span className="text-gradient-warm">unstoppable</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              style={{ textWrap: "pretty" }}
            >
              Alifle Online helps businesses across Kenya, Tanzania, Uganda, and beyond dominate Facebook and build websites that convert visitors into loyal customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]">
                Grow My Business
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button className="flex items-center gap-3 px-8 py-4 border-2 border-border text-foreground font-medium rounded-full transition-all duration-200 hover:border-primary/40 hover:bg-card active:scale-[0.97]">
                See Results
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {["A", "M", "J", "S"].map((letter, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 300 }}
                    className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-xs font-semibold text-foreground"
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
              <span>Trusted by <strong className="text-foreground">80+</strong> East African businesses</span>
            </motion.div>
          </div>

          {/* Animated visual side — no image */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main animated card */}
              <div className="card-warm p-6 md:p-8 rounded-3xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-mono text-muted-foreground">Live Performance</span>
                  </div>
                  <span className="text-xs font-mono text-primary font-bold">+340%</span>
                </div>

                <AnimatedGraph />

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "Reach", value: "47.2K" },
                    { label: "Engagement", value: "8.7%" },
                    { label: "Leads", value: "312" },
                  ].map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + i * 0.1 }}
                      className="text-center p-3 rounded-xl bg-background/50"
                    >
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                      <div className="font-bold text-sm text-foreground">{m.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating metrics */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 md:-bottom-2 md:-left-8"
              >
                <AnimatedMetric label="Ad Spend ROI" value="12.4x Return" icon={TrendingUp} delay={1.2} />
              </motion.div>

              <motion.div
                animate={{ y: [4, -8, 4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 md:-top-2 md:-right-8"
              >
                <AnimatedMetric label="New Followers" value="+2,847/mo" icon={Users} delay={1.4} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

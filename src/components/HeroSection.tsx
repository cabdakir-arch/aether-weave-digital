import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-abstract.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grain pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] rounded-full bg-terracotta-light blur-[100px] opacity-60" />
      <div className="absolute bottom-10 left-[-5%] w-[300px] h-[300px] rounded-full bg-sage-light blur-[80px] opacity-50" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
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
              Growing brands
              <br />
              across{" "}
              <span className="text-gradient-warm">East Africa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              style={{ textWrap: "pretty" }}
            >
              We help businesses in Kenya, Tanzania, Uganda, and beyond dominate social media and build world-class websites that convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]">
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button className="flex items-center gap-3 px-8 py-4 border-2 border-border text-foreground font-medium rounded-full transition-all duration-200 hover:border-primary/40 hover:bg-card active:scale-[0.97]">
                View Our Work
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {["A", "M", "J", "S"].map((letter, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-xs font-semibold text-foreground">
                    {letter}
                  </div>
                ))}
              </div>
              <span>Trusted by <strong className="text-foreground">80+</strong> East African businesses</span>
            </motion.div>
          </div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img src={heroImg} alt="Alifle Online digital services" className="w-full h-auto" />
            </div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 card-warm p-4 flex items-center gap-3 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-lg">📈</div>
              <div>
                <div className="text-xs text-muted-foreground">Avg. Growth</div>
                <div className="font-bold text-foreground">+340%</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

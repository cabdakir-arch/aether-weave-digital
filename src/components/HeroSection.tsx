import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Scanline effect */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-20 h-20 border border-primary/20 rotate-45"
        animate={{ y: [-10, 10, -10], rotate: [45, 48, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[25%] right-[15%] w-32 h-32 border border-primary/10 rounded-full"
        animate={{ y: [10, -15, 10], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[20%] w-16 h-16 border border-primary/15"
        animate={{ y: [5, -10, 5], rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[10%] w-24 h-24 border border-primary/10 rotate-12"
        animate={{ y: [-8, 12, -8], rotate: [12, 15, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-border rounded-full font-mono text-xs tracking-widest uppercase text-muted-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Systems Online
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
          style={{ textWrap: "balance" }}
        >
          We Build
          <br />
          <span className="text-primary text-glow">Digital Empires</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
          style={{ textWrap: "pretty" }}
        >
          Facebook management & web development, engineered for brands that refuse to blend in.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_30px_hsl(52_95%_55%/0.3)] active:scale-[0.97]">
            <Zap className="w-5 h-5" />
            Launch Your Project
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button className="flex items-center gap-3 px-8 py-4 border border-border text-foreground font-medium rounded-lg transition-all duration-200 hover:border-primary/40 hover:bg-secondary active:scale-[0.97]">
            Explore Services
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-primary/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

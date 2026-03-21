import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Terminal } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-border rounded-full font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <Terminal className="w-3 h-3 text-primary" />
            Ready to deploy
          </div>

          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ textWrap: "balance" }}
          >
            Let's build something
            <br />
            <span className="text-primary text-glow">extraordinary</span>
          </h2>

          <p className="max-w-md mx-auto text-muted-foreground text-lg mb-10 leading-relaxed">
            Your next project starts with a single message. We're ready when you are.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded-lg transition-all duration-200 hover:shadow-[0_0_40px_hsl(52_95%_55%/0.3)] active:scale-[0.97]">
            Start a Conversation
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-grain relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] rounded-full bg-terracotta-light blur-[120px] opacity-40" />
      <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] rounded-full bg-sage-light blur-[100px] opacity-40" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4 block font-bold">
            Let's Work Together
          </span>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ textWrap: "balance" }}
          >
            Ready to grow your
            <br />
            business <span className="text-gradient-warm">digitally?</span>
          </h2>
          <p className="max-w-lg mx-auto text-muted-foreground text-lg mb-10 leading-relaxed">
            Whether you need a stunning website or a powerful Facebook strategy, Alifle Online is here for you. Let's make it happen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button className="group flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button className="flex items-center gap-3 px-8 py-4 border-2 border-border text-foreground font-medium rounded-full transition-all duration-200 hover:border-primary/40 hover:bg-card active:scale-[0.97]">
            <Phone className="w-4 h-4" />
            Book a Call
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <Mail className="w-4 h-4" />
          hello@alifleonline.com
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

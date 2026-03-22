import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Handshake, Award, HeartHandshake, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Results You Can Trust",
    desc: "Transparent reporting, real metrics, zero guesswork. Every shilling of your ad spend is accounted for.",
  },
  {
    icon: Clock,
    title: "Always Available",
    desc: "We respond fast. Your business doesn't stop, and neither do we. Expect same-day replies.",
  },
  {
    icon: Handshake,
    title: "We Understand East Africa",
    desc: "Local market knowledge combined with global-standard execution. We know what works here.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "80+ businesses trust us across Kenya, Tanzania, and Uganda. Our results speak louder than promises.",
  },
  {
    icon: HeartHandshake,
    title: "Your Growth Partner",
    desc: "We don't just deliver a service — we become invested in your success like it's our own.",
  },
  {
    icon: Lightbulb,
    title: "Smart Strategies",
    desc: "We don't throw money at ads. Every campaign is built on data, insight, and deep understanding of your audience.",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-grain relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-terracotta-light blur-[150px] opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4 block font-bold">
            Why Alifle Online
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ textWrap: "balance" }}>
            Your business deserves
            <br />
            <span className="text-muted-foreground">a team that delivers.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="card-warm-hover p-7 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-terracotta-light flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

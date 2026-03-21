import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Palette, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We learn about your business, goals, and audience in East Africa to craft the perfect strategy.",
  },
  {
    num: "02",
    icon: Palette,
    title: "Design & Plan",
    description: "Our team creates mockups and strategies tailored to your brand and the East African market.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Build & Launch",
    description: "We develop, test, and launch your project with attention to every detail.",
  },
  {
    num: "04",
    icon: HeadphonesIcon,
    title: "Grow & Support",
    description: "Ongoing management, optimization, and support to keep your business growing.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} id="process" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4 block font-bold">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ textWrap: "balance" }}>
            Simple steps to
            <br />
            <span className="text-muted-foreground">big results.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 md:p-8"
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 w-full h-[1px] bg-border translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                <span className="font-mono text-5xl font-bold text-border mb-4 block">{step.num}</span>
                <div className="w-12 h-12 rounded-xl bg-terracotta-light flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

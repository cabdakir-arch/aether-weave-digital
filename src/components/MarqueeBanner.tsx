import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const marqueeItems = [
  "Facebook Ads", "Web Design", "Social Media", "SEO", "Content Strategy",
  "E-Commerce", "Brand Identity", "Analytics", "Community Management", "UI/UX",
];

const MarqueeBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="py-8 border-y border-border overflow-hidden"
    >
      <div className="flex animate-marquee">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 px-8 text-lg md:text-xl font-medium text-muted-foreground/50 whitespace-nowrap"
          >
            {item} <span className="text-primary/40 mx-4">✦</span>
          </span>
        ))}
      </div>
    </motion.section>
  );
};

export default MarqueeBanner;

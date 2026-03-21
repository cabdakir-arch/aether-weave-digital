import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Facebook, Megaphone, Code, Smartphone, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Facebook,
    title: "Facebook Management",
    description: "From page setup to ad campaigns — we manage your entire Facebook presence so you can focus on running your business.",
    features: ["Ad Campaign Management", "Content Creation & Scheduling", "Community Engagement", "Performance Analytics"],
    color: "bg-terracotta-light",
    iconColor: "text-primary",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Beautiful, fast, mobile-first websites built for East African businesses. From portfolios to full e-commerce platforms.",
    features: ["Custom Website Design", "E-Commerce Solutions", "Mobile Responsive", "Hosting & Maintenance"],
    color: "bg-sage-light",
    iconColor: "text-secondary-foreground",
  },
];

const extras = [
  { icon: Megaphone, title: "Social Media Strategy", desc: "Reach your ideal audience across platforms" },
  { icon: Code, title: "Custom Web Apps", desc: "Tailored solutions for your unique needs" },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Optimized for the way Africa browses" },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Sell online to customers across East Africa" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} id="services" className="relative py-24 md:py-32 bg-grain">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4 block font-bold">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ textWrap: "balance" }}>
            Two services, one mission:
            <br />
            <span className="text-muted-foreground">your growth.</span>
          </h2>
        </motion.div>

        {/* Main service cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="card-warm-hover p-8 md:p-10 relative overflow-hidden"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} rounded-bl-[80px] opacity-30`} />
            </motion.div>
          ))}
        </div>

        {/* Extra services grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {extras.map((extra, i) => (
            <motion.div
              key={extra.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-warm-hover p-6 text-center"
            >
              <extra.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm mb-1">{extra.title}</h4>
              <p className="text-xs text-muted-foreground">{extra.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

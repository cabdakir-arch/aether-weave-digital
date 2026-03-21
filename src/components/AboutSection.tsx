import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="about" className="py-24 md:py-32 bg-grain">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0)" } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4 block font-bold">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ textWrap: "balance" }}>
              Born in East Africa.
              <br />
              <span className="text-muted-foreground">Built for East Africa.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Alifle Online was founded with a clear mission — to help East African businesses thrive in the digital age. We understand the local market, the culture, and the unique challenges businesses face in Kenya, Tanzania, Uganda, Rwanda, and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team combines deep technical expertise with local market knowledge to deliver results that truly matter for your business.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: MapPin, label: "East Africa Focused" },
                { icon: Heart, label: "Client-First Approach" },
                { icon: Users, label: "Local Expert Team" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-terracotta-light flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0)" } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "80+", label: "Happy Clients", bg: "bg-terracotta-light" },
              { value: "5+", label: "Countries Served", bg: "bg-sage-light" },
              { value: "200+", label: "Projects Completed", bg: "bg-sage-light" },
              { value: "3yrs", label: "In Business", bg: "bg-terracotta-light" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`${stat.bg} rounded-2xl p-6 md:p-8 text-center transition-shadow duration-300 hover:shadow-lg`}
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 font-mono">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

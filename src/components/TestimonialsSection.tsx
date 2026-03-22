import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Facebook } from "lucide-react";

const testimonials = [
  {
    name: "Amina Hassan",
    role: "CEO, Savanna Boutique",
    location: "Nairobi, Kenya",
    text: "Alifle Online transformed our Facebook presence. Our ads now reach thousands across Nairobi, and our online sales tripled in just two months. They truly understand the East African market.",
    rating: 5,
    service: "Facebook Management",
  },
  {
    name: "Joseph Mwangi",
    role: "Founder, TechHub Dar",
    location: "Dar es Salaam, Tanzania",
    text: "Their Facebook ad campaigns brought us 200+ qualified leads in the first month. The targeting was so precise — every shilling was well spent. Highly recommend their services.",
    rating: 5,
    service: "Facebook Ads",
  },
  {
    name: "Grace Nakamura",
    role: "Director, Green Farms Uganda",
    location: "Kampala, Uganda",
    text: "Working with Alifle Online was the best decision for our business. They managed our entire Facebook presence and engagement grew by over 400% in three months.",
    rating: 5,
    service: "Facebook Management",
  },
  {
    name: "Omar Said",
    role: "Owner, Spice Route Restaurant",
    location: "Mombasa, Kenya",
    text: "From the website design to the social media campaigns, everything was delivered on time and exceeded expectations. Our reservations have doubled since working with them.",
    rating: 5,
    service: "Web + Facebook",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4 block font-bold">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ textWrap: "balance" }}>
            Businesses trust us
            <br />
            <span className="text-muted-foreground">to deliver results.</span>
          </h2>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="card-warm p-8 relative overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs font-mono text-primary/70 px-2 py-1 rounded-full bg-primary/5">{t.service}</span>
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terracotta-light flex items-center justify-center font-bold text-primary text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="card-warm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs font-mono text-primary/70">{testimonials[current].service}</span>
            </div>
            <p className="text-foreground leading-relaxed mb-6 italic text-sm">"{testimonials[current].text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-terracotta-light flex items-center justify-center font-bold text-primary text-sm">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-sm">{testimonials[current].name}</div>
                <div className="text-xs text-muted-foreground">{testimonials[current].role} · {testimonials[current].location}</div>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors active:scale-95">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm text-muted-foreground font-mono">{current + 1} / {testimonials.length}</span>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors active:scale-95">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

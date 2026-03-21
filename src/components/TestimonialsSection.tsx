import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Amina Hassan",
    role: "CEO, Savanna Boutique",
    location: "Nairobi, Kenya",
    text: "Alifle Online transformed our online presence completely. Our Facebook ads now reach thousands of customers across Nairobi, and our new website has tripled our online sales.",
    rating: 5,
  },
  {
    name: "Joseph Mwangi",
    role: "Founder, TechHub Dar",
    location: "Dar es Salaam, Tanzania",
    text: "Their understanding of the East African market is unmatched. The web app they built for us handles thousands of users daily without a hitch. Truly professional team.",
    rating: 5,
  },
  {
    name: "Grace Nakamura",
    role: "Director, Green Farms Uganda",
    location: "Kampala, Uganda",
    text: "Working with Alifle Online was the best decision for our business. They managed our entire Facebook presence and the engagement grew by over 400% in just three months.",
    rating: 5,
  },
  {
    name: "Omar Said",
    role: "Owner, Spice Route Restaurant",
    location: "Mombasa, Kenya",
    text: "From the website design to the social media campaigns, everything was delivered on time and exceeded our expectations. Our reservations have doubled since working with them.",
    rating: 5,
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
            Loved by businesses
            <br />
            <span className="text-muted-foreground">across the region.</span>
          </h2>
        </motion.div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-warm p-8 relative overflow-hidden"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-accent text-accent" />
                ))}
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

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="card-warm p-6"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, si) => (
                <Star key={si} className="w-4 h-4 fill-accent text-accent" />
              ))}
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

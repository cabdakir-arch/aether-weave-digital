import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-bold text-xl tracking-tight text-foreground">
          Alifle <span className="text-primary">Online</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative transition-colors duration-200 hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <button className="px-6 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <button className="mt-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full active:scale-[0.97]">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

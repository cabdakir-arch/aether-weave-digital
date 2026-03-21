import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="font-bold text-lg tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span>NEXADEV</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="transition-colors duration-200 hover:text-foreground">Services</a>
          <a href="#work" className="transition-colors duration-200 hover:text-foreground">Work</a>
          <a href="#about" className="transition-colors duration-200 hover:text-foreground">About</a>
          <button className="px-5 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-md transition-all duration-200 hover:shadow-[0_0_20px_hsl(52_95%_55%/0.25)] active:scale-[0.97]">
            Contact
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <button className="mt-2 px-5 py-3 bg-primary text-primary-foreground font-medium rounded-md active:scale-[0.97]">
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

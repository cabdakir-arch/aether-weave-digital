import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="font-bold text-xl text-background mb-4">
              Alifle <span className="text-primary">Online</span>
            </div>
            <p className="text-sm text-background/50 leading-relaxed mb-4">
              Growing brands across East Africa through expert Facebook management and web development.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm">
              {["Facebook Management", "Ad Campaigns", "Web Development", "E-Commerce Solutions"].map((s) => (
                <li key={s}><a href="#" className="hover:text-primary transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Our Process", "Testimonials", "Contact"].map((s) => (
                <li key={s}><a href="#" className="hover:text-primary transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> East Africa</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary flex-shrink-0" /> +254 700 000 000</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary flex-shrink-0" /> hello@alifleonline.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/40">
          © 2026 Alifle Online. All rights reserved. Proudly serving East Africa.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

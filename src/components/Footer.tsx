const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-medium text-foreground">
          <span className="w-2 h-2 rounded-full bg-primary" />
          NEXADEV
        </div>
        <p>© 2026 All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors duration-200">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

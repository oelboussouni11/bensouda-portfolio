const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-serif text-sm text-foreground">
        Omar Bensouda<span className="text-primary">.</span>
      </p>
      <p className="text-xs text-muted-foreground font-sans tracking-wide">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

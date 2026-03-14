import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Youtube, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary font-sans mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Let's <span className="italic">Work</span> Together
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center gap-10"
        >
          {/* Main CTA links */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <a
              href="mailto:hello@omarbensouda.com"
              className="flex-1 flex items-center justify-center gap-3 py-4 px-6 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-sans text-xs tracking-[0.2em] uppercase"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 font-sans text-xs tracking-[0.2em] uppercase"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>

          {/* Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center w-full pt-6 border-t border-border">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-2">Email</p>
              <a href="mailto:hello@omarbensouda.com" className="font-sans text-sm text-foreground hover:text-primary transition-colors">
                hello@omarbensouda.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-2">Phone</p>
              <a href="tel:+212600000000" className="font-sans text-sm text-foreground hover:text-primary transition-colors">
                +212 6 00 00 00 00
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-2">Based in</p>
              <p className="font-sans text-sm text-foreground">Morocco</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-6 pt-2">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

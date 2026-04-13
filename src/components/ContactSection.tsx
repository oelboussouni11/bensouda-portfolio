import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Phone } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const INSTAGRAM_URL = "https://www.instagram.com/omateurraw?igsh=M2R6dG1vdGd3OXlj";
const WHATSAPP_URL = "https://wa.me/212674067002";

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
          {/* QR Codes */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="p-4 bg-card border border-border rounded-sm group-hover:border-primary transition-colors duration-300">
                <QRCodeSVG
                  value={INSTAGRAM_URL}
                  size={140}
                  bgColor="transparent"
                  fgColor="hsl(0, 0%, 80%)"
                  level="M"
                />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                <Instagram size={16} />
                <span className="text-xs tracking-[0.2em] uppercase font-sans">Instagram</span>
              </div>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="p-4 bg-card border border-border rounded-sm group-hover:border-primary transition-colors duration-300">
                <QRCodeSVG
                  value={WHATSAPP_URL}
                  size={140}
                  bgColor="transparent"
                  fgColor="hsl(0, 0%, 80%)"
                  level="M"
                />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                <Phone size={16} />
                <span className="text-xs tracking-[0.2em] uppercase font-sans">WhatsApp</span>
              </div>
            </a>
          </div>

          {/* Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center w-full pt-6 border-t border-border">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-2">Phone</p>
              <a href="tel:+212674067002" className="font-sans text-sm text-foreground hover:text-primary transition-colors">
                +212 674-067002
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-2">Based in</p>
              <p className="font-sans text-sm text-foreground">Morocco</p>
            </div>
          </div>

          {/* Social link */}
          <div className="flex gap-6 pt-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

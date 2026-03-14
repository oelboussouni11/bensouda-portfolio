import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-36 bg-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Image placeholder */}
          <div className="aspect-[3/4] bg-secondary-foreground/10 rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-foreground/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-6xl text-secondary-foreground/20 italic">OB</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-accent font-sans mb-4">
              About Me
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground leading-tight mb-6">
              Telling stories that <span className="italic">move</span> people.
            </h2>
            <p className="font-sans text-sm md:text-base text-secondary-foreground/70 leading-relaxed mb-4">
              I'm Omar Bensouda — a videographer and photographer based in Morocco, 
              passionate about capturing raw emotions and cinematic moments. From brand films 
              to editorial portraits, every frame is crafted with intention.
            </p>
            <p className="font-sans text-sm md:text-base text-secondary-foreground/70 leading-relaxed">
              With years of experience behind the lens, I bring a unique perspective 
              that blends documentary authenticity with artistic vision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

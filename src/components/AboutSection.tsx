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
          <div className="aspect-[3/4] bg-secondary-foreground/10 rounded-sm overflow-hidden relative">
            <img
              src="/img/omar-profile.jpg"
              alt="Omar Bensouda"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary-foreground/20" />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-accent font-sans mb-4">
              About
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground leading-tight mb-2">
              Omar Bensouda, <span className="italic">Omateur</span>
            </h2>
            <p className="font-sans text-sm text-secondary-foreground/50 leading-relaxed mb-6">
              Camera in one hand.<br />
              Ideas in the other.
            </p>
            <p className="font-sans text-sm md:text-base text-secondary-foreground/70 leading-relaxed mb-6">
              Film director.<br />
              Videographer.<br />
              Photographer.<br />
              Graphic designer.<br />
              Art director.
            </p>
            <p className="font-sans text-sm md:text-base text-secondary-foreground/70 leading-relaxed mb-6">
              I create visuals, stories and concepts that live somewhere between cinema, design and experimentation.
            </p>
            <p className="font-sans text-sm text-secondary-foreground/50 leading-relaxed italic">
              Some projects move.<br />
              Some stay still.<br />
              All of them try to say something.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

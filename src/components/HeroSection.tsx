import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

const HeroSection = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 25, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 25, damping: 20 });

  const glowLeft = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glowTop = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Cursor-following red glow */}
      <motion.div
        className="pointer-events-none absolute w-[700px] h-[700px] rounded-full"
        style={{
          left: glowLeft,
          top: glowTop,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, hsl(359 83% 53% / 0.14) 0%, hsl(359 83% 53% / 0.05) 35%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,hsl(359_83%_53%/0.04)_0%,transparent_60%)]" />

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-sans text-xs md:text-sm uppercase text-primary mb-6"
          >
            Videographer & Photographer
          </motion.p>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium text-foreground leading-[0.9] tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="inline-block"
            >
              Omar
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="inline-block italic text-primary"
            >
              Bensouda
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-sm md:text-base text-muted-foreground mt-8 max-w-md mx-auto leading-relaxed"
          >
            Capturing stories through light, motion & emotion.
          </motion.p>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <ChevronDown size={16} className="animate-scroll-hint" />
      </motion.a>
    </section>
  );
};

export default HeroSection;

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const videoProjects = projects.filter((p) => p.category === "videography");

const ShowreelSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="showreel" className="py-24 md:py-36 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary font-sans mb-4">Motion</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Video <span className="italic">Showreel</span>
          </h2>
        </motion.div>

        {/* Main video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-video bg-card border border-border rounded-sm overflow-hidden relative group cursor-pointer mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
              <Play size={28} className="text-primary group-hover:text-primary-foreground ml-1 transition-colors" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <p className="font-serif text-xl text-foreground">Showreel 2026</p>
            <p className="text-xs text-muted-foreground font-sans tracking-wide mt-1">Full Portfolio Reel</p>
          </div>
        </motion.div>

        {/* Video thumbnails linking to detail */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {videoProjects.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
            >
              <Link
                to={`/project/${video.id}`}
                className="aspect-video bg-card border border-border rounded-sm overflow-hidden relative group cursor-pointer block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center bg-primary/20">
                    <Play size={16} className="text-primary ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-serif text-sm text-foreground">{video.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;

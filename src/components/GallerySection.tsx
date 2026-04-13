import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectLightbox from "./ProjectLightbox";

const GallerySection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section id="gallery" className="py-24 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary font-sans mb-4">Portfolio</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              Selected <span className="italic">Works</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <button
                  onClick={() => setSelectedProject(item)}
                  className="group relative overflow-hidden block w-full text-left cursor-pointer"
                >
                  <div className="aspect-video bg-muted relative rounded-sm overflow-hidden">
                    <video
                      src={item.videoSrc}
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play size={18} className="text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="font-serif text-sm text-white">{item.title}</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={(p) => setSelectedProject(p)}
      />
    </>
  );
};

export default GallerySection;

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import ProjectLightbox from "./ProjectLightbox";

type Filter = "all" | ProjectCategory;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Photography", value: "photography" },
  { label: "Videography", value: "videography" },
];

const GallerySection = () => {
  const [active, setActive] = useState<Filter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "all" ? projects : projects.filter((i) => i.category === active);

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

          <div className="flex justify-center gap-4 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`text-xs tracking-[0.3em] uppercase font-sans px-4 py-2 transition-all duration-300 border ${
                  active === f.value
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => setSelectedProject(item)}
                  className="group relative overflow-hidden block w-full text-left cursor-pointer"
                >
                  <div className={`${item.aspect} bg-muted relative`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-4xl text-muted-foreground/20 italic">
                        {String(projects.indexOf(item) + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-500 flex items-end p-6">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/70 font-sans">
                          {item.category}
                        </p>
                        <p className="font-serif text-lg text-primary-foreground mt-1">{item.title}</p>
                      </div>
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

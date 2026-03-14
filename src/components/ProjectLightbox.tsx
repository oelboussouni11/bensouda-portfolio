import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { projects, type Project } from "@/data/projects";

interface ProjectLightboxProps {
  project: Project | null;
  onClose: () => void;
  onNavigate: (project: Project) => void;
}

const ProjectLightbox = ({ project, onClose, onNavigate }: ProjectLightboxProps) => {
  const currentIndex = project ? projects.findIndex((p) => p.id === project.id) : -1;
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && prevProject) onNavigate(prevProject);
      if (e.key === "ArrowRight" && nextProject) onNavigate(nextProject);
    },
    [onClose, onNavigate, prevProject, nextProject]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  const isVideo = project?.category === "videography";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col"
          onClick={onClose}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
              {currentIndex + 1} / {projects.length}
            </p>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main content */}
          <div className="flex-1 flex items-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Left arrow */}
            <button
              onClick={() => prevProject && onNavigate(prevProject)}
              className={`shrink-0 w-16 md:w-24 h-full flex items-center justify-center transition-colors ${
                prevProject ? "text-muted-foreground hover:text-foreground cursor-pointer" : "text-muted/30 cursor-default"
              }`}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Center: image + info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="flex-1 h-full flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center px-2"
              >
                {/* Image area */}
                <div className="relative w-full md:w-3/5 max-h-[60vh] md:max-h-[75vh] aspect-[4/3] bg-muted rounded-sm overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-8xl md:text-[10rem] text-muted-foreground/10 italic select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-500 cursor-pointer group">
                        <Play size={28} className="text-primary group-hover:text-primary-foreground ml-1 transition-colors" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Project info */}
                <div className="w-full md:w-2/5 max-w-md space-y-6 pb-6 md:pb-0">
                  <div>
                    <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-sans mb-2">
                      {project.category}
                    </p>
                    <h2 className="font-serif text-3xl md:text-5xl text-foreground">{project.title}</h2>
                  </div>

                  <div className="flex gap-8 border-t border-b border-border py-4">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-1">Year</p>
                      <p className="font-sans text-sm text-foreground">{project.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-1">Location</p>
                      <p className="font-sans text-sm text-foreground">{project.location}</p>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right arrow */}
            <button
              onClick={() => nextProject && onNavigate(nextProject)}
              className={`shrink-0 w-16 md:w-24 h-full flex items-center justify-center transition-colors ${
                nextProject ? "text-muted-foreground hover:text-foreground cursor-pointer" : "text-muted/30 cursor-default"
              }`}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectLightbox;

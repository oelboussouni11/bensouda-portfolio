import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";

const photos = [
  "/albums/cupra-event/DSC08597.jpg",
  "/albums/cupra-event/DSC08485.jpg",
  "/albums/cupra-event/DSC08537.jpg",
  "/albums/cupra-event/DSC00372_1.jpg",
  "/albums/cupra-event/DSC00539.jpg",
  "/albums/cupra-event/DSC00543.jpg",
  "/albums/cupra-event/DSC00544.jpg",
  "/albums/cupra-event/DSC01568.jpg",
  "/albums/cupra-event/DSC01720.jpg",
  "/albums/cupra-event/DSC02702.jpg",
  "/albums/cupra-event/DSC03191.jpg",
  "/albums/cupra-event/DSC03213.jpg",
  "/albums/cupra-event/DSC03271_2.jpg",
  "/albums/cupra-event/DSC05775.jpg",
  "/albums/cupra-event/DSC05919.jpg",
  "/albums/cupra-event/DSC05963.jpg",
  "/albums/cupra-event/DSC06043.jpg",
  "/albums/cupra-event/DSC06132.jpg",
  "/albums/cupra-event/DSC09372.jpg",
  "/albums/cupra-event/DSC09376_1.jpg",
  "/albums/cupra-event/DSC09384.jpg",
];

const PhotoAlbumsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const close = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  const open = (i: number) => {
    setSelected(i);
    document.body.style.overflow = "hidden";
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft" && selected > 0) setSelected(selected - 1);
      if (e.key === "ArrowRight" && selected < photos.length - 1) setSelected(selected + 1);
    },
    [selected]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <section id="photos" className="py-24 md:py-36 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary font-sans mb-4">Photography</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              Selected <span className="italic">Photos</span>
            </h2>
          </motion.div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
            {photos.map((src, i) => (
              <motion.button
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.6) }}
                onClick={() => open(i)}
                className="block w-full mb-3 md:mb-4 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm"
              >
                <img
                  src={src}
                  alt={`Photo ${i + 1}`}
                  loading="lazy"
                  className="w-full rounded-sm group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex items-center justify-center"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <p className="absolute top-6 left-6 text-xs tracking-[0.3em] uppercase text-white/40 font-sans">
              {selected + 1} / {photos.length}
            </p>

            {selected > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(selected - 1);
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
            )}

            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={photos[selected]}
              alt={`Photo ${selected + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-sm"
            />

            {selected < photos.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(selected + 1);
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-colors rotate-180"
              >
                <ArrowLeft size={24} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoAlbumsSection;

export type ProjectCategory = "photography" | "videography";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  aspect: string;
  description: string;
  date: string;
  location: string;
}

export const projects: Project[] = [
  { id: "urban-shadows", title: "Urban Shadows", category: "photography", aspect: "aspect-[3/4]", description: "A series exploring the interplay of light and darkness in Moroccan urban landscapes.", date: "2025", location: "Casablanca" },
  { id: "golden-hour", title: "Golden Hour", category: "photography", aspect: "aspect-[4/3]", description: "Portraits bathed in the warm glow of the Moroccan golden hour.", date: "2025", location: "Marrakech" },
  { id: "brand-film", title: "Brand Film", category: "videography", aspect: "aspect-[16/9]", description: "A cinematic brand film capturing the essence of a luxury resort.", date: "2026", location: "Essaouira" },
  { id: "portrait-series", title: "Portrait Series", category: "photography", aspect: "aspect-[3/4]", description: "Intimate editorial portraits showcasing raw emotion and character.", date: "2025", location: "Rabat" },
  { id: "wedding-reel", title: "Wedding Reel", category: "videography", aspect: "aspect-[4/3]", description: "A highlight reel from a beautiful destination wedding.", date: "2025", location: "Tangier" },
  { id: "street-life", title: "Street Life", category: "photography", aspect: "aspect-[1/1]", description: "Documentary photography of everyday moments in the medina.", date: "2024", location: "Fes" },
  { id: "documentary", title: "Documentary", category: "videography", aspect: "aspect-[16/9]", description: "A short documentary exploring traditional Moroccan craftsmanship.", date: "2025", location: "Chefchaouen" },
  { id: "architecture", title: "Architecture", category: "photography", aspect: "aspect-[3/4]", description: "Geometric beauty in modern and traditional Moroccan architecture.", date: "2026", location: "Casablanca" },
];

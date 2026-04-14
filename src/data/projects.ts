export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  videoSrc: string;
}

const CDN = "https://pub-20adc492c7ab4f71b2244ee89738cbd2.r2.dev/assets-compressed";

export const projects: Project[] = [
  {
    id: "best-of-egypt",
    title: "Best of Egypt",
    description: "A cinematic highlight reel capturing the best moments from Egypt.",
    date: "2025",
    location: "Egypt",
    videoSrc: `${CDN}/BEST%20OFF%20EGYPT%20.mp4`,
  },
  {
    id: "intro-egypt",
    title: "Intro Egypt",
    description: "Cinematic introduction capturing the spirit and energy of Egypt.",
    date: "2025",
    location: "Egypt",
    videoSrc: `${CDN}/INTRO%20EGYPT.mp4`,
  },
  {
    id: "egypt-with-cupra",
    title: "Egypt with Cupra",
    description: "Full coverage of the Cupra event in Egypt — high energy, raw moments.",
    date: "2025",
    location: "Egypt",
    videoSrc: `${CDN}/EGYPT%20WITH%20CUPRA.mp4`,
  },
  {
    id: "kawtar-x-cupra",
    title: "Kawtar x Cupra",
    description: "A creative collaboration blending fashion and automotive culture.",
    date: "2025",
    location: "Morocco",
    videoSrc: `${CDN}/KAWTAR%20X%20CUPRA.mp4`,
  },
  {
    id: "layali-padel",
    title: "Layali Padel",
    description: "Dynamic coverage of the Layali Padel event — sport, energy, and atmosphere.",
    date: "2025",
    location: "Morocco",
    videoSrc: `${CDN}/LAYALI%20PADEL.mp4`,
  },
  {
    id: "padelfip-agadir",
    title: "PadelFIP Agadir",
    description: "Official event film for PadelFIP in Agadir — competition at its finest.",
    date: "2025",
    location: "Agadir",
    videoSrc: `${CDN}/PADELFIP%20AGADIR.mp4`,
  },
  {
    id: "rush-drop",
    title: "Rush Drop",
    description: "Fast-paced, adrenaline-fueled edit — pure energy and motion.",
    date: "2025",
    location: "Morocco",
    videoSrc: `${CDN}/RUSH%20DROP.mp4`,
  },
  {
    id: "rush-project-co-hustler",
    title: "Rush Project Co Hustler",
    description: "A collaborative project with Co Hustler — bold visuals, sharp editing.",
    date: "2025",
    location: "Morocco",
    videoSrc: `${CDN}/RUSH%20PROJECT%20CO%20HUSTLER.mp4`,
  },
  {
    id: "sunday-with-charif",
    title: "Sunday with Charif",
    description: "A laid-back Sunday session with Charif — authentic vibes, real moments.",
    date: "2025",
    location: "Morocco",
    videoSrc: `${CDN}/Sunday%20with%20Charif.mp4`,
  },
];

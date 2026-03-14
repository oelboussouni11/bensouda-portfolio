# Omar Bensouda — Portfolio

Personal portfolio website for **Omar Bensouda**, a videographer and photographer based in Morocco. A single-page application with a dark, cinematic aesthetic featuring smooth animations and an interactive gallery.

## Tech Stack

| Layer        | Technology                            |
| ------------ | ------------------------------------- |
| Framework    | React 18 + TypeScript                 |
| Build Tool   | Vite 5 (SWC)                          |
| Styling      | Tailwind CSS 3 + tailwindcss-animate  |
| UI Library   | shadcn/ui (Radix primitives)          |
| Animations   | Framer Motion                         |
| Routing      | React Router DOM v6                   |
| Icons        | Lucide React                          |
| Testing      | Vitest + Testing Library + Playwright |

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui base components
│   ├── Navbar.tsx        # Fixed side-dot nav (desktop) + hamburger (mobile)
│   ├── HeroSection.tsx   # Full-screen hero with cursor-following glow
│   ├── AboutSection.tsx  # Bio / about section
│   ├── GallerySection.tsx# Filterable masonry grid with lightbox
│   ├── ProjectLightbox.tsx
│   ├── ShowreelSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── NavLink.tsx
├── data/
│   └── projects.ts       # Project entries (photography & videography)
├── hooks/                # Custom React hooks
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
├── pages/
│   ├── Index.tsx          # Main portfolio page
│   └── NotFound.tsx       # 404 page
├── App.tsx                # App root with providers and routes
├── main.tsx               # Entry point
└── index.css              # Global styles + Tailwind directives
```

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [Bun](https://bun.sh/) (recommended) or npm

## Getting Started

### 1. Install dependencies

```sh
bun install
```

Or with npm:

```sh
npm install
```

### 2. Start the dev server

```sh
bun run dev
```

The app will be available at **http://localhost:8080**.

### 3. Build for production

```sh
bun run build
```

The output will be in the `dist/` directory. You can preview it locally with:

```sh
bun run preview
```

## Available Scripts

| Command            | Description                                |
| ------------------ | ------------------------------------------ |
| `bun run dev`      | Start Vite dev server with HMR             |
| `bun run build`    | Production build                           |
| `bun run build:dev`| Development build (unminified)             |
| `bun run preview`  | Serve the production build locally         |
| `bun run lint`     | Run ESLint                                 |
| `bun run test`     | Run unit tests (Vitest)                    |
| `bun run test:watch`| Run unit tests in watch mode              |

## Sections

1. **Hero** — Animated intro with cursor-following glow effect, film grain texture, and staggered text reveals.
2. **About** — Bio and background information.
3. **Gallery** — Filterable masonry grid (All / Photography / Videography) with hover overlays and a full-screen lightbox.
4. **Showreel** — Video showreel section.
5. **Contact** — Contact form / information.
6. **Footer** — Site footer with links.

## Customization

- **Projects**: Edit `src/data/projects.ts` to add, remove, or update portfolio entries.
- **Theme colors**: Modify CSS variables in `src/index.css` and `tailwind.config.ts`.
- **Sections**: Each section is a standalone component in `src/components/` and can be reordered or removed from `src/pages/Index.tsx`.

## Deployment

The production build (`dist/`) is a static site and can be deployed to any static hosting provider:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist/` folder or connect your repo
- **GitHub Pages**: Use a GitHub Action to build and deploy

## License

All rights reserved. This portfolio and its contents are the property of Omar Bensouda.

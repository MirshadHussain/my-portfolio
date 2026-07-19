# Cinematic 3D Personal Portfolio | Mirshad Hussain

A production-grade, highly performant personal portfolio built for modern browser rendering. This codebase implements design patterns optimized for speed, accessibility, bundle efficiency, and search engine discoverability.

---

## 🚀 Tech Stack & Design Architecture

- **Core Framework**: React 19 + Vite 8
- **WebGL Rendering**: Three.js + React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS v4 (using CSS variables-first configuration)
- **Smooth Scrolling**: Lenis
- **Linting**: Oxlint

---

## ⚡ Engineering Optimizations

### 1. Advanced Code-Splitting
- **Dynamic Route Imports**: All major page views (`Home`, `Projects`, `About`, `Contact`) load dynamically via `React.lazy()` and are wrapped in visual `<Suspense>` boundaries.
- **WebGL Lazy Loading**: The Three.js WebGL canvas engine (~900KB minified) is isolated in its own code block and only mounts on desktop viewports. This keeps the initial bundle size below 380KB.

### 2. Full Accessibility (A11y)
- **Semantic HTML**: Custom divs with click events have been refactored into accessible `<button>` tags with dedicated focus states.
- **ARIA Integration**: Includes dynamic progressbar indicators (`role="progressbar"`), semantic forms, linked inputs (`htmlFor` + `useId`), dialog wrappers, and tab groups (`role="tablist"` + `role="tab"`).
- **Keyboard Navigation**: The interface supports focus tracking, Escape dismiss triggers for navigation drawers, and outline highlights.

### 3. Motion Accessibility (`prefers-reduced-motion`)
- **Framer Motion Integration**: Wrapped in `<MotionConfig reducedMotion="user">` to scale down all component animations dynamically according to user OS preferences.
- **Lenis Smooth-Scroll Guard**: Prevents initialization of the smooth scroll engine if the user prefers reduced motion.
- **CSS Overrides**: Configured instant transition and animation overrides for standard CSS behaviors under reduced motion preferences.

### 4. SEO & Search Engine Optimization
- **Asynchronous Font Loading**: Implements non-render-blocking async loading for Google Fonts using print media swaps.
- **JSON-LD Schema Markup**: Injects Person-based structured data on page load for automated search engines.
- **Sitemap & Robots Configuration**: Auto-configured sitemap index and crawl instructions for search indexing.
- **Metadata Management**: Detailed Open Graph and Twitter Card tags configured.

### 5. Media Optimization
- **Bandwidth Shield**: Disables autoplay background video on mobile screens, utilizing optimized `/hero-bg-fallback.webp` assets instead.
- **WebP Support**: Converted PNG assets to WebP for faster page load times.

---

## 🛠️ Local Development & Scripts

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Production Build

Compiles chunks and generates optimized output under `dist/`:

```bash
npm run build
```

---

## 📦 Directory Structure

- `/src/components/canvas/`: Three.js scene modules.
- `/src/components/layout/`: Global navigation and layout wrappers.
- `/src/components/ui/`: Reusable, design-system compliant widgets.
- `/src/components/sections/`: Specialized sub-sections (about, contact, projects).
- `/src/data/`: Centralized content schemas.
- `/public/`: Lightweight optimized assets.

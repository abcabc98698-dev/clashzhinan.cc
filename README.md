# Clash指南 (ClashZhinan)

> A curated technical knowledge base, network topology journal, and digital gallery with minimalist aesthetics.

## Features

- **Ultra-minimalist design** with glassmorphism UI and architectural typography
- **Smooth dark mode** with native View Transitions API
- **Curated Photography Gallery**:
  - Compact 16:10 album catalog directory
  - Dual viewing modes: **Stage** (cinematic spotlight) & **Wall** (masonry grid)
  - Fullscreen Lightbox mounted via React Portal with light/dark adaptive backdrops
- **Traces Explorer**:
  - Interactive cartographic field journal powered by Leaflet
  - Route tracking, environmental baseline data, and coordinates
- **Dual Search Architecture**:
  - Local client-side full-text search with **Pagefind**
  - AI semantic vector search via **Model Context Protocol (MCP)**
- **Modern stack**: Astro 7 + React 19 + Tailwind CSS 4 + TypeScript 6 + Motion 14
- **MDX & KaTeX support** for mathematical notations and rich interactive components
- **SEO optimized** with schema.org JSON-LD, sitemaps, OpenGraph, and RSS feed

## Tech Stack

- **Framework**: [Astro 7.4](https://astro.build/) - Zero JS by default, static pre-rendering
- **UI Library**: [React 19.3](https://react.dev/) - Interactive components & client islands
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Custom `@theme` tokens and modern CSS features
- **Animations**: [Motion 14](https://motion.dev/) (Framer Motion)
- **Icons**: [Remix Icon](https://remixicon.com/) (`@remixicon/react`)
- **Maps**: [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
- **Search**: [Pagefind](https://pagefind.app/)

## Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server at http://localhost:4321
pnpm run dev

# Build for production
pnpm run build
```

## License

MIT © ClashZhinan

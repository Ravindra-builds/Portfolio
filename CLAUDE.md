# Claude & AI Assistant Guidelines for Ravindra Yadav's Portfolio

@AGENTS.md

## Project Overview
Personal portfolio and systems engineering showcase for **Ravindra Yadav**, an AI & Full-Stack Systems Engineer.
- **Framework**: Next.js 16 (App Router with Turbopack)
- **UI Library**: React 19, Tailwind CSS v4, Framer Motion
- **Design Aesthetic**: Obsidian Basalt (`#0E0F12`) & Museum Gallery Vellum (`#FBFBFA`) with warm golden amber accents (`#F59E0B`).
- **Typography**: Geist (sans), Geist Mono (mono), Instrument Serif (variable serif italic).
- **Brand Mark**: Custom circular metallic gold `RY` monogram (`/ry-logo.png`).

---

## Key Architecture & Conventions

### 1. Next.js 16 / React 19 Rules
- **No Cascading Renders**: Never call `setState` synchronously within a `useEffect` body. State transitions and track scrolling must be initiated directly inside user event handlers (e.g., `handleFilterChange`).
- **Modern App Router**: Follow Next.js 16 App Router conventions. Avoid deprecated `next/router` or legacy `pages/` APIs.
- **Client Boundaries**: Clearly mark client components with `"use client"` where state, refs, event handlers, or browser APIs are required.

### 2. Carousel & Interactive Components
- **Horizontal Carousels**: Multi-item sections (`projects.tsx`, `certificates.tsx`, `blog.tsx`) use horizontal CSS scroll-snapping (`snap-x snap-mandatory no-scrollbar`) with interactive dotted visual progress indicators.
- **Scroll-Linked Timeline**: The career trajectory in `timeline.tsx` utilizes Framer Motion's `useScroll` with spring physics to progressively draw the golden gradient spine, glide the laser beacon, and illuminate milestone circles upon contact.

### 3. Typography & Kerning Standards
- **Instrument Serif Italic**: When using `font-serif italic text-amber-600 dark:text-amber-400 text-[1.12em]`, always pair it with `inline-block pr-2 mr-2` followed by explicit `{" "}` space to prevent italic rightward overhang from colliding with adjacent words.

---

## Common Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Compile production build
npm start        # Run production server locally
npm run lint     # Run ESLint validation
```

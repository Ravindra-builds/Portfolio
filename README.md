# Ravindra Yadav — Portfolio

Personal portfolio site for **Ravindra Yadav**, AI & Full-Stack Developer — built with Next.js 16, React 19, and Tailwind CSS v4.

**Live:** [ravindrayadav.online](https://www.ravindrayadav.online)

---

## Overview

A single-page portfolio showcasing full-stack and AI/GenAI work — RAG systems, multi-LLM platforms, and real-time applications — with a design system built around scroll-triggered reveals, an orbital skills visualization, and full light/dark theming.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS v4
- **Components:** shadcn/ui, Radix primitives
- **Theming:** `next-themes` (system-aware light/dark mode)
- **Icons:** `lucide-react`, `react-icons`
- **Fonts:** Inter (via `next/font`)
- **Deployment:** Vercel

## Features

- 🌗 **Light & dark mode** — system-aware, persisted, with a fully token-based color system across every section
- 🪐 **Orbital skills visualization** — a two-ring animated orbit (core stack + AI/GenAI) built with pure CSS keyframes, no animation library
- 🧊 **Glassmorphic navbar** — layered blur, saturation, and rim-light effects for a real glass feel in both themes
- 🎬 **Scroll-triggered animations** — CSS `animation-timeline: view()` powers slide/fade reveals as sections enter the viewport, no JS observer needed
- 📇 **Live project cards** — pulls in real deployed demos (ChatMate, ChaiBookLM, MentorOS, AI Arena, ConvoX) with GitHub + live links
- ✍️ **Technical writing section** — curated highlights from [Hashnode](https://rvindra.hashnode.dev)
- 🕒 **Auto last-updated footer** — reads the latest git commit at build time, no manual date bumps
- ♿ **Reduced-motion support** — all animations respect `prefers-reduced-motion`
- 🔍 **SEO-ready** — full OpenGraph/Twitter card metadata, sitemap, robots.txt, PWA manifest

## Sections

| Section | Description |
|---|---|
| Hero | Intro + resume download |
| About | Bio + top 12 skills |
| Skills | Orbital core-stack/AI visualization + full tech inventory |
| Projects | ChatMate, ChaiBookLM, MentorOS, AI Arena, ConvoX |
| Blog | Curated writing from Hashnode |
| Focus | Currently learning: AI Agents, Cloud Architecture, System Design |
| Contact | Direct contact + socials |

## Project Structure

```text
app/
├── components/           # Section components (hero, about, skills, projects, blog, etc.)
├── lib/                  # Utilities (cn helper, last-updated resolver)
├── opengraph-image.png
├── icon.png
├── apple-icon.png
├── globals.css           # Design tokens, keyframes, theme variables
├── layout.tsx            # Root layout, metadata, ThemeProvider
└── page.tsx
public/                   # Static assets — project screenshots, resume
```

## Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # run production build locally
npm run lint    # eslint
```

## License

Personal project — feel free to reference the structure, please don't copy content/branding directly.

---

Built by [Ravindra Yadav](https://www.ravindrayadav.online) · [GitHub](https://github.com/Ravindra-builds) · [LinkedIn](https://www.linkedin.com/in/ravindra-yadav-778498390/) · [Hashnode](https://rvindra.hashnode.dev)
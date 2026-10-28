# Ravindra Yadav — Personal Portfolio & Systems Showcase

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-blueviolet?style=flat-square)](https://turbo.build/pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg?style=flat-square)](LICENSE)

Personal portfolio and systems engineering showcase for **Ravindra Yadav**, an AI & Full-Stack Systems Engineer based in Ranchi, India. 

Designed and engineered ground-up with **Next.js 16 (App Router & Turbopack)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. It showcases production Generative AI products, vector RAG pipelines, distributed real-time architectures, and hackathon championship systems with an editorial, museum-grade aesthetic.

**Live Deployment:** [ravindrayadav.online](https://www.ravindrayadav.online)

---

## Design System & Aesthetic Vision

The portfolio departs from generic developer templates, utilizing an editorial aesthetic inspired by high-end design benchmarks (`sawad.framer.website`, `linear.app`, and `CodeRabbit`):

- **Palette**: Obsidian Basalt (`#0E0F12`) for dark mode, Museum Gallery Vellum (`#FBFBFA`) for light mode, accented with warm golden amber tones (`#F59E0B` / `#D4A346`).
- **Typography Pairing**: Clean geometric sans-serif ([Geist](https://vercel.com/font)) paired with high-contrast serif italic editorial accents ([Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif)) and technical monospace ([Geist Mono](https://vercel.com/font)).
- **Custom Brand Monogram**: Custom geometric circular **RY** monogram logo with a metallic gold finish.
- **CodeRabbit-Inspired Watermark**: A billboard-scale vector outline signature at the footer (`RAVINDRA YADAV` on desktop, `RAVINDRA` on mobile) fading slowly into background darkness.

---

## Core Features & Engineering Highlights

### 1. Fluid Horizontal Snap Carousels
To eliminate vertical scroll fatigue, multi-item sections feature horizontal snap carousels:
- **Featured Projects**: Horizontal snap slider with live card counter (`01 / 07`), animated amber pill pagination dots, category filters (*All*, *AI & LLMs*, *Full-Stack*), and glass navigation arrows.
- **Honors & Certifications**: Horizontal credentials showcase featuring verified hackathon wins and an interactive high-resolution lightbox viewer.
- **Technical Essays**: Horizontal Hashnode writing slider with reading time estimates, metadata tags, and direct outbound links.

### 2. Scroll-Driven Golden Timeline
- **Dynamic Moving Spine**: As the user scrolls through the career trajectory, Framer Motion’s `useScroll` with spring physics draws a glowing golden gradient beam (`scaleY`) progressively down the vertical spine.
- **Leading Laser Head**: A glowing golden laser beacon travels at the leading edge of the scroll progress.
- **Milestone Illumination**: As the laser reaches each milestone circle (2024 -> 2025 -> 2026), the joint circle blooms into golden amber (`#f59e0b`) with a glowing halo, and the card's border illuminates in real time.

### 3. Integrated Resume Reader Modal
- Built-in PDF reader dialog component (`resume-modal.tsx`) accessible directly from the navbar and shortcuts, allowing recruiters to inspect the resume immediately without leaving the page.
- Direct download fallback options available on Hero and Footer.

### 4. Floating Morphing Navigation
- Dynamic glass dock header that smoothly shrinks and blurs on scroll.
- Displays the custom gold RY brand mark, desktop section links, active section spy, global search trigger, theme toggle, and mobile dropdown drawer.

### 5. Developer Command Palette (`⌘K` / `Ctrl+K`)
- Accessible anywhere via keyboard shortcut or search icon.
- Instant fuzzy navigation to any section, live product, GitHub repository, social profile, or theme switcher.

---

## Featured Shipped Systems & Products

| Project | Category | Live URL | Repository | Highlights |
|---|---|---|---|---|
| **SkillFarm** | AI Workspace (Flagship) | [skillfarm.in](https://skillfarm.in) | [GitHub](https://github.com/Ravindra-builds/SkillFarm) | Multi-agent mentorship workspace, supervisor pattern, Mem0 vector user memory, Tavily web research, PostgreSQL + Drizzle ORM. |
| **P2Shield** | AI Security & Firewall | [p2shield-theta.vercel.app](https://p2shield-theta.vercel.app/) | [GitHub](https://github.com/Ravindra-builds/P2Shield) | **1st Place Winner @ Martinovation 2026 (₹20,000 prize, 52 teams)**. Autonomous LLM privacy firewall proxy intercepting API credentials & PII with cryptographic token vault. |
| **ChaiBookLM** | Vector RAG System | [chai-book-lm-orpin.vercel.app](https://chai-book-lm-orpin.vercel.app/) | [GitHub](https://github.com/Ravindra-builds/ChaiBookLM) | Contextual research assistant with Qdrant Vector DB (HNSW approximate nearest neighbors), overlapping chunking, Cloudflare R2 storage, and Prisma. |
| **ChatMate** | Streaming Multi-LLM | [chat-mate-jade-one.vercel.app](https://chat-mate-jade-one.vercel.app/) | [GitHub](https://github.com/Ravindra-builds/Chat-mate) | Real-time Server-Sent Events (SSE) token streaming, dynamic OpenAI/Gemini routing, conversation tree branching, and tool calling. |
| **ConvoX** | Distributed WebSocket | [convox-60nt.onrender.com](https://convox-60nt.onrender.com) | [GitHub](https://github.com/Ravindra-builds/ConvoX) | Full-duplex real-time chat backed by Redis Pub/Sub for horizontal multi-server scaling, JWT authentication, and Docker containers. |
| **MentorOS** | Agent Tool Calling | [persona-chaicode.onrender.com](https://persona-chaicode.onrender.com/) | [GitHub](https://github.com/Ravindra-builds/Persona-ChaiCode) | Dual-persona mentoring platform with YouTube tool calling for automated video/code citations and Upstash Redis rate limiting. |
| **Rentique** | House & Property Rental | [rentique-6l5t.onrender.com](https://rentique-6l5t.onrender.com/) | [GitHub](https://github.com/Ravindra-builds/Rentique) | Full-stack house and property rental booking system with collision-free reservation lifecycles and Cloudinary media optimization. |

---

## Technical Stack

- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router, Turbopack, Server Components)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer-motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (System-aware Light/Dark mode)
- **Command Menu**: [CMDK](https://cmdk.paco.me/)
- **Typography**: `next/font` (Geist, Geist Mono, Instrument Serif)
- **Hosting**: [Vercel](https://vercel.com/)

---

## Project Structure

```text
├── app/
│   ├── components/
│   │   ├── about.tsx          # Professional narrative & background
│   │   ├── blog.tsx           # Horizontal Hashnode essays carousel
│   │   ├── certificates.tsx   # Honors & hackathon certificates slider + modal
│   │   ├── command-menu.tsx   # Global Cmd+K command palette
│   │   ├── contact.tsx        # Direct email, copy action & socials
│   │   ├── footer.tsx         # Shortcuts row & CodeRabbit-style watermark
│   │   ├── hero.tsx           # Hero intro, avatar, status pill & actions
│   │   ├── mode-toggle.tsx    # Dark/light mode switcher
│   │   ├── navbar.tsx         # Floating morphing glass dock navigation
│   │   ├── projects.tsx       # Horizontal project carousel with dotted indicators
│   │   ├── resume-modal.tsx   # Interactive embedded PDF resume viewer
│   │   ├── skills.tsx         # Categorized 5-group technical toolkit
│   │   └── timeline.tsx       # Scroll-linked moving golden trajectory
│   ├── globals.css            # Tailwind v4 theme variables & utilities
│   ├── layout.tsx             # Root layout, fonts, metadata & JSON-LD
│   └── page.tsx               # Main portfolio landing page
├── public/
│   ├── ry-logo.png            # Custom metallic gold RY circular monogram
│   ├── Skillfarm-logo.png     # Official SkillFarm product emblem
│   ├── Resume.pdf             # Official engineering resume
│   └── ...                    # Certificate and project assets
├── next.config.ts             # Next.js 16 configuration
├── package.json               # Dependencies and build scripts
└── tsconfig.json              # TypeScript compiler configuration
```

---

## Getting Started Locally

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ravindra-builds/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server with Turbopack:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

### Build & Production

```bash
# Build production bundle with Next.js Turbopack
npm run build

# Start production server locally
npm start

# Run ESLint validation
npm run lint
```

---

## Author

**Ravindra Yadav**
- Portfolio: [ravindrayadav.online](https://www.ravindrayadav.online)
- GitHub: [@Ravindra-builds](https://github.com/Ravindra-builds)
- LinkedIn: [Ravindra Yadav](https://www.linkedin.com/in/ravindra-yadav-778498390/)
- Twitter / X: [@YadavRavin7292](https://x.com/YadavRavin7292)
- Hashnode: [rvindra.hashnode.dev](https://rvindra.hashnode.dev)
- Email: [yadavravindra7292@gmail.com](mailto:yadavravindra7292@gmail.com)

---

## License

This project is open-source under the [MIT License](LICENSE).

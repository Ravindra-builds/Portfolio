import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://ravindrayadav.online";

export const viewport: Viewport = {
  themeColor: "#0E0F12",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ravindra Yadav | AI & Full-Stack Systems Engineer",
    template: "%s | Ravindra Yadav",
  },

  description:
    "Official portfolio of Ravindra Yadav — AI Systems & Full-Stack Engineer and product builder based in Ranchi, India (open worldwide). Founder of SkillFarm (skillfarm.in). Specializing in autonomous multi-agent workflows, production RAG pipelines, Mem0 memory, Next.js 16, React 19, TypeScript, and high-concurrency Node.js backends. Available for full-time engineering roles and freelance AI contracts.",

  keywords: [
    // Primary Identity & Brand
    "Ravindra Yadav",
    "Ravindra Yadav portfolio",
    "Ravindra Yadav software engineer",
    "Ravindra Yadav AI engineer",
    "Ravindra Yadav full stack developer",
    "Ravindra Yadav Ranchi",
    "Ravindra Yadav Jharkhand",
    // Freelance & Hiring Intent
    "Hire AI engineer",
    "Freelance AI developer",
    "Next.js freelance engineer",
    "Full stack developer for hire",
    "Remote AI engineer India",
    "Generative AI consultant",
    "RAG pipeline engineer contract",
    "AI agent developer for hire",
    // Core Technical Stack
    "Next.js 16 developer",
    "React 19",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Drizzle ORM",
    "Redis",
    "Upstash",
    "Docker",
    "Cloudflare R2",
    "OpenAI API",
    "Google Gemini API",
    "Vercel AI SDK",
    "Mem0 conversational memory",
    "Qdrant Vector DB",
    "System Design HLD",
    "WebSockets Socket.IO",
    // Shipped Products & Verified Proof
    "SkillFarm AI",
    "SkillFarm.in",
    "P2Shield",
    "Martinovation Hackathon Winner 2026",
    "ChaiBookLM",
    "ConvoX chat",
  ],

  authors: [
    {
      name: "Ravindra Yadav",
      url: siteUrl,
    },
  ],

  creator: "Ravindra Yadav",
  publisher: "Ravindra Yadav",
  category: "technology",
  classification: "Software Engineering, Artificial Intelligence, Web Development",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ravindra Yadav Portfolio",
    title: "Ravindra Yadav | AI & Full-Stack Systems Engineer",
    description:
      "Founder of SkillFarm. Product builder and systems engineer architecting autonomous AI agents, production RAG pipelines, and full-stack Next.js 16 systems.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ravindra Yadav — AI & Full-Stack Systems Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ravindra Yadav | AI & Full-Stack Systems Engineer",
    description:
      "Founder of SkillFarm. Product builder architecting production Generative AI products, RAG pipelines, and scalable web applications.",
    creator: "@YadavRavin7292",
    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

// Comprehensive Schema.org Multi-Type Linked Data Graph for AEO & Google Knowledge Graph
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ravindra Yadav",
      givenName: "Ravindra",
      familyName: "Yadav",
      gender: "https://schema.org/Male",
      url: siteUrl,
      image: `${siteUrl}/ravindra-img.png`,
      jobTitle: "AI & Full-Stack Systems Engineer",
      description:
        "Software engineer and product builder specializing in Generative AI architectures, autonomous multi-agent workflows, production RAG pipelines, Mem0 memory, and high-concurrency full-stack web applications. Founder of SkillFarm (skillfarm.in).",
      email: "mailto:yadavravindra7292@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/Ravindra-builds",
        "https://www.linkedin.com/in/ravindra-yadav-778498390/",
        "https://x.com/YadavRavin7292",
        "https://rvindra.hashnode.dev",
      ],
      award: [
        "1st Place Winner @ Martinovation Hackathon 2026 (₹20,000 Cash Prize • 52 Teams)",
        "GenAI with JavaScript Certification 2026 (ChaiCode)",
      ],
      knowsAbout: [
        "Generative Artificial Intelligence",
        "Retrieval-Augmented Generation (RAG)",
        "AI Agent Orchestration",
        "Conversational Memory (Mem0)",
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Drizzle ORM",
        "Redis",
        "Upstash",
        "Docker",
        "System Design (High-Level Design)",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ravindra Yadav | Official Engineering Portfolio",
      description:
        "Official engineering portfolio of Ravindra Yadav — showcasing production AI products, hackathon championships, technical articles, and system architecture.",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Ravindra Yadav Professional Profile",
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Ravindra Yadav — AI & Full-Stack Engineering Services",
      provider: { "@id": `${siteUrl}/#person` },
      url: `${siteUrl}/#contact`,
      description:
        "Specialized freelance consulting and engineering solutions: autonomous AI agent development, production RAG pipelines, full-stack Next.js web applications, and scalable database systems.",
      areaServed: "Worldwide",
      serviceType: [
        "Generative AI & LLM Engineering",
        "Production RAG Pipeline Architecture",
        "Full-Stack Web Development (Next.js & React)",
        "High-Throughput Backend & API Design",
        "Database Architecture & Redis Caching",
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "SkillFarm",
      url: "https://skillfarm.in",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "AI-powered personalized learning platform and multi-agent mentorship workspace engineered with Mem0 memory and live web crawling.",
      author: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "SoftwareApplication",
      name: "P2Shield",
      url: "https://p2shield-theta.vercel.app/",
      applicationCategory: "SecurityApplication",
      operatingSystem: "Web",
      description:
        "Client-side LLM privacy firewall with pattern-based detection and AES-256-GCM encrypted token vault for secure bidirectional unmasking. Developed with Team TechKnights under the technical leadership of Ravindra Yadav.",
      author: [
        { "@id": `${siteUrl}/#person` },
        { "@type": "Organization", name: "Team TechKnights" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faqpage`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What freelance services and technical solutions do you provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I build full-stack web applications and AI-powered products, from frontend interfaces to backend systems and AI integrations. My work includes Next.js applications, Node.js APIs, PostgreSQL-backed systems, RAG-based assistants, multi-LLM applications, real-time features, and privacy-focused AI tools. I can help turn an idea into a working product, from architecture and development to deployment.",
          },
        },
        {
          "@type": "Question",
          name: "Are you open to internships, full-time roles, and remote opportunities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I am open to relevant internships and entry-level opportunities in Full-Stack Development and AI Engineering, as well as selected freelance collaborations. I am based in Ranchi, India, and open to remote opportunities with suitable collaboration and scheduling arrangements.",
          },
        },
        {
          "@type": "Question",
          name: "What is SkillFarm and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SkillFarm (skillfarm.in) is an AI-powered learning workspace that helps developers turn learning goals into practical projects. It creates personalized roadmaps with week-by-week tasks, curated learning resources, and guidance from six specialized AI mentors covering Frontend, Backend, AI, DevOps, Security, and System Design. Each learning journey leads toward building a final portfolio project. Its architecture combines specialized mentor routing, LLM integrations, personalized context, PostgreSQL, Drizzle ORM, and Redis.",
          },
        },
        {
          "@type": "Question",
          name: "What did you build at Martinovation 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As Team Lead, I led the development of P2Shield with Team TechKnights to win 1st place among 52 teams at Martinovation 2026. P2Shield is a client-side LLM privacy firewall that detects sensitive information in prompts using pattern-based detection, replaces it with context-preserving synthetic surrogates, and uses an AES-256-GCM encrypted token vault for secure mapping and bidirectional unmasking. It integrates with browser-based AI chats to help protect sensitive data before prompts reach external models.",
          },
        },
        {
          "@type": "Question",
          name: "What distinguishes your AI projects from simple API wrappers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I focus on building complete workflows around AI capabilities rather than just connecting an API. For example, ChaiBookLM combines document and web content ingestion with chunking, embeddings, Qdrant vector retrieval, query rewriting, and source citations. ChatMate adds streaming, tool calling, and conversation branching, while SkillFarm uses specialized mentor routing and personalized learning context. I focus on making the underlying application useful, not just adding an AI chat interface.",
          },
        },
        {
          "@type": "Question",
          name: "How do you approach a new project or collaboration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I start by understanding the problem, requirements, and expected outcome. Then I define the project scope, technical approach, deliverables, and milestones before estimating the timeline. I prefer clear communication, iterative development, and regular progress updates so the final product stays aligned with the original goals.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const siteUrl = "https://ravindrayadav.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ravindra Yadav | Full Stack & AI Developer",
    template: "%s | Ravindra Yadav",
  },

  description:
    "Full Stack & AI Developer specializing in React, Next.js, Node.js, TypeScript, MongoDB, and AI-powered applications. Explore my projects, technical skills, and software development journey.",

  keywords: [
    "Ravindra Yadav",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "AI Developer",
    "OpenAI",
    "Google Gemini",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "BCA Student",
  ],

  authors: [
    {
      name: "Ravindra Yadav",
      url: siteUrl,
    },
  ],

  creator: "Ravindra Yadav",

  publisher: "Ravindra Yadav",

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
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ravindra Yadav Portfolio",
    title: "Ravindra Yadav | Full Stack & AI Developer",
    description:
      "Building scalable web applications with React, Next.js, Node.js, TypeScript, MongoDB, and AI. View my projects, skills, and development journey.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ravindra Yadav | Full Stack & AI Developer",
    description:
      "Full Stack Developer building modern web applications and AI-powered experiences.",
    creator: "@YadavRavin7292",
  },

  alternates: {
    canonical: siteUrl,
  },

  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ravindra Yadav",
  url: siteUrl,
  jobTitle: "AI & Full Stack Developer",
  description:
    "Full Stack & AI Developer specializing in React, Next.js, Node.js, TypeScript, PostgreSQL, and AI-powered applications.",
  sameAs: [
    "https://github.com/Ravindra-builds",
    "https://www.linkedin.com/in/ravindra-yadav-778498390/",
    "https://x.com/YadavRavin7292",
    "https://rvindra.hashnode.dev",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Retrieval-Augmented Generation (RAG)",
    "Large Language Models (LLMs)",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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

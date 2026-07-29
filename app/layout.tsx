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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ravindra Yadav Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ravindra Yadav | Full Stack & AI Developer",
    description:
      "Full Stack Developer building modern web applications and AI-powered experiences.",
    images: ["/og-image.png"],

    // Replace after creating your X profile
    creator: "@YadavRavin7292",
  },

  alternates: {
    canonical: siteUrl,
  },

  category: "technology",
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

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ravindra Yadav | AI & Full-Stack Systems Engineer",
    short_name: "Ravindra Yadav",
    description:
      "Official portfolio of Ravindra Yadav — AI Systems & Full-Stack Engineer and product builder. Founder of SkillFarm (skillfarm.in). Specializing in RAG pipelines, autonomous agents, Mem0 memory, Next.js 16, React 19, TypeScript, and high-concurrency Node.js systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E0F12",
    theme_color: "#0E0F12",
    categories: ["technology", "productivity", "portfolio", "developer"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ravindra Yadav | AI & Full Stack Developer",
    short_name: "Ravindra",
    description: "AI & Full Stack Developer Portfolio — Building RAG Systems, Multi-LLM Platforms & Scalable Web Apps",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#030712",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

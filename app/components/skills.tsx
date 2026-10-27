import React from "react";
import { Layers, Code2, Sparkles, Database, Wrench } from "lucide-react";

interface TechGroup {
  category: string;
  items: string[];
}

const stackGroups: TechGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "C", "C++", "Java", "SQL"],
  },
  {
    category: "AI & GenAI Systems",
    items: [
      "OpenAI API",
      "Google Gemini",
      "Vercel AI SDK",
      "RAG Pipelines",
      "Qdrant Vector DB",
      "Mem0 Memory",
      "Tavily Search API",
      "Embeddings & Tool Calling",
    ],
  },
  {
    category: "Frontend & Full-Stack",
    items: [
      "Next.js 16 (App Router)",
      "React 19",
      "Tailwind CSS v4",
      "Server Actions",
      "Framer Motion",
      "Radix UI",
    ],
  },
  {
    category: "Backend, Databases & Caching",
    items: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Prisma",
      "MongoDB",
      "Redis (Caching & Pub/Sub)",
      "Socket.IO (WebSockets)",
    ],
  },
  {
    category: "Cloud, Storage & DevOps",
    items: [
      "Docker",
      "Cloudflare R2",
      "Neon Postgres",
      "Git & GitHub",
      "Vercel",
      "Linux / Bash",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="py-20 md:py-28 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
            05 / Toolkit
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Technical{" "}
            <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 text-[1.12em] inline-block pr-2 mr-2">
              Capabilities
            </span>
            {" "}&amp; Stack.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            Technologies and frameworks battle-tested across production applications, hackathon systems, and backend design.
          </p>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {stackGroups.map((group, idx) => (
            <div
              key={group.category}
              className={`p-6 sm:p-7 rounded-3xl bg-card border border-border flex flex-col justify-between hover:border-amber-500/30 transition-all ${
                idx === 1 ? "md:col-span-2 border-amber-500/40 bg-gradient-to-b from-amber-500/[0.04] to-card" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-foreground">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-amber-500">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-3 py-1.5 rounded-xl bg-muted border border-border/80 text-foreground/90 hover:border-amber-500/50 hover:text-foreground transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

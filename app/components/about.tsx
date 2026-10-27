import React from "react";
import { User, Terminal, Code2, Globe, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="space-y-4 mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
            01 / Background
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Grounded in systems, <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 inline-block pr-1.5">obsessed</span> with craft.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a software developer with a strong focus on <strong className="text-foreground font-semibold">Generative AI systems and full-stack web engineering</strong>. I love taking complex, messy distributed problems and turning them into clean, fast, and dependable software.
            </p>
            <p>
              Over the past two years, I progressed from fundamental computer science concepts (C/C++, Operating Systems, and networking protocols) to mastering the modern TypeScript &amp; AI ecosystem: <strong className="text-foreground font-semibold">React 19, Next.js 16, Node.js, and PostgreSQL</strong>.
            </p>
            <p>
              Recently, I&apos;ve been architecting AI-native products — creating autonomous agent workflows with memory persistence (like <strong className="text-foreground font-semibold">SkillFarm</strong>), full-stack vector RAG research assistants (like <strong className="text-foreground font-semibold">ChaiBookLM</strong>), and privacy firewalls (like <strong className="text-foreground font-semibold">P2Shield</strong>, which won 1st place among 52 teams at the Martinovation Hackathon 2026).
            </p>
            <p>
              When I&apos;m not writing code, I break down technical concepts in articles on Hashnode, explore distributed system architectures, and learn from open-source codebases.
            </p>
          </div>

          {/* Quick Info Sidebar */}
          <div className="md:col-span-4 space-y-4">
            <div className="p-5 sm:p-6 rounded-3xl bg-card border border-border space-y-4 text-xs font-mono shadow-sm">
              <div>
                <span className="text-muted-foreground uppercase text-[10px] block">Location</span>
                <span className="text-foreground font-semibold mt-0.5 block">Ranchi, India</span>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="text-muted-foreground uppercase text-[10px] block">Degree</span>
                <span className="text-foreground font-semibold mt-0.5 block">BCA (Computer Applications)</span>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="text-muted-foreground uppercase text-[10px] block">Core Stack</span>
                <span className="text-foreground font-semibold mt-0.5 block">Next.js 16, React 19, TypeScript, GenAI, PostgreSQL</span>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="text-muted-foreground uppercase text-[10px] block">Status</span>
                <span className="text-emerald-500 font-semibold mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Ready to Join
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

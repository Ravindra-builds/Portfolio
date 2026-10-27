import React from "react";
import { Code2, Globe, Network, Compass, Sparkles } from "lucide-react";

const Learning = () => {
  const learningGoals = [
    {
      title: "Algorithmic Intuition & Complexity",
      badge: "Active Focus",
      description:
        "Deepening problem-solving rigor through core algorithmic patterns: graph traversals, dynamic programming, priority queues, and amortized complexity analysis.",
      icon: <Code2 className="text-amber-500" size={24} />,
    },
    {
      title: "Distributed Systems & Scalability",
      badge: "In Progress",
      description:
        "Engineering high-concurrency architectures: consensus protocols, partition tolerance, distributed caching invalidation, and database sharding.",
      icon: <Network className="text-amber-500" size={24} />,
    },
    {
      title: "Cloud Infrastructure & Edge Deployments",
      badge: "In Progress",
      description:
        "Building serverless edge workers, containerized multi-node orchestration with Docker, and multi-region vector indexing.",
      icon: <Globe className="text-amber-500" size={24} />,
    },
  ];

  return (
    <section id="focus" className="py-24 md:py-32 bg-background border-b border-border/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/25 mb-4">
            <Compass size={13} />
            <span>Continuous Evolution • Active Curiosities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Current Frontiers &amp; <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400">Deep Dives</span>.
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mt-3 leading-relaxed">
            The subjects I am currently investing deep study into to sharpen my edge as a systems-minded engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {learningGoals.map((goal, index) => (
            <div
              key={goal.title}
              className="tactile-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-muted/60 border border-border rounded-xl inline-flex items-center justify-center">
                    {goal.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25">
                    {goal.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-amber-500 transition-colors">
                  {goal.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>PHASE 0{index + 1}</span>
                <span className="text-amber-500 font-semibold">2026 ROADMAP</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiRedis,
  SiJsonwebtokens,
  SiSocketdotio,
  SiRender,
  SiVercel,
} from "react-icons/si";
import { VscOpenai } from "react-icons/vsc";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import {
  Sparkles,
  Bot,
  Search,
  Layers,
  Wrench,
  Shield,
  Gauge,
} from "lucide-react";

const coreStack = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
] as const;
const aiStack = [
  "OpenAI API",
  "Gemini API",
  "AI SDK",
  "RAG",
  "Embeddings",
  "Tool Calling",
] as const;

const coreIconMap: Record<(typeof coreStack)[number], React.ReactNode> = {
  "React.js": <FaReact size={18} className="text-sky-600 dark:text-sky-400" />,
  "Next.js": (
    <TbBrandNextjs size={18} className="text-gray-900 dark:text-white" />
  ),
  "Node.js": <FaNodeJs size={18} className="text-green-600 dark:text-green-400" />,
  TypeScript: <SiTypescript size={18} className="text-blue-600 dark:text-blue-400" />,
  MongoDB: <SiMongodb size={18} className="text-emerald-600 dark:text-emerald-400" />,
  PostgreSQL: <SiPostgresql size={18} className="text-cyan-700 dark:text-sky-300" />,
};

const aiIconMap: Record<(typeof aiStack)[number], React.ReactNode> = {
  "OpenAI API": (
    <VscOpenai size={18} className="text-gray-900 dark:text-white" />
  ),
  "Gemini API": <Sparkles size={18} className="text-blue-600 dark:text-blue-300" />,
  "AI SDK": <Bot size={18} className="text-teal-600 dark:text-teal-300" />,
  RAG: <Search size={18} className="text-purple-600 dark:text-purple-300" />,
  Embeddings: <Layers size={18} className="text-fuchsia-600 dark:text-fuchsia-300" />,
  "Tool Calling": <Wrench size={18} className="text-amber-600 dark:text-amber-300" />,
};

const restOfStack = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Java", "C", "C++"],
  },
  {
    category: "Frontend & Styling",
    items: [
      {
        n: "Tailwind CSS",
        i: <SiTailwindcss size={14} className="text-cyan-600 dark:text-cyan-400" />,
      },
    ],
    plain: ["HTML5", "CSS3", "Bootstrap", "Vite"],
  },
  {
    category: "Backend",
    items: [
      { n: "Express.js", i: <SiExpress size={14} className="text-gray-700 dark:text-zinc-300" /> },
      { n: "REST APIs", i: <TbApi size={14} className="text-pink-600 dark:text-pink-400" /> },
      {
        n: "JWT",
        i: <SiJsonwebtokens size={14} className="text-yellow-600 dark:text-yellow-400" />,
      },
      { n: "Auth", i: <Shield size={14} className="text-indigo-600 dark:text-indigo-400" /> },
      { n: "Socket.IO", i: <SiSocketdotio size={14} className="text-gray-900 dark:text-white" /> },
      { n: "Rate Limiting", i: <Gauge size={14} className="text-rose-600 dark:text-rose-400" /> },
    ],
  },
  {
    category: "Data, DevOps & Cloud",
    items: [
      { n: "Redis", i: <SiRedis size={14} className="text-red-600 dark:text-red-500" /> },
      { n: "Docker", i: <FaDocker size={14} className="text-blue-600 dark:text-blue-400" /> },
      { n: "Git", i: <FaGitAlt size={14} className="text-orange-600 dark:text-orange-400" /> },
      { n: "GitHub", i: <FaGithub size={14} className="text-gray-900 dark:text-white" /> },
      { n: "Vercel", i: <SiVercel size={14} className="text-gray-900 dark:text-white" /> },
      { n: "Render", i: <SiRender size={14} className="text-indigo-600 dark:text-indigo-400" /> },
    ],
  },
  {
    category: "CS Fundamentals",
    items: [
      "OS",
      "Computer Networks",
      "OOP",
      "System Design (HLD)",
      "TCP/IP",
      "HTTP/HTTPS",
      "DNS",
    ],
  },
];

// Compute a point on a circle as a % of the container, so it's fully responsive with no JS.
function ringPos(
  index: number,
  total: number,
  radiusPct: number,
  startDeg = -90,
) {
  const angle = startDeg + (360 / total) * index;
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + radiusPct * Math.cos(rad)}%`,
    top: `${50 + radiusPct * Math.sin(rad)}%`,
  };
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 slideDown">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 slideRight">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">
            A solid full-stack core, with AI orbiting everything I build.
          </p>
        </div>

        {/* ===== Signature orbit ===== */}
        <div className="group/orbit relative mx-auto mb-6 aspect-square w-64 sm:w-80 md:w-[420px] slideUp">
          {/* ambient glow */}
          <div className="orbit-glow absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/25 via-purple-600/20 to-pink-500/10 blur-3xl" />

          {/* static guide circles */}
          <div className="absolute inset-[8%] rounded-full border border-gray-800/80" />
          <div className="absolute inset-[32%] rounded-full border border-dashed border-gray-700/70" />

          {/* AI ring — outer, slow, glowing */}
          <div
            className="orbit-ccw absolute inset-0 group-hover/orbit:[animation-play-state:paused]"
            style={{ animationDuration: "70s" }}
          >
            {aiStack.map((item, i) => {
              const pos = ringPos(i, aiStack.length, 48, -60);
              return (
                <div
                  key={item}
                  className="group/icon absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: pos.left, top: pos.top }}
                >
                  <div
                    className="orbit-cw group-hover/orbit:[animation-play-state:paused]"
                    style={{ animationDuration: "70s" }}
                  >
                    <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-950 border border-purple-400/50 dark:border-purple-500/40 shadow-[0_0_16px_-3px_rgba(168,85,247,0.35)] dark:shadow-[0_0_16px_-3px_rgba(168,85,247,0.5)]  transition-all duration-300 group-hover/icon:scale-125 group-hover/icon:border-purple-400 group-hover/icon:shadow-[0_0_24px_-2px_rgba(192,132,252,0.85)]">
                      {aiIconMap[item]}
                      <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-purple-300 opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-300">
                        {item}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core stack ring — inner */}
          <div
            className="orbit-cw absolute inset-0 group-hover/orbit:[animation-play-state:paused]"
            style={{ animationDuration: "46s" }}
          >
            {coreStack.map((item, i) => {
              const pos = ringPos(i, coreStack.length, 30, -90);
              return (
                <div
                  key={item}
                  className="group/icon absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: pos.left, top: pos.top }}
                >
                  <div
                    className="orbit-ccw group-hover/orbit:[animation-play-state:paused]"
                    style={{ animationDuration: "46s" }}
                  >
                    <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 transition-all duration-300 group-hover/icon:scale-125 group-hover/icon:border-blue-400 group-hover/icon:shadow-[0_0_18px_-2px_rgba(96,165,250,0.7)]">
                      {coreIconMap[item]}
                      <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-blue-300 opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-300">
                        {item}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-[26%] aspect-square rounded-full bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700">
              <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RY
              </span>
              <span className="text-[7px] sm:text-[8px] text-gray-500 mt-0.5 text-center leading-tight px-1">
                Full-Stack + AI
              </span>
            </div>
          </div>
        </div>

        {/* ===== Quiet full inventory ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 slideUp">
          {restOfStack.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items?.map((entry) =>
                  typeof entry === "string" ? (
                    <span
                      key={entry}
                      className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {entry}
                    </span>
                  ) : (
                    <span
                      key={entry.n}
                      className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {entry.i}
                      {entry.n}
                    </span>
                  ),
                )}
                {group.plain?.map((entry) => (
                  <span
                    key={entry}
                    className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {entry}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

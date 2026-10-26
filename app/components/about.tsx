import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis } from "react-icons/si";
import { VscOpenai } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";
import { Sparkles, Bot, Search, Network } from "lucide-react";

const topSkills = [
  {
    name: "Next.js",
    icon: <TbBrandNextjs size={22} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "React.js",
    icon: <FaReact size={22} className="text-sky-600 dark:text-sky-400" />,
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript size={22} className="text-blue-600 dark:text-blue-400" />
    ),
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={22} className="text-green-600 dark:text-green-400" />,
  },
  {
    name: "OpenAI API",
    icon: <VscOpenai size={22} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "Gemini API",
    icon: <Sparkles size={22} className="text-blue-600 dark:text-blue-300" />,
  },
  {
    name: "RAG Pipelines",
    icon: <Search size={22} className="text-purple-600 dark:text-purple-300" />,
  },
  {
    name: "Vercel AI SDK",
    icon: <Bot size={22} className="text-teal-600 dark:text-teal-300" />,
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb size={22} className="text-emerald-600 dark:text-emerald-400" />
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <SiPostgresql size={22} className="text-cyan-700 dark:text-sky-300" />
    ),
  },
  {
    name: "Redis",
    icon: <SiRedis size={22} className="text-red-600 dark:text-red-500" />,
  },
  {
    name: "System Design",
    icon: <Network size={22} className="text-amber-600 dark:text-amber-300" />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slideDown">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/20">
            Background & Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait with decorative ambient ring */}
          <div className="lg:col-span-5 relative group slideRight flex justify-center">
            <div className="relative aspect-square w-72 sm:w-80 md:w-96 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent p-2">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-2xl -z-10 group-hover:opacity-100 transition-opacity opacity-70" />
              <div className="relative w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-900 overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl">
                <Image
                  src="/ravindra-img.png"
                  alt="Ravindra Yadav"
                  fill
                  sizes="(max-width: 768px) 320px, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bio text & Skill Badges */}
          <div className="lg:col-span-7 space-y-8 slideLeft">
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Hello! I am{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Ravindra Yadav
                </span>
              </h3>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m an{" "}
                <strong className="text-gray-900 dark:text-white font-semibold">
                  AI & Full-Stack Developer
                </strong>{" "}
                who specializes in architecting production-ready AI products — from autonomous agent workflows and RAG research platforms to high-concurrency real-time apps.
              </p>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                My tech stack centers on{" "}
                <strong className="text-gray-900 dark:text-white font-medium">
                  Next.js 16, React 19, TypeScript, Node.js, and PostgreSQL
                </strong>
                , grounded in solid computer science fundamentals: systems architecture, network protocols, caching strategies, and database optimization.
              </p>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether deploying multi-model LLM routing with streaming SSE, optimizing vector databases in Qdrant, or building scalable Redis messaging pipelines, I build end-to-end solutions that solve real engineering challenges.
              </p>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
                <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 block font-mono">
                  5+
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                  Shipped AI Products
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
                <span className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400 block font-mono">
                  Sub-100ms
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                  SSE Streaming
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
                <span className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 block font-mono">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                  TypeScript & Modern
                </span>
              </div>
            </div>

            {/* Top Skills Badges */}
            <div className="slideUp pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                Core Stack Highlights
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
                {topSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
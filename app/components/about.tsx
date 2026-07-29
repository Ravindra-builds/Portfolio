import Image from "next/image";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
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
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slideDown">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 slideRight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group slideRight">
            <div className="relative aspect-square rounded-full bg-gray-100 dark:bg-gray-900 overflow-hidden border border-gray-200 dark:border-gray-800 flex items-center justify-center max-w-sm mx-auto">
              <Image
                src="/ravindra-img.png"
                alt="Ravindra Yadav"
                fill
                sizes="400px"
                className="object-cover overflow-hidden"
              />
            </div>
          </div>

          <div className="space-y-8 slideLeft">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Hello! I am{" "}
                <span className="text-blue-600 dark:text-blue-500">
                  Ravindra Yadav
                </span>
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m an{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  AI & Full-Stack Developer
                </span>{" "}
                who builds production-ready web apps and AI products - from RAG
                research assistants to multi-LLM chat platforms. I work across
                the stack with{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  React, Next.js, Node.js, and TypeScript
                </span>
                , backed by real CS fundamentals in systems, networking, and
                design.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Lately I&apos;ve been deep in{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  LLM-powered products
                </span>{" "}
                - tool calling, streaming, embeddings, and RAG pipelines - while
                keeping the backend fundamentals just as solid. I ship real,
                working projects independently, end to end.
              </p>
            </div>

            <div className="slideUp">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                Top Skills
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {topSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-center leading-tight">
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

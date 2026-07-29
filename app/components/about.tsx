import Image from "next/image";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis } from "react-icons/si";
import { VscOpenai } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";
import { Sparkles, Bot, Search, Network } from "lucide-react";

const topSkills = [
  { name: "Next.js", icon: <TbBrandNextjs size={22} className="text-white" /> },
  { name: "React.js", icon: <FaReact size={22} className="text-sky-400" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript size={22} className="text-blue-400" />,
  },
  { name: "Node.js", icon: <FaNodeJs size={22} className="text-green-500" /> },
  { name: "OpenAI API", icon: <VscOpenai size={22} className="text-white" /> },
  {
    name: "Gemini API",
    icon: <Sparkles size={22} className="text-blue-300" />,
  },
  {
    name: "RAG Pipelines",
    icon: <Search size={22} className="text-purple-300" />,
  },
  { name: "Vercel AI SDK", icon: <Bot size={22} className="text-teal-300" /> },
  {
    name: "MongoDB",
    icon: <SiMongodb size={22} className="text-emerald-400" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={22} className="text-sky-300" />,
  },
  { name: "Redis", icon: <SiRedis size={22} className="text-red-500" /> },
  {
    name: "System Design",
    icon: <Network size={22} className="text-amber-300" />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slideDown">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slideRight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          {/* Image */}
          <div className="relative group slideRight">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-lg bg-gray-900 overflow-hidden border border-gray-800 flex items-center justify-center">
              <Image
                src="/ravindra-img.png"
                alt="Ravindra Yadav"
                fill
                sizes="400px"
                className=" object-cover overflow-hidden"
              />
            </div>
          </div>

          <div className="space-y-6 slideLeft">
            <h3 className="text-2xl font-bold text-white">
              Hello! I am <span className="text-blue-500">Ravindra Yadav</span>
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I am an{" "}
              <span className="text-white font-medium">
                AI & Full-Stack Developer
              </span>{" "}
              who builds production-ready web apps and AI products - from RAG
              research assistants to multi-LLM chat platforms. I work across the
              stack with{" "}
              <span className="text-white font-medium">
                React, Next.js, Node.js, and TypeScript
              </span>
              , backed by real CS fundamentals in systems, networking, and
              design.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Lately I&apos;ve been deep in{" "}
              <span className="text-white font-medium">
                LLM-powered products
              </span>{" "}
              - tool calling, streaming, embeddings, and RAG pipelines - while
              keeping the backend fundamentals (auth, rate limiting, caching,
              real-time systems) just as solid. I ship real, working projects
              independently, end to end.
            </p>

            <div className="slideUp">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                Top Skills
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {topSkills.map((skill, idx) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors text-center leading-tight">
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

import { User, Code, Zap } from 'lucide-react';
import {FaHtml5,FaCss3,FaJsSquare ,FaNodeJs, FaReact,FaBootstrap,FaGitAlt ,FaGithub} from "react-icons/fa";
import { SiExpress,SiSocketdotio,SiTailwindcss,SiMongodb  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import mineImg from "../assets/ravindra-img.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slideDown">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slideRight">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          {/* Image */}
          <div className="relative group slideRight">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-lg bg-gray-900 overflow-hidden border border-gray-800 flex items-center justify-center">
              <img src={mineImg} alt="Ravindra Yadav" className="w-full h-full object-cover overflow-hidden" />
            </div>
          </div>

          <div className="space-y-6 slideLeft">
            <h3 className="text-2xl font-bold text-white">
              Hello! I'm <span className="text-blue-500">Ravindra Yadav</span>
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              I am a passionate <span className="text-white font-medium">Full Stack Developer</span> specializing in the <span className="text-white font-medium">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js). 
              I love building scalable, responsive, and user-friendly web applications that solve real-world problems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              With a strong foundation in <span className="text-white font-medium">JavaScript</span> and modern web technologies, I enjoy the challenge of turning ideas into code. 
              Whether it's crafting a beautiful frontend or architecting a robust backend, I am always eager to learn and improve.
            </p>

                <div className='flex flex-wrap gap-8 slideUp'>
                    <div className='flex flex-col items-center'>
                      <FaHtml5 size={35} className='text-orange-500 hover:text-orange-600'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>HTML5</span>
                    </div>
                    <div className='flex flex-col items-center'>
                    <FaCss3 size={35} className='text-blue-500 hover:text-blue-600'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>CSS3</span>
                    </div>
                     <div className='flex flex-col items-center'>
                      <FaBootstrap size={35} className='	text-purple-500 hover:text-purple-600'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>bootstrap</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <SiTailwindcss size={35} className='	text-cyan-500 hover:text-cyan-600'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>tailwind</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <FaJsSquare size={35} className='text-yellow-500 hover:text-yellow-600'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>JS</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <FaReact size={35} className='text-sky-400 hover:text-sky-500'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>React</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <FaNodeJs size={35} className='	text-green-600 hover:text-green-700'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>nodeJS</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <SiExpress size={35} className='text-zinc-300 hover:text-zinc-400'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>express</span>
                    </div>
                  
                    <div className='flex flex-col items-center'>
                      <SiSocketdotio size={35} className='	text-white hover:text-gray-200'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>socket.io</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <GrMysql size={35} className='text-cyan-700 hover:text-cyan-800'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>mySQL</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <SiMongodb size={35} className='		text-emerald-400 hover:text-emerald-500'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>mongoDB</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <FaGitAlt size={35} className='		text-orange-400 hover:text-orange-500'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>git</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <FaGithub size={35} className='		text-dark-400 hover:text-dark-500'/>
                    <span className='text-cyan-200 hover:text-cyan-300'>github</span>
                    </div>
                    
                </div>
  
            </div>
          </div>
        </div>

    </section>
  );
};

export default About;
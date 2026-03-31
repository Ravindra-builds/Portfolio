
import { ArrowRight, Download } from 'lucide-react';
import myResume from '../assets/Ravindra.pdf'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden relative">
      
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="mb-6 px-4 py-1 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm inline-flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-sm text-gray-300">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Ravindra Yadav</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          A passionate <span className="text-white font-semibold">Full Stack Developer</span> specialized in building modern web applications using the <span className="text-white font-semibold">MERN Stack</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
          >
            View My Work
            <ArrowRight size={20} />
          </a>
          
          <a 
            href={myResume} download="My_Resume.pdf"
            className="px-8 py-3 rounded-full border border-gray-700 hover:border-gray-500 hover:bg-gray-800 text-white font-medium transition-all flex items-center justify-center gap-2"
          >
            Download Resume
            <Download size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

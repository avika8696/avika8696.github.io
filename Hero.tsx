import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const nameElement = nameRef.current;
    if (nameElement) {
      nameElement.classList.add('animate-wave');
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block relative">
            <span className="text-xl text-blue-600 dark:text-blue-400">
              Hello, I'm
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-800 dark:text-white tracking-tight">
            <span ref={nameRef} className="inline-block">Avika Pancholi</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8">
          Aspiring AI & ML Engineer | Web Developer | 2nd Runner-Up Hackathon Innovator"
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            I build exceptional digital experiences with a focus on performance,
            accessibility, and beautiful design.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/avika8696?tab=repositories" className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
              <GitHub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/avika-pancholi-624138256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
          
          <a 
            href="#about"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
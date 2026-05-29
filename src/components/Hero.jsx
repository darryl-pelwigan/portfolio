import React from 'react';
import SocialLinks from './ui/SocialLinks';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-[#fcfcfd] dark:bg-[#0a0a0c] text-neutral-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/path-to-your-math-blueprint-bg.jpg')] bg-cover bg-center mix-blend-difference dark:mix-blend-normal" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 text-sm transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
          <span className="text-neutral-600 dark:text-zinc-300 font-medium text-xs">Active / Available for new projects</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
          Darryl <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">Pelwigan</span>
        </h1>

        <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
          darrylpelwigan@gmail.com
        </p>

        <p className="text-xl md:text-xl text-gray-600 dark:text-gray-400 dark:font-light leading-relaxed mb-10 transition-colors duration-300">
          Full-Stack Web Developer building scalable apps, websites and tools. Passionate about clean code, and solving complex problems with simple solutions. 
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-neutral-950 font-semibold rounded-md shadow-md shadow-cyan-500/10 transition duration-200 text-sm"
          >
            View Projects
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 bg-white hover:bg-neutral-50 dark:bg-zinc-900/80 dark:hover:bg-zinc-800/80 border border-neutral-300 dark:border-zinc-800 text-neutral-800 dark:text-zinc-200 font-medium rounded-md transition duration-200 text-sm shadow-sm dark:shadow-none"
          >
            Get in Touch
          </button>
          <SocialLinks className="flex items-center gap-6 mt-4 md:mt-0" iconSize="w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
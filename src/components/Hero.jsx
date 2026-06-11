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
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
          <span className="text-zinc-600 dark:text-zinc-300 font-medium text-xs">Active / Available for new projects</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
          Darryl <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-400 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">Pelwigan</span>
        </h1>

        <p className="text-sm md:text-base font-mono text-zinc-500 dark:text-zinc-400 mb-8 transition-colors duration-300">
          darrylpelwigan@gmail.com
        </p>

        <p className="text-xl md:text-xl text-zinc-600 dark:text-zinc-400 dark:font-light leading-relaxed mb-10 transition-colors duration-300">
          Full-Stack Web Developer building scalable apps, websites and tools. Passionate about clean code, and solving complex problems with simple solutions.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md shadow-md shadow-indigo-500/20 transition duration-200 text-sm"
          >
            View Projects
          </button>

          <a
            href="https://drive.google.com/file/d/1u5PAhfLObayZqJaIjkM9LOdbxhJljmhw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-semibold rounded-md shadow-md shadow-zinc-500/10 transition duration-200 text-sm"
          >
            View Resume
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-indigo-500 text-zinc-800 dark:text-zinc-200 font-medium rounded-md transition duration-200 text-sm"
          >
            Get in Touch
          </button>
          <SocialLinks className="flex items-center gap-6 mt-4 md:mt-0" iconSize="w-8 h-8" />
        </div>
      </div>
    </section>
  );
}

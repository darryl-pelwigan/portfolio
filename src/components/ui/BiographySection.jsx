import React from 'react';

export function BiographySection() {
  return (
    <div className="space-y-5 text-base md:text-lg text-neutral-600 dark:text-zinc-400 font-light leading-relaxed text-justify">
      <p>
        I'm <span className="text-neutral-900 dark:text-white font-medium">Darryl Pelwigan</span>, 
        a Full-Stack Developer based in the Philippines. I specialize in building scalable web applications, 
        developing robust backend APIs, and crafting responsive frontend experiences using modern web technologies.
      </p>
      <p>
        With 7 years of experience specializing in PHP (Laravel), Python (Django), and React.js, 
        I focus on building scalable backend architectures and high-performance user interfaces for enterprise 
        and business applications. Recently, I've expanded into WordPress development, leveraging strong PHP 
        and JavaScript expertise to create optimized, maintainable, and performance-driven CMS solutions.
      </p>
    </div>
  );
}
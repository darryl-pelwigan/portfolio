import React from 'react';
import { MockEditorWindow } from './ui/MockEditorWindow';
import { InteractiveTerminal } from './ui/InteractiveTerminal';
import { BiographySection } from './ui/BiographySection';
import { ServicesGrid } from './ui/ServicesGrid';
import { TechStackCloud } from './ui/TechStackCloud';

// Static Data Structures (Kept outside component to prevent re-renders)
const TECH_STACK = {
  backend: [
    { name: 'PHP', icon: '🐘' },
    { name: 'Laravel', icon: '❤️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '💚' },
    { name: 'WordPress', icon: '🌐' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐬' },
  ],
  frontend: [
    { name: 'ReactJS', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'HTML', icon: '🧡' },
    { name: 'CSS', icon: '💙' },
  ],
  tools: [
    { name: 'Ubuntu / Linux', icon: '🐧' },
    { name: 'GitHub', icon: '🐱' },
    { name: 'Postman', icon: '🚀' },
  ]
};

const SERVICES = [
  {
    title: "Backend Architecture",
    description: "Designing robust, secure, and scalable backend applications and RESTful APIs using PHP (Laravel) and Python (Django) coupled with optimized SQL databases.",
    icon: (
      <svg className="w-8 h-8 text-amber-500 dark:text-amber-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    )
  },
  {
    title: "Frontend Development",
    description: "Crafting highly responsive, interactive, and high-performance user interfaces using React.js, Tailwind CSS, and modern JavaScript environments.",
    icon: (
      <svg className="w-8 h-8 text-amber-500 dark:text-amber-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  },
  {
    title: "CMS WordPress Development",
    description: "Building dynamic, highly responsive websites using Elementor. I focus on 'clean' development—leveraging lean custom CSS and efficient workflows to maintain design speed and performance while ensuring maintainability and scalability.",
    icon: (
      <svg className="w-8 h-8 text-amber-500 dark:text-amber-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 0 1 8.716 2.253M12 3a9.003 9.003 0 0 0-8.716 2.253" />
      </svg>
    )
  }
];

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 bg-[#fcfcfd] dark:bg-[#0a0a0c] text-neutral-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-16">
        
        <header className="space-y-4">
          <div className="flex justify-center md:justify-start">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase">
              // About
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center md:text-left">
            Fullstack Developer & Engineer
            <span className="block text-lg font-normal text-neutral-500 dark:text-zinc-500 mt-4 tracking-normal">
              Building scalable web applications from frontend to backend.
            </span>
          </h2>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6 w-full max-w-md mx-auto lg:max-w-none">
            <MockEditorWindow imgPath="/path-to-your-code-image.jpg" />
            <InteractiveTerminal username="darryl_pelwigan" />
          </div>

          <div className="lg:col-span-7 space-y-12">
            <BiographySection />
            <ServicesGrid items={SERVICES} />
          </div>

        </div>

        <TechStackCloud stack={TECH_STACK} />

      </div>
    </section>
  );
}
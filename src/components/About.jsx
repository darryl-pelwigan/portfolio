import React from 'react';
import { MockEditorWindow } from './ui/MockEditorWindow';
import { InteractiveTerminal } from './ui/InteractiveTerminal';
import { BiographySection } from './ui/BiographySection';
import { ServicesGrid } from './ui/ServicesGrid';
import { TechStackCloud } from './ui/TechStackCloud';

import { TECH_STACK, SERVICES } from '../constants/aboutData.js';

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
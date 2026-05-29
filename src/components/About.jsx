import React from 'react';
import { MockEditorWindow } from './ui/MockEditorWindow';
import { InteractiveTerminal } from './ui/InteractiveTerminal';
import { BiographySection } from './ui/BiographySection';
import { ServicesGrid } from './ui/ServicesGrid';

import { SERVICES } from '../constants/Data';
import ComponentTitleHeader from './ui/ComponentTitleHeader';

export default function About() {
  return (
    <section 
      id="about" 
      className="bg-[#fcfcfd] dark:bg-[#0a0a0c] text-neutral-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      <div className="section-container">

        <ComponentTitleHeader 
          title="About"
          heading="Fullstack Developer & Engineer"
          description="Building scalable web applications from frontend to backend."
        />

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
      </div>
    </section>
  );
}
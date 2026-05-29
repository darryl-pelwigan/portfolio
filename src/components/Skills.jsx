import React from 'react'

import { TechStackCloud } from './ui/TechStackCloud';

import { TECH_STACK, SERVICES } from '../constants/Data';
import ComponentTitleHeader from './ui/ComponentTitleHeader';

const skillCategories = [
  {
    category: 'Web Development',
    skills: [
      { name: 'Laravel', level: 90 },
      { name: 'Python Django Rest Framework', level: 80 },
      { name: 'React JS', level: 83 },
      { name: 'Wordpress using Elementor', level: 80 },
      { name: 'Typescript', level: 75 },
      { name: 'PostgreSQL', level: 83 }
    ]
  },
  {
    category: 'Infrastructure & Other Tools',
    skills: [
      { name: 'Ubuntu / Linux', level: 70 },
      { name: 'GitHub', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'AWS', level: 60 },
      { name: 'Postman', level: 80 },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        
      <ComponentTitleHeader title="Skills" heading="Tech Stack" description="A snapshot of my technical skills, tools, and technologies I work with." /> 

        <div className="grid md:grid-cols-2 gap-8 pb-16">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-lg p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{category.category}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <TechStackCloud stack={TECH_STACK} />
      </div>
    </section>
  )
}

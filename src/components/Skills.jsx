import React from 'react'

import { TechStackCloud } from './ui/TechStackCloud';

import { TECH_STACK, SKILL_CATEGORIES } from '../constants/skillsData';
import ComponentTitleHeader from './ui/ComponentTitleHeader';

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}
    >
      ★
    </span>
  ))
}

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        
      <ComponentTitleHeader title="Skills" heading="Tech Stack" description="A snapshot of my technical skills, tools, and technologies I work with." /> 

        <div className="grid md:grid-cols-2 gap-8 pb-16">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.category} className="bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 transition-colors duration-300 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{category.category}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                      <div className="flex items-center gap-1 text-sm">
                        {renderStars(skill.rating)}
                        <span className="text-slate-500 dark:text-slate-400">{skill.rating}/5</span>
                      </div>
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

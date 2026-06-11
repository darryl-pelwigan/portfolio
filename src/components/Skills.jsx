import React from 'react'

import { TechStackCloud } from './ui/TechStackCloud';

import { TECH_STACK, SKILL_CATEGORIES } from '../constants/skillsData';
import ComponentTitleHeader from './ui/ComponentTitleHeader';

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < rating ? 'text-indigo-500 dark:text-indigo-400' : 'text-zinc-300 dark:text-zinc-600'}
    >
      ★
    </span>
  ))
}

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="section-container">

        <ComponentTitleHeader title="Skills" heading="Tech Stack" description="A snapshot of my technical skills, tools, and technologies I work with." />

        <div className="grid md:grid-cols-2 gap-8 pb-16">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.category} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 transition-colors duration-300 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">{category.category}</h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-indigo-500/50">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-zinc-900 dark:text-white">{skill.name}</span>
                      <div className="flex items-center gap-1 text-sm">
                        {renderStars(skill.rating)}
                        <span className="text-zinc-500 dark:text-zinc-400 ml-1">{skill.rating}/5</span>
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

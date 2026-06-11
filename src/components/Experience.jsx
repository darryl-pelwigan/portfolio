import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { experiences } from '../constants/experienceData'
import { getTagIcon } from '../constants/iconMapper'

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader
          title="Experience"
          heading="Where I've Worked"
          description="From custom web development to building robust backend architectures and dynamic user experiences."
        />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 rounded-xl p-8 transition duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-indigo-500 dark:text-indigo-400 font-semibold mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{exp.company}</h3>
                  <p className="text-lg text-zinc-500 dark:text-zinc-400 mt-1">{exp.role}</p>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-justify">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                {exp.tags.map((tag) => {
                  const isWordPressIcon = /wordpress|elementor/i.test(tag)
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-sm font-medium rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700 hover:ring-indigo-400/50 dark:hover:ring-indigo-500/50 transition"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-zinc-700 shadow-sm">
                        <img src={getTagIcon(tag)} alt={tag} className={`w-5 h-5 object-contain ${isWordPressIcon ? 'dark:invert' : ''}`} />
                      </span>
                      <span>{tag}</span>
                    </span>
                  )
                })}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

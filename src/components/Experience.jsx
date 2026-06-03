import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { experiences } from '../constants/experienceData'
import { getTagIcon } from '../constants/iconMapper'

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader 
          title="Experience"
          heading="Where I've Worked"
          description="From custom web development to building robust backend architectures and dynamic user experiences."
        />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 rounded-lg p-8 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-blue-400 font-semibold mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{exp.role}</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-justify">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                {exp.tags.map((tag) => {
                  const isWordPressIcon = /wordpress|elementor/i.test(tag)
                  return (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/70 dark:bg-slate-800/90 text-white text-sm font-medium rounded-full ring-1 ring-white/10 hover:bg-slate-900 dark:hover:bg-slate-700 transition"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-sm shadow-black/10">
                        <img src={getTagIcon(tag)} alt={tag} className={`w-6 h-6 object-contain ${isWordPressIcon ? 'dark:invert' : ''}`} />
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

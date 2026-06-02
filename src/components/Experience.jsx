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

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-mono rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                  >
                    <img src={getTagIcon(tag)} alt={tag} className="w-4 h-4" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
     
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

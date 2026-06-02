import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { projects } from '../constants/projectsData'
import { getTagIcon } from '../constants/iconMapper'

export default function Projects() {
  // Sort projects programmatically from latest (newest) to old by year
  const sortedProjects = [...projects].sort((a, b) => Number(b.Year) - Number(a.Year));

  return (
    <section id="projects" className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader 
          title="Projects"
          heading="What I've Built"
          description="A showcase of end-to-end applications, custom architectures, and engineered web solutions."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {sortedProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 rounded-lg p-6 transition group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header Row: Title & Year Design */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className={`inline-block px-3 py-1 rounded-md bg-gradient-to-r ${project.color} text-white text-xs font-semibold tracking-wide uppercase`}>
                    Full-Stack Project
                  </div>
                  
                  {/* Premium, Sleek Year Badge */}
                  <span className="font-mono text-sm font-bold px-2.5 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-950 shadow-sm">
                    {project.Year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed dark:font-light text-justify">
                  {project.description}
                </p>
              </div>

              {/* Tags Section with Inline Icons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
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
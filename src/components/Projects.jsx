import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { projects } from '../constants/projectsData'
import { getTagMeta } from '../constants/techIconMapper'

export default function Projects() {
  const sortedProjects = [...projects].sort((a, b) => Number(b.Year) - Number(a.Year))

  return (
    <section id="projects" className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader
          title="Projects"
          heading="What I've Built"
          description="A showcase of production-ready applications, custom architectures, and web solutions engineered during my time working in professional agency and company environments."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {sortedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 rounded-xl overflow-hidden transition-all duration-200 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-indigo-500 dark:text-indigo-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700 text-xs select-none">·</span>
                  <span className="font-mono text-xs font-normal text-zinc-400 dark:text-zinc-500 tracking-wide">
                    {project.Year}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>

                <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 leading-loose flex-grow">
                  {project.description}
                </p>
              </div>

              {/* Tags footer — full-width pill badges */}
              <div className="px-6 py-3 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => {
                  const { icon: Icon, colorClass } = getTagMeta(tag)
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                    >
                      <Icon className={`w-3 h-3 shrink-0 ${colorClass}`} />
                      {tag}
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

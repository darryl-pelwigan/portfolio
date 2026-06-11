import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { projects } from '../constants/projectsData'
import { getTagIcon } from '../constants/techIconMapper'

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
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 rounded-xl p-6 transition-all duration-200 flex flex-col shadow-sm"
            >
              {/* Index · Year */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-indigo-500 dark:text-indigo-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-zinc-300 dark:text-zinc-700 text-xs select-none">·</span>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  {project.Year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-grow mb-5">
                {project.description}
              </p>

              {/* Tech icons — icon-only row with tooltip */}
              <div className="flex items-center gap-3 flex-wrap pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {project.tags.map((tag) => {
                  const Icon = getTagIcon(tag)
                  return (
                    <span
                      key={tag}
                      title={tag}
                      className="text-zinc-400 dark:text-zinc-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default"
                    >
                      <Icon className="w-[18px] h-[18px]" />
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

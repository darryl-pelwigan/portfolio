import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { projects } from '../constants/projectsData'
import { getTagIcon } from '../constants/iconMapper'

export default function Projects() {
  const sortedProjects = [...projects].sort((a, b) => Number(b.Year) - Number(a.Year));

  return (
    <section id="projects" className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader
          title="Projects"
          heading="What I've Built"
          description="A showcase of production-ready applications, custom architectures, and web solutions engineered during my time working in professional agency and company environments."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 rounded-xl p-6 transition duration-200 group cursor-pointer flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 dark:bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase">
                    Full-Stack Project
                  </div>

                  <span className="font-mono text-sm font-bold px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800 shadow-sm">
                    {project.Year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed dark:font-light text-justify">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-mono rounded-lg hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition"
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

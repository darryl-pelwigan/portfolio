import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { experiences } from '../constants/experienceData'
import { getTagIcon } from '../constants/techIconMapper'

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader
          title="Experience"
          heading="Where I've Worked"
          description="From custom web development to building robust backend architectures and dynamic user experiences."
        />

        <div className="space-y-5">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 rounded-xl p-7 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <p className="text-xs font-mono font-semibold text-indigo-500 dark:text-indigo-400 mb-1.5 tracking-wide">
                    {exp.period}
                  </p>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-snug">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{exp.role}</p>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 text-justify">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {exp.tags.map((tag) => {
                  const Icon = getTagIcon(tag)
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0 text-zinc-500 dark:text-zinc-400" />
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

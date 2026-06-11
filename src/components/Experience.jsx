import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { experiences } from '../constants/experienceData'
import { getTagMeta } from '../constants/techIconMapper'

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
              {/* Date — small, muted, monospaced */}
              <p className="text-xs font-mono font-normal tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-2">
                {exp.period}
              </p>

              {/* Company name — Space Grotesk, bold, tight tracking */}
              <h3 className="font-display text-xl font-bold tracking-tight text-zinc-900 dark:text-white leading-snug">
                {exp.company}
              </h3>

              {/* Role — Inter, medium, muted */}
              <p className="font-sans text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 mb-4">
                {exp.role}
              </p>

              {/* Description — Inter, relaxed leading for max readability */}
              <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 leading-loose text-justify mb-5">
                {exp.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {exp.tags.map((tag) => {
                  const { icon: Icon, colorClass } = getTagMeta(tag)
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-medium font-sans text-zinc-600 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${colorClass}`} />
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

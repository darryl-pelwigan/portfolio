import React from 'react'
import { FaBriefcase } from 'react-icons/fa6'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { experiences } from '../constants/experienceData'
import { getTagMeta } from '../constants/techIconMapper'

function TimelineCard({ exp }) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 w-full">

      {/* Card header — icon · title · company · period badge */}
      <div className="p-5 pb-4">
        <div className="flex items-start gap-3">
          {/* Icon badge */}
          <div className="shrink-0 w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center">
            <FaBriefcase className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
          </div>

          {/* Title + company */}
          <div className="flex-1 min-w-0">
            <p className="font-bold text-[15px] text-slate-800 dark:text-white leading-snug">
              {exp.role}
            </p>
            <p className="text-indigo-500 dark:text-indigo-400 text-sm font-medium mt-0.5">
              {exp.company}
            </p>
          </div>

          {/* Period — top-right for quick scanning */}
          {exp.displayPeriod && (
            <span className="shrink-0 text-[11px] font-mono font-semibold tracking-wide text-slate-400 dark:text-zinc-500 bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded-md whitespace-nowrap">
              {exp.displayPeriod}
            </span>
          )}
        </div>

        {/* Description */}
        {exp.description && (
          <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mt-4">
            {exp.description}
          </p>
        )}
      </div>

      {/* Tags footer — full-width, visually separated */}
      {exp.tags?.length > 0 && (
        <div className="px-5 py-3 border-t border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/40 flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => {
            const { icon: Icon, colorClass } = getTagMeta(tag)
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-xs font-medium text-slate-600 dark:text-zinc-300 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              >
                <Icon className={`w-3 h-3 shrink-0 ${colorClass}`} />
                {tag}
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 transition-colors duration-300"
    >
      <div className="section-container">
        <ComponentTitleHeader
          title="Experience"
          heading="Where I've Worked"
          description="From custom web development to building robust backend architectures and dynamic user experiences."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-slate-200 dark:bg-zinc-700" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={exp.id} className="relative md:grid md:grid-cols-2">
                  {/* Connector dot — filled with ring for polished look */}
                  <div className="hidden md:block absolute left-1/2 top-[22px] -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-400 dark:bg-indigo-600 z-10 ring-4 ring-slate-50 dark:ring-zinc-950" />

                  {isLeft ? (
                    <>
                      <div className="md:pr-10">
                        <TimelineCard exp={exp} />
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="md:pl-10">
                        <TimelineCard exp={exp} />
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

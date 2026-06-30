import React from 'react'
import { FaBriefcase } from 'react-icons/fa6'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { experiences } from '../constants/experienceData'
import { getTagMeta } from '../constants/techIconMapper'

function TimelineCard({ exp }) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-xl p-5 shadow-sm w-full">
      <div className="flex items-start gap-3">
        <FaBriefcase className="w-[17px] h-[17px] text-slate-400 dark:text-zinc-500 mt-0.5 shrink-0" />
        <div>
          <p className="font-bold text-[15px] text-slate-800 dark:text-white leading-snug">
            {exp.role}
          </p>
          <p className="text-blue-500 dark:text-blue-400 text-sm mt-0.5">
            {exp.company}
          </p>
          {exp.displayPeriod && (
            <p className="text-slate-400 dark:text-zinc-500 text-xs mt-1">
              {exp.displayPeriod}
            </p>
          )}
          {exp.description && (
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mt-3">
              {exp.description}
            </p>
          )}
          {exp.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
              {exp.tags.map((tag) => {
                const { icon: Icon, colorClass } = getTagMeta(tag)
                return (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs font-medium text-slate-600 dark:text-zinc-300"
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${colorClass}`} />
                    {tag}
                  </span>
                )
              })}
            </div>
          )}
        </div>
      </div>
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
          {/* Center vertical line — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-slate-200 dark:bg-zinc-700" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={exp.id} className="relative md:grid md:grid-cols-2">
                  {/* Connector dot — desktop only */}
                  <div className="hidden md:block absolute left-1/2 top-5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-slate-300 dark:border-zinc-600 bg-white dark:bg-zinc-950 z-10" />

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

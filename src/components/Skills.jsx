import React from 'react'
import { TechStackCloud } from './ui/TechStackCloud'
import { TECH_STACK, SKILL_CATEGORIES } from '../constants/skillsData'
import { getTagMeta } from '../constants/techIconMapper'
import ComponentTitleHeader from './ui/ComponentTitleHeader'

const LEVEL = {
  5: { label: 'Expert',       cls: 'text-indigo-600 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-950/40 dark:border-indigo-900/50' },
  4: { label: 'Advanced',     cls: 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-900/50' },
  3: { label: 'Intermediate', cls: 'text-amber-600 bg-amber-50 border-amber-200 dark:text-amber-500 dark:bg-amber-950/40 dark:border-amber-900/50' },
  2: { label: 'Beginner',     cls: 'text-zinc-500 bg-zinc-100 border-zinc-200 dark:text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700' },
  1: { label: 'Learning',     cls: 'text-zinc-500 bg-zinc-100 border-zinc-200 dark:text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700' },
}

const renderStars = (rating) =>
  Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? 'text-indigo-400 dark:text-indigo-400' : 'text-zinc-200 dark:text-zinc-700'}>
      ★
    </span>
  ))

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader
          title="Skills"
          heading="Tech Stack"
          description="A snapshot of my technical skills, tools, and technologies I work with."
        />

        <div className="grid md:grid-cols-2 gap-8 pb-16">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm"
            >
              {/* Category header */}
              <div className="px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
                <h3 className="text-base font-bold tracking-tight text-zinc-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="p-4 space-y-2">
                {category.skills.map((skill) => {
                  const { icon: Icon, colorClass } = getTagMeta(skill.name)
                  const level = LEVEL[skill.rating] ?? LEVEL[3]
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 hover:border-indigo-300/60 dark:hover:border-indigo-700/60 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                    >
                      {/* Icon + name */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className={`w-4 h-4 shrink-0 ${colorClass}`} />
                        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                          {skill.name}
                        </span>
                      </div>

                      {/* Stars + level badge */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:flex gap-px text-sm leading-none">
                          {renderStars(skill.rating)}
                        </span>
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${level.cls}`}>
                          {level.label}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <TechStackCloud stack={TECH_STACK} />
      </div>
    </section>
  )
}

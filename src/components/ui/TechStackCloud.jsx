import React from 'react'

const GROUP_LABELS = {
  backend:  'Backend',
  frontend: 'Frontend',
  tools:    'Tools & DevOps',
}

export function TechStackCloud({ stack }) {
  return (
    <div className="space-y-10">
      {/* Section label */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase whitespace-nowrap">
          // Core Technologies &amp; Tooling
        </span>
        <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Groups */}
      {Object.entries(stack).map(([group, items]) => (
        <div key={group}>
          {/* Group label with divider */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-zinc-400 dark:text-zinc-500">
              {GROUP_LABELS[group] ?? group}
            </span>
            <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800/80" />
          </div>

          {/* Tech items */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((tech, idx) => {
              const Icon = tech.icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
                    <Icon className={`w-[18px] h-[18px] ${tech.colorClass}`} />
                  </div>
                  <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                    {tech.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

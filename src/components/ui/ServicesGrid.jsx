import React from "react";

export function ServicesGrid({ items }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
        What I'm Doing
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((service, idx) => {
          const Icon = service.icon
          const isLastItem = idx === items.length - 1 && items.length % 2 !== 0
          return (
            <div
              key={idx}
              className={`flex items-start gap-4 p-5 rounded-xl border transition-all duration-200
                bg-zinc-50 border-zinc-200 shadow-sm
                dark:bg-zinc-900 dark:border-zinc-800
                hover:border-indigo-400/50 dark:hover:border-indigo-500/50
                ${isLastItem ? 'sm:col-span-2' : ''}`}
            >
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm mt-0.5">
                <Icon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {service.title}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

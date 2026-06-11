import React from "react";

export function TechStackCloud({ stack }) {
  const techItems = Object.values(stack).flat();

  return (
    <div className="space-y-4 text-left">
      <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
        // Core Technologies &amp; Tooling
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {techItems.map((tech, idx) => {
          const Icon = tech.icon
          return (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700">
                <Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </div>
              <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">{tech.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

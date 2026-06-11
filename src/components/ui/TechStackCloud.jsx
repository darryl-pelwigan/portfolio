import React from "react";

export function TechStackCloud({ stack }) {
  const techItems = Object.values(stack).flat();

  return (
    <div className="space-y-4 text-left">
      <h3 className="text-xs font-mono font-bold tracking-wider text-neutral-400 dark:text-zinc-500 uppercase">
        // Core Technologies & Tooling
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {techItems.map((tech, idx) => {
          const isWhiteDarkIcon = /^(WordPress|GitHub)$/i.test(tech.name)
          return (
            <div
              key={idx}
              className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`h-7 w-7 object-contain filter transition duration-300 dark:brightness-150 dark:contrast-150 ${isWhiteDarkIcon ? 'dark:invert' : ''}`}
                />
              </div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">{tech.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}
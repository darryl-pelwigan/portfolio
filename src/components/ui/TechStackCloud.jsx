import React from "react";

export function TechStackCloud({ stack }) {
  const techItems = Object.values(stack).flat();

  return (
    <div className="space-y-4 text-left">
      <h3 className="text-xs font-mono font-bold tracking-wider text-neutral-400 dark:text-zinc-500 uppercase">
        // Core Technologies & Tooling
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {techItems.map((tech, idx) => (
          <div
            key={idx}
            className="group flex items-center gap-3 rounded-3xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/90"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 shadow-sm dark:bg-cyan-500/10 dark:text-cyan-100">
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-7 w-7 object-contain dark:filter dark:invert dark:brightness-150"
              />
            </div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from "react";

export function TechStackCloud({ stack }) {
  return (
    <div className="space-y-4 text-left">
      <h3 className="text-xs font-mono font-bold tracking-wider text-neutral-400 dark:text-zinc-500 uppercase">
        // Core Technologies & Tooling
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {Object.values(stack).flat().map((tech, idx) => (
          <div 
            key={idx} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 
              bg-neutral-900 text-neutral-100 border border-neutral-800 shadow-sm 
              dark:bg-zinc-900/90 dark:text-zinc-100 dark:border-zinc-800/60 
              hover:scale-[1.03] hover:border-cyan-500/50 dark:hover:border-cyan-400/50"
          >
            <span className="text-base flex items-center justify-center">{tech.icon}</span>
            <span className="tracking-wide">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
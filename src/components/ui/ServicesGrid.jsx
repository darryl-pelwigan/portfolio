import React from "react";

export function ServicesGrid({ items }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
        What I'm Doing
      </h3>
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((service, idx) => {
          const isLastItem = idx === 2;
          return (
            <div 
              key={idx} 
              className={`flex items-start gap-4 p-6 rounded-xl transition-all duration-300 border
                bg-zinc-50 border-zinc-200 shadow-sm
                dark:bg-zinc-900 dark:border-zinc-800
                hover:border-indigo-400/50 dark:hover:border-indigo-500/50
                ${isLastItem ? 'sm:col-span-2' : ''}`}
            >
              <div className="flex-shrink-0 mt-1">
                <img src={service.icon} alt={service.title} className="w-10 h-10 dark:filter dark:invert dark:brightness-150" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-zinc-100">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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
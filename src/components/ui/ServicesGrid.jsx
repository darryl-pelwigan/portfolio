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
                bg-neutral-50/50 border-neutral-200/80 shadow-sm
                dark:bg-zinc-900/20 dark:border-gray-900/80
                hover:border-neutral-300 dark:hover:border-zinc-800
                ${isLastItem ? 'sm:col-span-2' : ''}`}
            >
              <div className="flex-shrink-0 mt-1">{service.icon}</div>
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
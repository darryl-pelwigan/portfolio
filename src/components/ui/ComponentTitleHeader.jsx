import React from "react";

export default function ComponentTitleHeader({ title, heading, description }) {
  return (
    <div className="mb-12 md:mb-16 text-center md:text-left mx-auto md:mx-0">
      {/* Category Tag */}
      <div className="flex justify-center md:justify-start mb-3">
        <span className="text-xs font-mono font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase">
          // {title}
        </span>
      </div>
      
      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white leading-tight">
        {heading}
      </h2>
      
      {/* Description Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
}
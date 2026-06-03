import React from 'react';

export function MockEditorWindow({ imgPath }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-zinc-800 shadow-xl group">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300" />
      <div className="relative bg-neutral-100 dark:bg-neutral-950 aspect-[4/5] w-full overflow-hidden">
        <img 
          src={imgPath} 
          alt="Profile" 
          className="w-full h-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
        />
      </div>
    </div>
  );
}
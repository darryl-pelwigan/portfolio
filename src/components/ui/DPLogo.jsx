import React from 'react'

export default function DPLogo({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 group focus:outline-none"
      aria-label="Darryl Pelwigan — Portfolio"
    >
      {/* Monogram badge */}
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-200">
        <span className="font-display text-[13px] font-bold text-white select-none tracking-tight">
          DP
        </span>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none gap-[3px]">
        <span className="font-display text-[15px] font-bold text-zinc-900 dark:text-white tracking-tight leading-none group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
          Darryl
        </span>
        <span className="font-sans text-[9px] font-semibold text-zinc-400 dark:text-zinc-500 tracking-[0.22em] uppercase leading-none">
          Portfolio
        </span>
      </div>
    </button>
  )
}

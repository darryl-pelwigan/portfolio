import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 py-8 transition-colors duration-300">
      <div className="section-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-zinc-500 dark:text-zinc-400">© 2026 Darryl Pelwigan. All rights reserved.</p>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-2">Crafting modern experiences with clean design and clear communication.</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4">
          <a
            href="mailto:darrylpelwigan@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 transition hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            <span aria-hidden="true">✉️</span>
            darrylpelwigan@gmail.com
          </a>
          <a
            href="https://drive.google.com/file/d/1u5PAhfLObayZqJaIjkM9LOdbxhJljmhw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white px-4 py-2 text-sm text-white transition"
          >
            View Resume
          </a>
          <a
            href="https://github.com/darryl-pelwigan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/darryl-pelwigan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

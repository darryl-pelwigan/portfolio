import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 py-8 transition-colors duration-300">
      <div className="section-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-gray-500 dark:text-gray-400">© 2026 Darryl Pelwigan. All rights reserved.</p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Crafting modern experiences with clean design and clear communication.</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4">
          <a
            href="mailto:darrylpelwigan@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-800 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 transition hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            <span aria-hidden="true">✉️</span>
            darrylpelwigan@gmail.com
          </a>
          <a
            href="https://github.com/darryl-pelwigan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/darryl-pelwigan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

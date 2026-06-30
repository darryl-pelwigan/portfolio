import React from 'react'

const MailIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5V18a2 2 0 002 2h14a2 2 0 002-2V8.5M3 8.5l8.5 5.5L20 8.5M3 8.5V6a2 2 0 012-2h14a2 2 0 012 2v2.5" />
  </svg>
)

const GithubIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452H17.01v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.588V9h3.3v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.922 1.922 0 01-1.92-1.921 1.923 1.923 0 011.92-1.923 1.922 1.922 0 011.921 1.923 1.921 1.921 0 01-1.921 1.921zM6.999 20.452H3.671V9h3.328v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 py-8 transition-colors duration-300">
      <div className="section-container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">© 2026 Darryl Pelwigan</p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
            Crafting modern experiences with clean design and clear communication.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href="mailto:darrylpelwigan@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 transition-all hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 hover:shadow-sm"
          >
            <MailIcon />
            darrylpelwigan@gmail.com
          </a>

          <a
            href="https://github.com/darryl-pelwigan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 transition-all hover:border-zinc-400 hover:text-zinc-900 dark:hover:border-zinc-500 dark:hover:text-white hover:shadow-sm"
          >
            <GithubIcon />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/darryl-pelwigan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 transition-all hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 hover:shadow-sm"
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          <a
            href="https://drive.google.com/file/d/1u5PAhfLObayZqJaIjkM9LOdbxhJljmhw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:shadow-sm"
          >
            View Resume
          </a>
        </div>

      </div>
    </footer>
  )
}

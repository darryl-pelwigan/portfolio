import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { contactMethods } from '../constants/contactData'

const contactIcons = {
  email: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5V18a2 2 0 002 2h14a2 2 0 002-2V8.5M3 8.5l8.5 5.5L20 8.5M3 8.5V6a2 2 0 012-2h14a2 2 0 012 2v2.5" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.25a2.25 2.25 0 012.25-2.25h2.5a1 1 0 01.97.757l.75 2.75a1 1 0 01-.262 1.006l-1.5 1.5a11.042 11.042 0 005.5 5.5l1.5-1.5a1 1 0 011.006-.262l2.75.75a1 1 0 01.757.97v2.5A2.25 2.25 0 0118.75 21H18a17 17 0 01-15-15V5.25z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  viber: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l1.5 1.5 3-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19.5h6" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader
          title="Contact Me"
          heading="Let's Build Something"
          description="Have a project in mind? Reach out through any of these channels—I'm always open to discussing new opportunities."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.type === 'external' ? '_blank' : undefined}
              rel={method.type === 'external' ? 'noopener noreferrer' : undefined}
              className="group rounded-xl border border-zinc-200 bg-zinc-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/60 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/60"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-sm shadow-indigo-500/20 transition-colors group-hover:bg-indigo-600">
                  {contactIcons[method.icon]}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500 mb-0.5">
                    {method.label}
                  </p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {method.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'
import { contactMethods } from '../constants/contactData'

const contactIcons = {
  email: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5V18a2 2 0 002 2h14a2 2 0 002-2V8.5M3 8.5l8.5 5.5L20 8.5M3 8.5V6a2 2 0 012-2h14a2 2 0 012 2v2.5" />
    </svg>
  ),
  phone: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.25a2.25 2.25 0 012.25-2.25h2.5a1 1 0 01.97.757l.75 2.75a1 1 0 01-.262 1.006l-1.5 1.5a11.042 11.042 0 005.5 5.5l1.5-1.5a1 1 0 011.006-.262l2.75.75a1 1 0 01.757.97v2.5A2.25 2.25 0 0118.75 21H18a17 17 0 01-15-15V5.25z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  viber: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l1.5 1.5 3-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19.5h6" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader 
          title="Contact Me"
          heading="Let's Build Something"
          description="Have a project in mind? Reach out through any of these channels—I'm always open to discussing new opportunities."
        />

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-gray-200 bg-slate-50 p-8 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-950 dark:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.45)]">
            <p className="max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300">
              Whether you have a new project, a question about my work, or want to collaborate—I'm here to help. Pick your preferred contact method below to get in touch.
            </p>
          </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map((method) => (
                <a
                  key={method.id}
                  href={method.href}
                  target={method.type === 'external' ? '_blank' : undefined}
                  rel={method.type === 'external' ? 'noopener noreferrer' : undefined}
                  className="group rounded-[1.75rem] border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-400 dark:hover:bg-slate-900/90"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500 text-white shadow-sm shadow-cyan-500/20 transition group-hover:bg-cyan-600">
                      {contactIcons[method.icon]}
                    </span>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                        {method.label}
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 break-words">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}

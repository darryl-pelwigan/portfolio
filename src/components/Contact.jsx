import React, { useState } from 'react'
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader 
          title="Contact Me"
          heading="Let's Build Something"
          description="Have a project in mind? Reach out through any of these channels—I'm always open to discussing new opportunities."
        />

        <div className="grid md:grid-cols-1 gap-12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.href}
                target={method.type === 'external' ? '_blank' : undefined}
                rel={method.type === 'external' ? 'noopener noreferrer' : undefined}
                className="group border border-gray-300 dark:border-gray-800 rounded-3xl bg-gray-50 dark:bg-gray-950 p-5 transition hover:border-cyan-400 dark:hover:border-cyan-400 hover:bg-white dark:hover:bg-gray-900"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500 text-white shadow-sm shadow-cyan-500/10 transition group-hover:bg-cyan-600">
                    {contactIcons[method.icon]}
                  </span>
                  <div className="grid w-full grid-cols-[auto_1fr] gap-4 items-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                      {method.label}
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-200 break-words text-right">
                      {method.value}
                    </span>
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

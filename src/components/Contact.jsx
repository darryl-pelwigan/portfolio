import React, { useState } from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'

const contactMethods = [
  {
    id: 1,
    icon: '📧',
    label: 'Email',
    value: 'hello@portfolio.dev',
    href: 'mailto:hello@portfolio.dev',
    type: 'link'
  },
  {
    id: 2,
    icon: '📱',
    label: 'Contact Number',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    type: 'link'
  },
  {
    id: 3,
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
    type: 'external'
  },
  {
    id: 4,
    icon: '💬',
    label: 'Viber',
    value: '+1 (555) 123-4567',
    href: 'viber://chat?number=%2B15551234567',
    type: 'link'
  }
]

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
          {/* Contact Methods - Card Grid */}
          <div className="grid grid-cols-2 gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.href}
                target={method.type === 'external' ? '_blank' : undefined}
                rel={method.type === 'external' ? 'noopener noreferrer' : undefined}
                className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:border-cyan-400 dark:hover:border-cyan-400 rounded-lg p-4 transition group cursor-pointer flex flex-col items-center justify-center text-center h-32 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition transform">
                  {method.icon}
                </div>
                <h4 className="text-xs font-semibold mb-1 text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  {method.label}
                </h4>
                <p className="text-sm font-mono text-gray-900 dark:text-gray-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition break-all">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

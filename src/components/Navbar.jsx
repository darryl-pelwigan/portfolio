import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection('home')}>
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
              Contact
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 transition"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 001.414-1.414l-.707-.707zM5 11a1 1 0 100-2H4a1 1 0 100 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 transition"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 001.414-1.414l-.707-.707zM5 11a1 1 0 100-2H4a1 1 0 100 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button 
              className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-white dark:bg-black">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 transition">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 transition">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 transition">
              Experience
            </button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 transition">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2 transition">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

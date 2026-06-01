import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 py-8 transition-colors duration-300">
      <div className="section-container text-center">
        <p className="text-gray-500 dark:text-gray-500 mb-4">
          © 2026 Darryl Pelwigan. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com"
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

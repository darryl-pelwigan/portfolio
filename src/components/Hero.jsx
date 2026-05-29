import React from 'react'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="pt-32 pb-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Building AI That <span className="gradient-text">Ships</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Not just research — production systems that scale. I'm an AI engineer specializing in building end-to-end machine learning systems that deliver real value.
            </p>

            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 font-mono text-sm mb-8 border border-gray-300 dark:border-gray-800 transition-colors duration-300">
              <div className="text-green-400">$ whoami</div>
              <div className="text-gray-700 dark:text-gray-300">&gt; ai_engineer</div>
              <div className="text-green-400 mt-2">$ cat skills.txt</div>
              <div className="text-gray-700 dark:text-gray-300">&gt; Python, TypeScript, PyTorch,</div>
              <div className="text-gray-700 dark:text-gray-300">&gt; React, LLMs, MLOps, Kubernetes</div>
              <div className="text-green-400 mt-2">$ echo $STATUS</div>
              <div className="text-gray-700 dark:text-gray-300">&gt; building the future</div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition text-white"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-gray-400 dark:border-gray-600 hover:border-gray-600 dark:hover:border-gray-400 rounded-lg font-semibold transition text-gray-900 dark:text-white"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-800 text-center transition-colors duration-300">
              <div className="text-4xl font-bold gradient-text">30+</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Projects Shipped</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-800 text-center transition-colors duration-300">
              <div className="text-4xl font-bold gradient-text">5+</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Years Experience</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-800 text-center transition-colors duration-300">
              <div className="text-4xl font-bold gradient-text">100+</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Models Trained</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-800 text-center transition-colors duration-300">
              <div className="text-4xl font-bold gradient-text">∞</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Papers Read</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

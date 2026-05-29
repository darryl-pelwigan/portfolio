import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a passionate AI engineer based in San Francisco with a focus on building production-grade machine learning systems that create real impact. My expertise spans the full spectrum of AI development—from model training and optimization to deploying systems at scale.
              </p>
              
              <p>
                With over 5 years of experience in the field, I've worked with cutting-edge technologies including large language models, computer vision systems, and MLOps infrastructure. I believe that the best AI isn't the most complex—it's the one that reliably delivers value to users.
              </p>
              
              <p>
                When I'm not training models or optimizing inference pipelines, you'll find me contributing to open-source ML tools, writing about practical AI engineering challenges, and exploring the latest advances in the field. I'm always excited to collaborate on projects that push the boundaries of what's possible with AI.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase font-semibold mb-2">Location</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">San Francisco, CA</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase font-semibold mb-2">Specialization</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">AI/ML Systems</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase font-semibold mb-2">Experience</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">5+ Years</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase font-semibold mb-2">Current Status</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Open to Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Skills Highlights */}
          <div className="space-y-8">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 border border-gray-300 dark:border-gray-800 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Core Competencies</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">Large Language Models & RAG</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">Computer Vision & Image Processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">Model Training & Fine-tuning</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">MLOps & Infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">Full-Stack ML Systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">Performance Optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-gray-900 rounded-lg p-8 border border-blue-200 dark:border-gray-800 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Philosophy</h3>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "The best AI systems are those that solve real problems, deliver measurable value, and scale with reliability. I focus on bridging the gap between research and production, turning cutting-edge concepts into robust, deployable solutions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

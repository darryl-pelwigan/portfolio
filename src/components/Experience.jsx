import React from 'react'

const experiences = [
  {
    id: 1,
    period: '2023 — Present',
    company: 'DeepMind',
    role: 'Senior AI Research Engineer',
    description: 'Leading research on multi-modal foundation models. Built internal tooling for large-scale distributed training across TPU pods.',
    tags: ['JAX', 'TPU', 'Transformers', 'Python']
  },
  {
    id: 2,
    period: '2021 — 2023',
    company: 'OpenAI',
    role: 'ML Platform Engineer',
    description: 'Designed and scaled inference infrastructure for GPT models. Reduced latency by 40% through model optimization and caching strategies.',
    tags: ['Python', 'Kubernetes', 'CUDA', 'Redis']
  },
  {
    id: 3,
    period: '2020 — 2021',
    company: 'Scale AI',
    role: 'Full-Stack ML Engineer',
    description: 'Built data labeling pipelines and quality assurance systems for computer vision datasets. Shipped annotation tools used by 5k+ labelers.',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL']
  },
  {
    id: 4,
    period: '2019 — 2020',
    company: 'Hugging Face',
    role: 'Open Source Engineer (Intern)',
    description: 'Contributed to the Transformers library. Implemented model architectures and wrote documentation for community adoption.',
    tags: ['PyTorch', 'Transformers', 'TypeScript', 'Docker']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Where I've Worked</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">From open-source contributions to scaling AI at top companies.</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 rounded-lg p-8 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-blue-400 font-semibold mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{exp.role}</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

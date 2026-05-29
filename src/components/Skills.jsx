import React from 'react'

const skillCategories = [
  {
    category: 'AI / Machine Learning',
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'LangChain', level: 90 },
      { name: 'Transformers', level: 88 },
      { name: 'Computer Vision', level: 85 },
      { name: 'MLOps', level: 82 }
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'TypeScript', level: 93 },
      { name: 'React / Next.js', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 95 },
      { name: 'Go', level: 75 }
    ]
  },
  {
    category: 'Infrastructure',
    skills: [
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 85 },
      { name: 'AWS', level: 88 },
      { name: 'CI/CD', level: 87 },
      { name: 'PostgreSQL', level: 83 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Tech Stack</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">The tools and technologies I work with daily.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-lg p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{category.category}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

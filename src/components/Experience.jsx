import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'

const experiences = [
  {
    id: 1,
    period: 'July 2024 — Present',
    company: 'Bnext INC.',
    role: 'Software Engineer',
    description: 'Full-Stack Developer dedicated to building optimized web applications and custom Web APIs that balance engineering excellence with business goals. I am passionate about driving software process improvements that streamline delivery and increase code quality. Known for strong cross-functional collaboration, I work hand-in-hand with engineering teams, product owners, and business analysts to translate complex visions into scalable, maintainable technical solutions.',
    tags: ['Laravel', 'Python Django', 'React JS', 'Tailwind CSS', 'PostgreSQL', 'API Development', 'WordPress', 'Ubuntu Server Configuration']
  },
  {
    id: 2,
    period: 'October 2023 — May 2024',
    company: 'Reveron Consulting / Digile INC.',
    role: 'Backend Developer',
    description: 'Served as a Backend Developer responsible for designing application workflows and executing complex cross-platform integrations using PHP, Java, and Joget. Championed codebase maintainability by establishing reusable code libraries and configuring front-end usability layouts to optimize the user experience. Led the technical implementation of dynamic Java-based workflows within Joget, successfully executing secure API integrations to seamlessly bridge them with the core PHP application infrastructure.',
    tags: ['PHP', 'Vanilla JS', 'Joget', 'Java', 'API Integration']
  },
  {
    id: 3,
    period: 'September 2021 — March 2022',
    company: 'Application Developer (Contractual)',
    role: 'Bravissimo Resourcing, Inc',
    description: 'Full-Stack Engineer dedicated to designing, building, and configuring high-quality applications that satisfy specific business processes and functional requirements. Brings strong problem-solving capabilities to software operations, efficiently analyzing, investigating, and resolving technical incidents for clients to maintain peak system health.',
    tags: ['Basic Apigee API Management', 'Node JS', 'React JS', 'MySQL']
  },
  {
    id: 4,
    period: 'April 2018 — September 2020',
    company: 'Danalex Corporation INC.',
    role: 'Software Developer',
    description: 'Responsible for end-to-end development, implementation, and maintenance of enterprise web applications, continuously expanding system capabilities through feature development. Actively manages application stability by diagnosing, investigating, and resolving critical, client-facing software incidents. Additionally, bridges the gap between technical architecture and user experience by producing detailed documentation, technical manuals, and deployment guides.',
    tags: ['PHP', 'Laravel', 'CodeIgniter', 'Vanilla JS', 'Jquery', 'Ajax', 'MySQL', 'Linux / Ubuntu Server Configuration', 'WordPress']
  }
]

// Centralized tag helper mapping to add matching icons automatically
const getTagIcon = (tag) => {
  const normTag = tag.toLowerCase().trim();
  if (normTag.includes('php')) return '🐘';
  if (normTag.includes('laravel')) return '❤️';
  if (normTag.includes('codeigniter')) return '🔥';
  if (normTag.includes('wordpress')) return '🌐';
  if (normTag.includes('elementor')) return '📐';
  if (normTag.includes('react')) return '⚛️';
  if (normTag.includes('python')) return '🐍';
  if (normTag.includes('django')) return '💚';
  if (normTag.includes('javascript') || normTag === 'js') return '💛';
  if (normTag.includes('typescript') || normTag === 'ts') return '💙';
  if (normTag.includes('tailwind')) return '🌊';
  if (normTag.includes('bootstrap')) return '💜';
  if (normTag.includes('css')) return '🎨';
  if (normTag.includes('mysql') || normTag.includes('postgresql') || normTag.includes('sql')) return '🐬';
  if (normTag.includes('linux') || normTag.includes('ubuntu') || normTag.includes('server')) return '🐧';
  if (normTag.includes('api') || normTag.includes('architecture')) return '🚀';
  return '🛠️'; 
};

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader 
          title="Experience"
          heading="Where I've Worked"
          description="From custom web development to building robust backend architectures and dynamic user experiences."
        />

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

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-mono rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                  >
                    <span>{getTagIcon(tag)}</span>
                    <span>{tag}</span>
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

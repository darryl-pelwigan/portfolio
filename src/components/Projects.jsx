import React from 'react'
import ComponentTitleHeader from './ui/ComponentTitleHeader'

const projects = [
  {
    id: 1,
    title: 'HRIS Management System',
    description: 'An enterprise-grade Human Resource Information System featuring automated payroll processing, employee lifecycle management, leave tracking, and dynamic role-based access control (RBAC). Built with a focus on database optimization and high-performance server side rendering.',
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'Linux Server'],
    color: 'from-blue-500 to-yellow-600',
    Year: '2018',
  },
  {
    id: 2,
    title: 'Purchase Order Request System',
    description: 'An internal procurement and supply-chain logging platform designed to streamline corporate purchasing workflows. Includes automated email notification triggers, multi-stage approval pipelines, budget checking mechanisms, and audit-ready data tables.',
    tags: ['Laravel', 'MySQL', 'Ubuntu Server'],
    color: 'from-purple-500 to-amber-600',
    Year: '2019',
  },
  {
    id: 3,
    title: 'Ticketing System for Issues and Requests',
    description: 'A centralized service desk solution handling incoming internal corporate technical issues and facility requests. Features real-time status updates, priority SLA matrix queues, automated agent assignments, and custom analytical reporting dashboards.',
    tags: ['Laravel', 'Bootstrap', 'MySQL'],
    color: 'from-cyan-500 to-red-600',
    Year: '2025',
  },
  {
    id: 4,
    title: 'Real Estate Listing Platform',
    description: 'A dynamic property discovery engine built with advanced location filtering, map integration systems, and custom database relations. Implements a responsive frontend coupled with optimized server relational schemas to handle deep attribute search indices seamlessly.',
    tags: ['Python', 'Django', 'React JS', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    color: 'from-emerald-500 to-cyan-600',
    Year: '2026',
  },
  {
    id: 5,
    title: 'Timesheet Tracker / Management System',
    description: 'A robust time tracking and productivity platform featuring an interactive tracking dashboard interface, weekly logging grids, and custom REST APIs. Enables detailed project analytics, exportable billable hours logging sheets, and client billing management reporting.',
    tags: ['Laravel', 'React JS', 'API', 'MySQL', 'MUI'],
    color: 'from-blue-500 to-rose-600',
    Year: '2026',
  },
  {
    id: 6,
    title: 'Website - Law Firm Platform',
    description: 'A dynamic web application custom-engineered for a legal sector client. Built with custom post types and relational database structures to manage complex case listings, legal services, and firm archives. Developed using optimized, lean custom CSS and modern JavaScript to guarantee exceptional site speed and a tailored, high-performance UI without relying on unnecessary plugins.',
    tags: ['WordPress', 'Elementor', 'Custom CSS', 'JavaScript', 'Dynamic Architecture'],
    color: 'from-amber-600 to-green-700',
    Year: '2025',
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

export default function Projects() {
  // Sort projects programmatically from latest (newest) to old by year
  const sortedProjects = [...projects].sort((a, b) => Number(b.Year) - Number(a.Year));

  return (
    <section id="projects" className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="section-container">
        <ComponentTitleHeader 
          title="Projects"
          heading="What I've Built"
          description="A showcase of end-to-end applications, custom architectures, and engineered web solutions."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {sortedProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 rounded-lg p-6 transition group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header Row: Title & Year Design */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className={`inline-block px-3 py-1 rounded-md bg-gradient-to-r ${project.color} text-white text-xs font-semibold tracking-wide uppercase`}>
                    Full-Stack Project
                  </div>
                  
                  {/* Premium, Sleek Year Badge */}
                  <span className="font-mono text-sm font-bold px-2.5 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-950 shadow-sm">
                    {project.Year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed dark:font-light text-justify">
                  {project.description}
                </p>
              </div>

              {/* Tags Section with Inline Icons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
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
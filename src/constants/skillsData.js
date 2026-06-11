import {
  SiPhp, SiLaravel, SiPython, SiDjango, SiWordpress,
  SiMysql, SiPostgresql, SiReact, SiTailwindcss, SiTypescript,
  SiJavascript, SiHtml5, SiCss, SiUbuntu, SiGithub,
  SiPostman, SiDocker
} from 'react-icons/si'
import { FaServer } from 'react-icons/fa6'

export const TECH_STACK = {
  backend: [
    { name: 'PHP',        icon: SiPhp,        colorClass: 'text-violet-500 dark:text-violet-400' },
    { name: 'Laravel',    icon: SiLaravel,    colorClass: 'text-red-500 dark:text-red-400' },
    { name: 'Python',     icon: SiPython,     colorClass: 'text-yellow-500 dark:text-yellow-400' },
    { name: 'Django',     icon: SiDjango,     colorClass: 'text-emerald-600 dark:text-emerald-400' },
    { name: 'WordPress',  icon: SiWordpress,  colorClass: 'text-sky-600 dark:text-sky-400' },
    { name: 'MySQL',      icon: SiMysql,      colorClass: 'text-sky-600 dark:text-sky-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, colorClass: 'text-indigo-500 dark:text-indigo-400' },
  ],
  frontend: [
    { name: 'ReactJS',      icon: SiReact,      colorClass: 'text-cyan-500 dark:text-cyan-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, colorClass: 'text-cyan-500 dark:text-cyan-400' },
    { name: 'TypeScript',   icon: SiTypescript, colorClass: 'text-blue-500 dark:text-blue-400' },
    { name: 'JavaScript',   icon: SiJavascript, colorClass: 'text-yellow-400 dark:text-yellow-300' },
    { name: 'HTML',         icon: SiHtml5,      colorClass: 'text-orange-500 dark:text-orange-400' },
    { name: 'CSS',          icon: SiCss,        colorClass: 'text-blue-500 dark:text-blue-400' },
  ],
  tools: [
    { name: 'Ubuntu / Linux', icon: SiUbuntu,  colorClass: 'text-orange-500 dark:text-orange-400' },
    { name: 'GitHub',         icon: SiGithub,  colorClass: 'text-zinc-600 dark:text-zinc-300' },
    { name: 'Postman',        icon: SiPostman, colorClass: 'text-orange-500 dark:text-orange-400' },
    { name: 'Docker',         icon: SiDocker,  colorClass: 'text-sky-500 dark:text-sky-400' },
  ]
}

export const SKILL_CATEGORIES = [
  {
    category: 'Web Development',
    skills: [
      { name: 'Laravel', rating: 5 },
      { name: 'Django Rest Framework', rating: 4 },
      { name: 'React JS', rating: 4 },
      { name: 'PostgreSQL', rating: 4 },
      { name: 'WordPress using Elementor', rating: 4 },
      { name: 'TypeScript', rating: 3 },
    ]
  },
  {
    category: 'Infrastructure & Other Tools',
    skills: [
      { name: 'GitHub', rating: 5 },
      { name: 'Postman', rating: 5 },
      { name: 'Ubuntu / Linux', rating: 3 },
      { name: 'Docker', rating: 3 },
    ]
  }
]

export const SERVICES = [
  {
    title: 'Backend Architecture',
    description: 'Designing robust, secure, and scalable backend applications and RESTful APIs using PHP (Laravel) and Python (Django) coupled with optimized SQL databases.',
    icon: FaServer,
    colorClass: 'text-violet-500 dark:text-violet-400'
  },
  {
    title: 'Frontend Development',
    description: 'Crafting highly responsive, interactive, and high-performance user interfaces using React.js, Tailwind CSS, and modern JavaScript environments.',
    icon: SiReact,
    colorClass: 'text-cyan-500 dark:text-cyan-400'
  },
  {
    title: 'CMS WordPress Development',
    description: 'Building dynamic, highly responsive websites using Elementor. I focus on clean development—leveraging lean custom CSS and efficient workflows to maintain design speed and performance while ensuring maintainability and scalability.',
    icon: SiWordpress,
    colorClass: 'text-sky-600 dark:text-sky-400'
  }
]

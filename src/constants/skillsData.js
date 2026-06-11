import {
  SiPhp, SiLaravel, SiPython, SiDjango, SiWordpress,
  SiMysql, SiPostgresql, SiReact, SiTailwindcss, SiTypescript,
  SiJavascript, SiHtml5, SiCss, SiUbuntu, SiGithub,
  SiPostman, SiDocker
} from 'react-icons/si'
import { FaCode, FaServer } from 'react-icons/fa6'

export const TECH_STACK = {
  backend: [
    { name: 'PHP', icon: SiPhp },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Python', icon: SiPython },
    { name: 'Django', icon: SiDjango },
    { name: 'WordPress', icon: SiWordpress },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql }
  ],
  frontend: [
    { name: 'ReactJS', icon: SiReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss }
  ],
  tools: [
    { name: 'Ubuntu / Linux', icon: SiUbuntu },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Postman', icon: SiPostman },
    { name: 'Docker', icon: SiDocker }
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
    icon: FaServer
  },
  {
    title: 'Frontend Development',
    description: 'Crafting highly responsive, interactive, and high-performance user interfaces using React.js, Tailwind CSS, and modern JavaScript environments.',
    icon: SiReact
  },
  {
    title: 'CMS WordPress Development',
    description: 'Building dynamic, highly responsive websites using Elementor. I focus on clean development—leveraging lean custom CSS and efficient workflows to maintain design speed and performance while ensuring maintainability and scalability.',
    icon: SiWordpress
  }
]

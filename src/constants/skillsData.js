import apiIcon from '../assets/api.svg'
import phpIcon from '../assets/php.svg'
import laravelIcon from '../assets/laravel.svg'
import pythonIcon from '../assets/python.svg'
import djangoIcon from '../assets/django.svg'
import wordpressIcon from '../assets/wordpress.svg'
import mysqlIcon from '../assets/mysq.svg'
import postgresqlIcon from '../assets/postgresql.svg'
import reactIcon from '../assets/react.svg'
import tailwindIcon from '../assets/tailwindcss.svg'
import githubIcon from '../assets/github.svg'
import ubuntuIcon from '../assets/ubuntu.svg'
import postmanIcon from '../assets/postman.svg'
import jsIcon from '../assets/javascript.svg'
import htmlIcon from '../assets/html-5.svg'
import cssIcon from '../assets/css-3.svg'

export const TECH_STACK = {
  backend: [
    { name: 'PHP', icon: phpIcon },
    { name: 'Laravel', icon: laravelIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'Django', icon: djangoIcon },
    { name: 'WordPress', icon: wordpressIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'PostgreSQL', icon: postgresqlIcon }
  ],
  frontend: [
    { name: 'ReactJS', icon: reactIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon }
  ],
  tools: [
    { name: 'Ubuntu / Linux', icon: ubuntuIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Postman', icon: postmanIcon }
  ]
}

export const SKILL_CATEGORIES = [
  {
    category: 'Web Development',
    skills: [
      { name: 'Laravel', rating: 5 },
      { name: 'Python Django Rest Framework', rating: 4 },
      { name: 'React JS', rating: 5 },
      { name: 'WordPress using Elementor', rating: 4 },
      { name: 'TypeScript', rating: 4 },
      { name: 'PostgreSQL', rating: 4 }
    ]
  },
  {
    category: 'Infrastructure & Other Tools',
    skills: [
      { name: 'Ubuntu / Linux', rating: 4 },
      { name: 'GitHub', rating: 5 },
      { name: 'Docker', rating: 4 },
      { name: 'AWS', rating: 3 },
      { name: 'Postman', rating: 5 }
    ]
  }
]

export const SERVICES = [
  {
    title: 'Backend Architecture',
    description: 'Designing robust, secure, and scalable backend applications and RESTful APIs using PHP (Laravel) and Python (Django) coupled with optimized SQL databases.',
    icon: apiIcon
  },
  {
    title: 'Frontend Development',
    description: 'Crafting highly responsive, interactive, and high-performance user interfaces using React.js, Tailwind CSS, and modern JavaScript environments.',
    icon: reactIcon
  },
  {
    title: 'CMS WordPress Development',
    description: 'Building dynamic, highly responsive websites using Elementor. I focus on clean development—leveraging lean custom CSS and efficient workflows to maintain design speed and performance while ensuring maintainability and scalability.',
    icon: wordpressIcon
  }
]

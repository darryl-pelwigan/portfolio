// constants/aboutData.js
import React from 'react';

export const TECH_STACK = {
  backend: [
    { name: 'PHP', icon: '🐘' },
    { name: 'Laravel', icon: '❤️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '💚' },
    { name: 'WordPress', icon: '🌐' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐬' }, 
  ],
  frontend: [
    { name: 'ReactJS', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'HTML', icon: '🧡' },
    { name: 'CSS', icon: '💙' },
  ],
  tools: [
    { name: 'Ubuntu / Linux', icon: '🐧' },
    { name: 'GitHub', icon: '🐱' },
    { name: 'Postman', icon: '🚀' },
  ]
};

export const SERVICES = [
  {
    title: "Backend Architecture",
    description: "Designing robust, secure, and scalable backend applications and RESTful APIs using PHP (Laravel) and Python (Django) coupled with optimized SQL databases.",
    icon: (
      <svg className="w-8 h-8 text-amber-500 dark:text-amber-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    )
  },
  {
    title: "Frontend Development",
    description: "Crafting highly responsive, interactive, and high-performance user interfaces using React.js, Tailwind CSS, and modern JavaScript environments.",
    icon: (
      <svg className="w-8 h-8 text-amber-500 dark:text-amber-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  },
  {
    title: "CMS WordPress Development",
    description: "Building dynamic, highly responsive websites using Elementor. I focus on 'clean' development—leveraging lean custom CSS and efficient workflows to maintain design speed and performance while ensuring maintainability and scalability.",
    icon: (
      <svg className="w-8 h-8 text-amber-500 dark:text-amber-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 0 1 8.716 2.253M12 3a9.003 9.003 0 0 0-8.716 2.253" />
      </svg>
    )
  }
];
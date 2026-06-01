# Full Stack Developer Portfolio

A modern, responsive portfolio website template focused on Full Stack Developer work. Built with React, Vite, and Tailwind CSS for the frontend — easily extended with a Node/Express or other backend for API and data needs.

## Why This Template

- Modern frontend tooling with fast development feedback using Vite
- Responsive, mobile-first UI with Tailwind CSS
- Component-driven structure to showcase projects, skills, and experience
- Easy to extend into a full-stack app (add an API, database, or server-side rendering)

## Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Responsive Layout**: Works across phones, tablets, and desktop
- **Componentized UI**: Clear React components for each section
- **Easy Deployment**: Ready for static hosting (Vercel) or full-stack deployment

## Sections

- **Hero**: Introduction and headline
- **About**: Short biography and highlights
- **Projects**: Showcase work with descriptions and tech stacks
- **Skills**: Technical proficiencies and tools
- **Experience**: Timeline of roles and achievements
- **Contact**: Contact links and form
- **Footer**: Social links and copyright

## Project Structure (this repository)

```
portfolio/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── components/ui/
│   │   ├── BiographySection.jsx
│   │   ├── ComponentTitleHeader.jsx
│   │   ├── InteractiveTerminal.jsx
│   │   ├── MockEditorWindow.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── SocialLinks.jsx
│   │   └── TechStackCloud.jsx
│   ├── constants/
│   │   └── Data.jsx
│   └── context/
│       └── ThemeContext.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 16+ is recommended
- npm (or yarn)

### Install & Run

```bash
npm install
npm run dev
```

Open http://localhost:5173 to view the site locally.

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` folder.

## Customization Guide

Edit the component files inside `src/components` to update content and layout. Key files:

- `src/components/Hero.jsx` — headline, name, hero stats
- `src/components/About.jsx` — biography and summary
- `src/components/Projects.jsx` — project cards and details
- `src/components/Skills.jsx` — skills and proficiency visualization
- `src/components/Experience.jsx` — work history timeline
- `src/components/Contact.jsx` — contact links and form behavior
- `src/components/Footer.jsx` — social links and footer content

Shared UI components live in `src/components/ui/` and constants are in `src/constants/Data.jsx`.

## Extending to Full Stack

To turn this into a full-stack portfolio, add a backend service (e.g., Node + Express, Fastify, or any server) to supply project data, handle contact form submissions, or serve a REST/GraphQL API. Common steps:

1. Create a `server/` folder with an Express app
2. Add API endpoints for projects, posts, or contact submissions
3. Secure and host the backend (Heroku, Render, Vercel Server Functions, or a VPS)
4. Point frontend fetch calls to the backend API (use `import.meta.env` for base URLs)

## Deployment

This project can be deployed as a static site (frontend-only) or as a full-stack app:

- Static frontend: Deploy `dist/` to Vercel, Netlify, or any static host
- Full-stack: Deploy backend separately or as serverless functions, and configure frontend to call the API

## Tips

1. Replace placeholder visuals with real screenshots or images in the Projects section
2. Connect the Contact form to a server, EmailJS, or Formspree for real submissions
3. Add SEO meta tags in `index.html` and structured data for better discoverability

## Resources

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

---
Last Updated: June 2026

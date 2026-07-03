# Darryl Pelwigan — Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://darrylpelwigan.vercel.app/)
[![Portfolio](https://img.shields.io/badge/Live%20Portfolio-darrylpelwigan.vercel.app-6366f1?style=for-the-badge&logo=globe&logoColor=white)](https://darrylpelwigan.vercel.app/)

> This is the personal portfolio of **Darryl Pelwigan** — a Full-Stack Web Developer based in the Philippines. The live site at [darrylpelwigan.vercel.app](https://darrylpelwigan.vercel.app/) is my own profile, deployed and maintained on Vercel.

Built with React, Vite, and Tailwind CSS.

**Live site:** [https://darrylpelwigan.vercel.app/](https://darrylpelwigan.vercel.app/)

---

## Tech Stack

| Layer      | Technologies                                      |
|------------|---------------------------------------------------|
| Frontend   | React 18, Vite, Tailwind CSS, React Icons        |
| Deployment | Vercel (with `@vercel/analytics`)                 |
| Tooling    | PostCSS, Autoprefixer                             |

---

## Sections

- **Hero** — Introduction, headline, resume link, and social links
- **About** — Biography, interactive terminal, mock editor, and services overview
- **Projects** — Showcase of production-ready applications (see below)
- **Skills** — Tech stack with proficiency ratings by category
- **Experience** — Work history timeline
- **Contact** — Contact links and social profiles
- **Footer** — Social links and copyright

---

## Featured Projects

| Project | Year | Stack |
|---------|------|-------|
| HRIS Management System | 2018 | PHP, CodeIgniter, MySQL, Linux Server |
| Purchase Order Request System | 2019 | Laravel, MySQL, Ubuntu Server |
| Ticketing System for Issues & Requests | 2025 | Laravel, Bootstrap, MySQL |
| Real Estate Listing Platform | 2026 | Python, Django, React JS, TypeScript, PostgreSQL, Tailwind CSS |
| Timesheet Tracker / Management System | 2026 | Laravel, React JS, API, MySQL, MUI |
| Website — Law Firm Platform | 2026 | WordPress, Elementor, Custom CSS, JavaScript |

---

## Skills

**Web Development**
- Laravel — Expert
- Django Rest Framework — Advanced
- React JS — Advanced
- PostgreSQL — Advanced
- WordPress (Elementor) — Advanced
- TypeScript — Intermediate

**Infrastructure & Tools**
- GitHub — Expert
- Postman — Expert
- Ubuntu / Linux — Intermediate
- Docker — Intermediate

---

## Project Structure

```
portfolio/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
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
│   │   ├── aboutData.js
│   │   ├── contactData.js
│   │   ├── experienceData.js
│   │   ├── projectsData.js
│   │   ├── skillsData.js
│   │   ├── socialLinksData.js
│   │   └── techIconMapper.js
│   └── context/
│       └── ThemeContext.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── vite.config.js
```

---

## Getting Started

**Prerequisites:** Node.js 16+

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view locally.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## Deployment

Deployed on **Vercel** at [darrylpelwigan.vercel.app](https://darrylpelwigan.vercel.app/).

To deploy your own fork:
1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no extra config needed

---

## Customization

All content lives in `src/constants/` — no component edits needed for most updates:

- `projectsData.js` — project cards (title, description, tags, year)
- `skillsData.js` — skill categories, ratings, and tech stack cloud
- `experienceData.js` — work history timeline
- `aboutData.js` — biography text
- `contactData.js` — contact links
- `socialLinksData.js` — social media links

---

## Resources

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vercel Docs](https://vercel.com/docs)

---

Last Updated: July 2026

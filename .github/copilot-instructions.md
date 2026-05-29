# Portfolio Project Instructions

## Project Overview
Modern AI Engineer Portfolio website built with React, Vite, and Tailwind CSS. Deployable to Vercel.

## Development Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation & Running
```bash
npm install
npm run dev
```

Development server runs at `http://localhost:5173`

### Building for Production
```bash
npm run build
```

Output in `dist/` directory

## Deployment to Vercel

### Quick Deploy (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

### Using Vercel CLI
```bash
npm install -g vercel
vercel
```

## Project Structure

```
src/
  ├── components/          # React components
  │   ├── Navbar.jsx
  │   ├── Hero.jsx
  │   ├── Projects.jsx
  │   ├── Skills.jsx
  │   ├── Experience.jsx
  │   ├── Blog.jsx
  │   ├── Contact.jsx
  │   └── Footer.jsx
  ├── App.jsx             # Main app component
  ├── main.jsx            # React entry point
  └── index.css           # Global styles & Tailwind

Configuration Files:
  ├── vite.config.js      # Vite build configuration
  ├── tailwind.config.js  # Tailwind CSS theme
  ├── postcss.config.js   # PostCSS configuration
  └── vercel.json         # Vercel deployment settings
```

## Customization Guide

### Update Personal Information
Edit the component files to customize content:
- [Hero.jsx](src/components/Hero.jsx) - Name, headline, bio
- [Projects.jsx](src/components/Projects.jsx) - Portfolio projects
- [Skills.jsx](src/components/Skills.jsx) - Technical skills
- [Experience.jsx](src/components/Experience.jsx) - Work history
- [Blog.jsx](src/components/Blog.jsx) - Blog posts
- [Contact.jsx](src/components/Contact.jsx) - Contact info & form
- [Footer.jsx](src/components/Footer.jsx) - Footer links

### Styling
- Color theme: [tailwind.config.js](tailwind.config.js)
- Global styles: [src/index.css](src/index.css)
- Component-specific styles: Inline Tailwind classes in JSX files

### Contact Form Integration
Contact form in [Contact.jsx](src/components/Contact.jsx) currently logs to console.

Options to enable email:
- **Formspree** (free): formspree.io
- **EmailJS** (free): emailjs.com
- **Nodemailer** (requires backend): NodeJS backend
- **AWS SES**: Amazon email service

## Key Features Implemented

✅ Responsive mobile-first design
✅ Dark theme with gradient accents
✅ Smooth scrolling navigation
✅ Projects showcase with tech tags
✅ Skills proficiency visualization
✅ Work experience timeline
✅ Blog section
✅ Contact form
✅ Social media links
✅ Optimized for Vercel deployment

## Performance Notes

- Vite enables instant HMR (Hot Module Replacement)
- Production build: ~161 KB JS, ~14.5 KB CSS (before gzip)
- Tailwind CSS optimizes for production (~3.26 KB gzipped)
- No external dependencies for core functionality

## Environment Variables
Currently not required. If needed:
1. Create `.env.local` file
2. Add variables like `VITE_API_URL=...`
3. Access via `import.meta.env.VITE_*`

## Common Tasks

### Add New Project
1. Open [src/components/Projects.jsx](src/components/Projects.jsx)
2. Add entry to `projects` array
3. Update title, description, tags
4. Customize gradient color

### Update Contact Email
Edit [src/components/Contact.jsx](src/components/Contact.jsx):
```javascript
href="mailto:your-email@example.com"
```

### Change Color Theme
Edit [tailwind.config.js](tailwind.config.js) `theme.extend.colors`

### Update Social Links
Edit [Footer.jsx](src/components/Footer.jsx) and [Contact.jsx](src/components/Contact.jsx)

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Issues
1. Clear node_modules: `rm -r node_modules && npm install`
2. Clear Vite cache: `rm -r dist` then `npm run build`

### Vercel Deployment Issues
- Verify `vercel.json` exists and is correct
- Check that Node.js version is 16+ in Vercel settings
- Ensure all dependencies are in package.json

## Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Reference Portfolio](https://www.aaabadcode.com/)

---
Last Updated: May 2026

# AI Engineer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Perfect for showcasing AI/ML projects, skills, and experience.

## Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Responsive Layout**: Mobile-first approach works on all devices
- **Fast Performance**: Built with Vite for optimal build times
- **Easy Deployment**: Ready for Vercel deployment
- **Customizable Content**: Easy to update projects, skills, and experience sections

## Sections

- **Hero**: Eye-catching introduction with key stats
- **Projects**: Showcase your best work with descriptions and tech stacks
- **Skills**: Display technical proficiencies with progress bars
- **Experience**: Timeline of your professional journey
- **Blog**: Featured articles and writing samples
- **Contact**: Get in touch form and social links
- **Footer**: Copyright and social media links

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

## Customization

### Update Your Information

1. **Hero Section** - Edit [src/components/Hero.jsx](src/components/Hero.jsx)
   - Change name and headline
   - Update stats (projects, experience, etc.)
   - Modify skills in the terminal block

2. **Projects** - Edit [src/components/Projects.jsx](src/components/Projects.jsx)
   - Add/remove/edit project cards
   - Update project descriptions and tech stacks
   - Add project links

3. **Skills** - Edit [src/components/Skills.jsx](src/components/Skills.jsx)
   - Customize skill categories
   - Update skill names and proficiency levels

4. **Experience** - Edit [src/components/Experience.jsx](src/components/Experience.jsx)
   - Add your work history
   - Update companies, roles, and achievements
   - Modify tech stack for each position

5. **Blog** - Edit [src/components/Blog.jsx](src/components/Blog.jsx)
   - Add your blog posts
   - Update categories, dates, and excerpts

6. **Contact** - Edit [src/components/Contact.jsx](src/components/Contact.jsx)
   - Update email address
   - Add/remove social media links
   - Configure form submission endpoint

### Change Color Scheme

Colors are defined in [tailwind.config.js](tailwind.config.js). Modify the gradient colors and theme colors as needed.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to connect your Vercel account and configure settings

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"

### Option 3: Manual Upload

1. Build the project: `npm run build`
2. Upload the `dist` folder to Vercel

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## Performance

- Optimized bundle size with Vite
- CSS minification with Tailwind
- Smooth scrolling and animations
- Fast load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT - Feel free to use this template for your own portfolio!

## Tips

1. **Add Real Images**: Replace placeholder colors in Projects section with actual project images
2. **Implement Blog**: Connect the blog section to a CMS or markdown files
3. **Form Handling**: Configure the contact form to send emails (use services like Formspree, EmailJS, or Nodemailer)
4. **SEO**: Add meta tags and structured data for better search engine visibility
5. **Analytics**: Integrate Google Analytics or similar to track visitors
6. **Custom Domain**: Set up a custom domain in Vercel for your portfolio

## Support

For questions or issues, refer to the documentation:
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vercel Docs](https://vercel.com/docs)

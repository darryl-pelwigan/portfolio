# Quick Start Guide

## 🚀 Get Your Portfolio Running in 2 Minutes

### 1. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Customize Your Content

The portfolio has placeholder content from a sample AI engineer. Replace it with your own:

- **Your Name & Title**: Edit `src/components/Hero.jsx`
- **About You**: Update the bio and stats in Hero section
- **Projects**: Edit `src/components/Projects.jsx` - add your portfolio projects
- **Skills**: Customize `src/components/Skills.jsx` with your tech stack
- **Experience**: Update `src/components/Experience.jsx` with your work history
- **Blog**: Add your articles in `src/components/Blog.jsx`
- **Contact**: Update email and social links in `src/components/Contact.jsx`

### 3. Deploy to Vercel (Free!)

**Option A: Using GitHub**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your portfolio repository
5. Click "Deploy" ✨

**Option B: Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

That's it! Your portfolio is live!

## 📁 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/components/Hero.jsx` | Main intro section |
| `src/components/Projects.jsx` | Your project portfolio |
| `src/components/Skills.jsx` | Technical skills |
| `src/components/Experience.jsx` | Work history |
| `src/components/Contact.jsx` | Contact form & info |
| `src/components/Footer.jsx` | Footer links |
| `tailwind.config.js` | Colors & theme |

## 🎨 Quick Color Changes

To change the color scheme, edit `tailwind.config.js`:

```javascript
extend: {
  colors: {
    'blue-400': '#your-color-here',
    // ...
  }
}
```

## 📝 Contact Form Setup

The contact form currently logs to console. To send emails:

**Option 1: Formspree (Easiest)**
1. Go to [formspree.io](https://formspree.io)
2. Create account and get your form ID
3. Update `Contact.jsx` to point to your Formspree endpoint

**Option 2: EmailJS**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Get your API keys
3. Install: `npm install @emailjs/browser`
4. Update `Contact.jsx` to use EmailJS

## 🔧 Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
```

## 📱 Mobile Responsive?

Yes! The portfolio is fully responsive and works great on all devices. The Navbar automatically adapts for mobile.

## 🚀 Next Steps

1. Customize all text with your information
2. Add images to your projects (optional)
3. Deploy to Vercel
4. Set up a custom domain
5. Add analytics if desired

## 💡 Tips

- Keep project descriptions concise (2-3 sentences)
- Use relevant tech stack tags for each project
- Add real links to your GitHub, portfolio projects, blog
- Update your email address in the contact section
- Test on mobile before deploying!

## ❓ Need Help?

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel Docs](https://vercel.com/docs)

Happy building! 🚀

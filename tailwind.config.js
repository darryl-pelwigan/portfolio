module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0a0a',
        'darker': '#050505',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}

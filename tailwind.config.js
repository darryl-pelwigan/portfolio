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
        'mono': ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}

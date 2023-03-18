const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,css}', 'index.html'],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('child', '& > *')
    })
  ]
}

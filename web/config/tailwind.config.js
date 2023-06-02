/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    fontFamily: {
      roboto: ['Roboto Slab', 'sans-serif'],
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#ecfdf7',
          100: '#d1faec',
          200: '#a7f3da',
          300: '#6ee7bf',
          400: '#34d39e',
          500: '#10b981',
          600: '#059666',
          700: '#047852',
          800: '#065f42',
          900: '#064e36',
          950: '#022c1e',
        },
      },
    },
  },
}

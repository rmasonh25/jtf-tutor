/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4f7cff',
          50: '#eef3ff',
          100: '#dbe6ff',
          200: '#b7ceff',
          300: '#92b5ff',
          400: '#6e9dff',
          500: '#4f7cff',
          600: '#3a60d4',
          700: '#2c49a3',
          800: '#203472',
          900: '#121d40'
        }
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(0,0,0,.2)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

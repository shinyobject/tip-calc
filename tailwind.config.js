/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c0dfff',
          300: '#80bfff',
          400: '#4099ff',
          500: '#0080ff',
          600: '#0064cc',
          700: '#0052a3',
          800: '#003d7a',
          900: '#002952',
        },
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
};
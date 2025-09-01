/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5', // Deep blue for academic feel
        secondary: '#F5F5DC', // Green for sustainability/innovation
        accent: '#F3F4F6', // Light gray for backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern sans-serif (add via Google Fonts later)
      },
    },
  },
  plugins: [],
};
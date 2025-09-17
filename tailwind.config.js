// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004085", // Deep blue for headers
        secondary: "#6c757d", // Gray for text
        accent: "#f8f9fa", // Light background
        highlight: "#007bff", // Blue for accents and buttons
      },
      fontFamily: {
        serif: ["Georgia", "serif"], // For headings
        sans: ["Arial", "sans-serif"], // For body text
      },
    },
  },
  plugins: [],
};

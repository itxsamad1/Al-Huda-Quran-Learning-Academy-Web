/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a3e"
        },
        secondary: {
          DEFAULT: "#0e7490"
        },
        beige: "#f5f5dc"
      }
    }
  },
  plugins: []
};
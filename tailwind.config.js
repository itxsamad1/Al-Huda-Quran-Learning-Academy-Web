/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#065f46", // emerald-800
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        secondary: {
          DEFAULT: "#0e7490", // cyan-700
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        beige: {
          DEFAULT: "#f5f5dc",
          50: "#fefef8",
          100: "#fdfdf0",
          200: "#faf9e1",
          300: "#f7f5d2",
          400: "#f1edb3",
          500: "#ebe594",
          600: "#d4ce85",
          700: "#b0ab6f",
          800: "#8c8959",
          900: "#726f49",
        },
        amber: {
          DEFAULT: "#f59e0b",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        islamic: {
          green: "#00a86b",
          gold: "#ffd700",
          navy: "#1e3a8a",
          cream: "#f8f4e6",
        }
      },
      fontFamily: {
        arabic: ["Amiri", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'islamic': '0 4px 20px rgba(16, 185, 129, 0.15)',
        'amber': '0 4px 20px rgba(245, 158, 11, 0.15)',
      },
    },
  },
  plugins: [],
};
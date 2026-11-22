/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: "#eef3f1",
          100: "#d5e2dc",
          200: "#a9c4b8",
          300: "#7da594",
          400: "#528770",
          500: "#2e7d5b",
          600: "#1a3c34",
          700: "#142f29",
          800: "#0e211d",
          900: "#071310",
        },
        accent: {
          50: "#fbf5ee",
          100: "#f5e6d3",
          200: "#ebcca6",
          300: "#e0b37a",
          400: "#d4a574",
          500: "#c97b3a",
          600: "#a86028",
          700: "#7d461e",
        },
        cream: "#f5f2ed",
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', "serif"],
        sans: ['"Noto Sans SC"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/*.{.js,jsx,ts,tsx}",
    "./src/views/*.{.js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

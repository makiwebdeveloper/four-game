const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
      violet: colors.violet,
    },
    fontFamily: {
      round: ["Varela Round", "sans-serif"],
    },
  },
  plugins: [],
};

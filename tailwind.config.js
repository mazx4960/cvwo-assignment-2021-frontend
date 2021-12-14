/* eslint-disable no-undef */
module.exports = {
  purge: ["./src/**/*.{js,jsx, ts, tsx}"],
  darkMode: "media", // or false or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

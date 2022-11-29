/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: "#22B573",
        mainPink: "#ED2B4B",
        mainBG: "#000701",
        mainGrey: "#131313",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

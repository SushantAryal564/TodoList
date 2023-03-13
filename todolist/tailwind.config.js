/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/App.js",
    "./src/Components/*.{js,jsx,tx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

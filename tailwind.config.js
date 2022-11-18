/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-1": "#E8E8E8",
        "text-2": "#6D6D6D",
        "text-3": "#424242",
        primary: "#5191FB",
        secondary: "#FF7D7D",
        error: "#E8E8E8",
        link: "#D9D9D9",
        correct: "#6D6D6D",
        bookmark: "#FFC700",
        background: "#292929",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

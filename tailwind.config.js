const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--orbitron)", ...fontFamily.sans],
      },
      backgroundSize: {
        "100%": "100%",
      },
      boxShadow: {
        hero: "inset 0px -17rem 4rem black",
        project: "0px 0px 12px 0px #27b7edb5",
        avatar: "0px 0px 10px 1px #27b7ed73",
      },
      height: {
        hero: "clamp(13rem, 80vw, 16rem)",
      },
      fontSize: {
        decoration: "0.55rem",
      },
    },
  },
  plugins: [],
};

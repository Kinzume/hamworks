const defaultTheme = require("tailwindcss/defaultTheme");
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
      boxShadow: {
        welcome: "0px 0px 10rem 10rem black",
        "project-image": "0px 5px 10px 0px black",
        project: "0px 0px 12px 0px #27b7edb5",
        avatar: "0px 0px 10px 1px #27b7ed73",
        contact: "0px 0px 17px 0px #27b7edb5",
      },
      fontSize: {
        decoration: "0.55rem",
      },
      animation: {
        "pulse-1":
          "pulse-arrow 1.5s cubic-bezier(0.4, 0, 0.6, 1) 0.3s infinite",
        "pulse-2":
          "pulse-arrow 1.5s cubic-bezier(0.4, 0, 0.6, 1) 0.6s infinite",
        "pulse-3":
          "pulse-arrow 1.5s cubic-bezier(0.4, 0, 0.6, 1) 0.9s infinite",
      },
      keyframes: {
        "pulse-arrow": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        catchyFont: ["'Fredoka One'", "cursive"], 
      },
      colors: {
        bodyColor: "#0c0f16",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#0eb3e6",
        whiteText: "#ffffff",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #0e1010, -10px -10px 19px #292d30", 
      },
    },
  },
  plugins: [],
};

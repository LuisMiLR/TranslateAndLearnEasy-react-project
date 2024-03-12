/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: {
          30: "#131414", //#383838 #252525 #131414 #5B5B5B
          40: "#1D1D1D",
          50: "#8a8b8d",
          80: "#454549",
          90: "#2d2e32",
          95: "#222326",
          100: "#16171b",
        },
        white: {
          1: "white",
          5: "rgba(255, 255, 255, .05)",
          10: "rgba(255, 255, 255, .1)",
          20: "rgba(255, 255, 255, .2)",
          221: "rgba(255, 255, 255, .02)",
        },
        red2: "#ff4d4d",
        blue2: "#92bee7",
        blue5: "#023047", //023047; #434665
        purple50: "#453D5B",
        purple60: "#806B7E",
        purple70: "#302942",
        purple100: "#564A75",
        qualified: "#3cb652",
        rankyellow: "#edb513",
        coolred: "#f271a7",
        rankblue: "#1f87e7",
        dark: "#262729",
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};

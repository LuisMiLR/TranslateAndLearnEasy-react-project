/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: {
          30: "#131414",
          40: "#1D1D1D",
          50: "",
          80: "",
          90: "",
          100: "#0e0e11 ", //body color
          110: "#272822",
        },
        dblue: {
          50: "#ebf0ff",
          100: "#dbe4ff",
          200: "#bdcbff",
          300: "#94a8fe",
          400: "#6c78fe",
          500: "#4d50fe",
          600: "#382afe",
          700: "#3222e2",
          800: "#291ec2",
          900: "#241e8f",
          950: "#161254",
        },
        purple50: "#564A75",
        purple60: "#4A425D",
        purple70: "#302942",
        purple80: "#4A3880",
        purple100: "#453D5B",
        dark: "#0e0e11 ",
        dark10: "#202023",
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

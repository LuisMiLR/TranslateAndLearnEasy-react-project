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
          50: "#1c1e21",
          500: "#2e2e32",
          80: "#3c3f44", //shiki gray
          700: "#98989F", //color text secondary
          800: "#18181B", //bg searchbar
          810: "#2E2E32", //btn in searchbar
          820: "#414853", //btn secondary!! mako-800
          830: "#9CA3AF", //ligne in code card
          90: "#1b1b1f", //bg shiki
          900: "#202127", //bg card shiki colorzilla
          910: "#2d3339", //border card
          920: "#6AA1B7", //blue primary btn !! hippieblue-400
          960: "#8CCCD5", //blue title website
          930: "#fffff5", //title e0e0d8
          940: "#e0e0d8", //text secondary ?
          970: "#65a0b6", //blue dark !! > hippieblue-500
          980: "#83d0da", // blue Primary !!
          990: "#1E1E1E", //dark card
          1000: "#2b2f36", //bg icons
          100: "#0e0e11 ", //body color
          110: "#272822",
        },
        mako: {
          50: "#f4f6f7",
          100: "#e2e7eb",
          200: "#c9d1d8",
          300: "#a3b0bd",
          400: "#76889a",
          500: "#5b6d7f",
          600: "#4e5b6c",
          700: "#444d5a",
          800: "#414853",
          900: "#363b43",
          950: "#21242b",
        },
        hippieblue: {
          50: "#f2f8f9",
          100: "#ddecf0",
          200: "#bedae3",
          300: "#92bfce",
          400: "#65a0b6",
          500: "#427f98",
          600: "#3a6980",
          700: "#34566a",
          800: "#314959",
          900: "#2c3f4d",
          950: "#1a2832",
        },
        breakwhite: {
          20: "#DFDFD6",
        },
        yellow: {
          20: "#f6eecf",
          50: "#E6CC78",
          60: "#e3c466",
        },
        purple: {
          70: "#302942",
          80: "#4A3880",
          100: "#453D5B",
        },
        dark: {
          10: "#202023", //dark
          100: "#0e0e11",
        },
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

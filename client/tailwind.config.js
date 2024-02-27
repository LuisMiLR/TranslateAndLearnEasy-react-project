/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          40: "#a2a2a4",
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
        purple100: "#866cc7",
        qualified: "#3cb652",
        rankyellow: "#edb513",
        coolred: "#f271a7",
        rankblue: "#1f87e7",
        dark: "#262729",
      },
    },
    plugins: [],
  },
};

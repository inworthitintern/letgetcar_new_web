import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#FBE10D", // primary color
        text: "#D5AE3E", // darker shade for hover
        light: "#E4FBFB",
      },
      success: {
        DEFAULT: "#01916A", // primary color
        medium: "#3AC0A0", // darker shade for hover
        light: "#D9EFE9",
      },
      dark: {
        DEFAULT: "#100F08",
        light: "#4C4B46",
      },
      gray: {
        DEFAULT: "#6D6B61",
        75: "#9F9B8E",
        50: "#C7C4BC",
        25: "#E3E1DE",
        15: "#EEEDEB",
        5: "#FCFBFB",
      },
      text: "#5B5952",
      white: "#fff",
      danger: {
        DEFAULT: "#ED3241",
        medium: "#FF616D",
        light: "#F9E0E0",
      },
      // ...
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;

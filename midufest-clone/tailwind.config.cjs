/** @type {import('tailwindcss').Config} */
const { withAnimations } = require("animated-tailwindcss");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withAnimations({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD200",
      },
      sans: {
        fontFamily: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
});

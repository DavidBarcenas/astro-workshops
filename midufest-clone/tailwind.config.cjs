/** @type {import('tailwindcss').Config} */
const { withAnimations } = require("animated-tailwindcss");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withAnimations({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD200",
        gray: "rgba(17, 17, 17, 0.5)",
      },
      sans: {
        fontFamily: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        mobile: "411px",
        medium: "468px",
        tablet: "721px",
        laptop: "890px",
      },
    },
  },
  plugins: [],
});

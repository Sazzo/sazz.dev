/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },
    },

    fontFamily: {
      sans: ["Overpass", "sans-serif"],
      mono: ["Fira Code"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

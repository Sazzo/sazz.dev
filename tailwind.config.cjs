/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },

      padding: {
        nav: "8rem",
      },
    },

    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
      secondary: ["Sentient", "sans-serif"],
      mono: ["Fira Code"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

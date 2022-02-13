module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
      },
      width: {
        94: "24rem",
      },
      backgroundImage: {
        none: "none",
        "flower-dark": "url('/flowers_dark.jpg')",
      },
    },
    fontFamily: {
      sans: ["Overpass", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

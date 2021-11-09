module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
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

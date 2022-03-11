module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
      },
      minHeight: {
        16: "4rem",
      },
      width: {
        94: "24rem",
      },
      colors: {
        "pinky-purple": "#E04A6A",
      },
      backgroundImage: {
        none: "none",
        "flower-dark": "url('/whitecat.jpg')",
      },
    },
    fontFamily: {
      sans: ["Overpass", "sans-serif"],
      mono: ["Fira Code"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

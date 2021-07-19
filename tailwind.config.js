module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    mode: "all",
    content: ["./public/index.html", "./src/**/*.svelte"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#EE6C4D",
        "primary-300": "#ce5f44",
        neutral: "#F8F9FA",
      },
      spacing: {
        "49-percent": "49%",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "95v": "95vh",
        "100v": "100vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

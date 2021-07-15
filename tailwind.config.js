module.exports = {
  // mode: "jit",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

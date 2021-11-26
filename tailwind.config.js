module.exports = {
  purge: ["./src/**/*.tsx", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        100: "32rem",
      },
      maxHeight: {
        97: "25rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

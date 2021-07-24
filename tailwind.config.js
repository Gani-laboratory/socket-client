module.exports = {
  purge: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

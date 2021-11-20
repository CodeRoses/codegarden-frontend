module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "duotone-dark": "#2a2734",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

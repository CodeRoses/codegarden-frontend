module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "duotone-dark": "#2a2734",
        "sizzling-red": "#f73859",
        "light-cyan": "#7ac7c4",
        "levis-lush-grey": "#393737",
        "dim-lilac": "#546280",
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        "levis-lush-grey": "#393737",
        "dim-lilac": "#546280",
      }),
      textColor: (theme) => ({
        ...theme("colors"),
        "dim-lilac": "#546280",
      }),
      inset: {
        "-4": "-1rem",
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "3/5": "60%",
        "4/5": "80vh",
      },
      minHeight: {
        "4/5": "80vh",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      minWidth: {
        "6xl": "75rem",
      },
      flex: {
        "4/5": "0 0 80vh",
        "6xl": "0 0 75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

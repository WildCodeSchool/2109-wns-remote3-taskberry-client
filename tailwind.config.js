module.exports = {
  mode : "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          medium: "#4C16B6",
          dark: "#011053",
          light: "#5662B6",
        },
        gray: {
          ligth: "#E8E8E8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

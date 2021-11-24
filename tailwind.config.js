module.exports = {
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
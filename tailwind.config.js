/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./services.html", "./portfolio.html", "./contact.html"],
  theme: {
    extend: {
      colors: {
        "kerial-purple": "#431b6d",
        "back-shapes": "#d9caef",
      },
    },
    fontFamily: {
      Lato: ["Lato, sans-serif"],
    },
    container: {
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};

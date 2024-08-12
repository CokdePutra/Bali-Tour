/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#202f59",
        "primary-shadow": "#2a3d70",
        "secondary-color": "#dc834e",
        "secondary-shadow": "#d16f36",
        "desc-color": "#696969",
        "color-title": "#3c3c3c",
        "footer-text": "#d6d6d6",
        "background-color": "#ffffff",
      },
    },
  },
  plugins: [],
};

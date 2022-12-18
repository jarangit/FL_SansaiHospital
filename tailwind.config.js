/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "purple": {
        light: "#D2ADE4",
        DEFAULT: "#7E51B9",
      },
      "black": {
        light: "#808080",
        DEFAULT: "#000"
      },
      "white": {
        DEFAULT: "#ffff"
      }
    }
  },
  plugins: [],
}
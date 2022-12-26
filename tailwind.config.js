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
        supperLight: "#F6E3FF",
        light: "#D2ADE4",
        DEFAULT: "#7E51B9",
      },
      "black": {
        light: "#808080",
        DEFAULT: "#000"
      },
      "gray": {
        DEFAULT: "#D9D9D9"
      },
      "white": {
        DEFAULT: "#ffff"
      }
    }
  },
  plugins: [],
}
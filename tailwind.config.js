/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        apex: ['Apex Mk2', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        oxanium: ['Oxanium', 'cursive'],
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(318deg, #fd0000 26.88%, #ff9292 105.85%)',
      },
    },
  },
  plugins: [],
}
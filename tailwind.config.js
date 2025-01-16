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
        oxanium: ['Oxanium', 'cursive']
      },
    },
  },
  plugins: [],
}
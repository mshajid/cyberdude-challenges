/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./assets/js/main.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        jakarta: 'Plus Jakarta Sans'
      }
    },
  },
  plugins: [],
}


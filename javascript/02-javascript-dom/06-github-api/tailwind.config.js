/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.js",
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


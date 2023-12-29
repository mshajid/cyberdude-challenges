/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./**/*.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: "Plus Jakarta Sans",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};

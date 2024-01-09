/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        10: '10px',
        30: '30px',
        50: '50px'
      }
    },
  },
  plugins: [],
}


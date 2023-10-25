/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary': '#982176',
        'text' : '#FFE5AD'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


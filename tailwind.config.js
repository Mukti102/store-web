/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary': '#04364A',
        'text' : '#64CCC5'
      }
    },
  },
  plugins: [],
}


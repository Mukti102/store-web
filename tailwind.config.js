/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary': '#bac4f5',
        'text' : '#AAC4FF'
      }
    },
    // screens : {
    //   'sm' : '375px',
    // }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


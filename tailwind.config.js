/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
'mob': '0px',
        'tab': '750px',
      },
    },
  },
  plugins: [],
}
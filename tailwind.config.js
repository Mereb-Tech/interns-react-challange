/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#624CF5',
          50: ' #F6F8FD',
          DEFAULT: '#624CF5',
        },
        grey: {
          600: "#545454", 
          500: "#757575",
          400: "#AFAFAF", 
          50: "#F6F6F6", 
        },
      },
      backgroundImage: {
        'dotted-pattern': "url('/src/assets/dotted-pattern.png')",
      },
    },
  },
  plugins: [],
}


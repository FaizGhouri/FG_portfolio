/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        check: 'url("/img/Check.svg")'
      },
      backgroundImage: {
        'hero-pattern': "url('/img/FaizG.png')",
        'footer-pattren': "url('/img/attachment-03.jpg')",
        'back1-img:': "url('/img/hey.png')",
        'back2-img:': "url('/img/3prediction')",
        
      }
    },

  },
  plugins: [],
}


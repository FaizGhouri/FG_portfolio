/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#02040f',
          800: '#060a1e',
          700: '#0a1030',
          accent: '#6366f1',
          cyan: '#00f0ff',
          purple: '#a78bfa',
        }
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'scan': 'scan-line 4s linear infinite',
      },
    },
  },
  plugins: [],
}

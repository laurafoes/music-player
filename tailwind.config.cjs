/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Circular Std', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'cardColor': '#2A2141',
        'primary': '#E1E1E6',
        'secondary': '#E1E1E6',
        'disabled': '#cccccc',
        'active': '#B199CC',
        'background': '#0F0D13',
        'spotify': '#1DB954',
      },
      fontSize: {
        'bodySize': '18px',
        'titleSize': ' 24px',
        'timeSize': '14px',
      },
    },
  },
  plugins: [],
}
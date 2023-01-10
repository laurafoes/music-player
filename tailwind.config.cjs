/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('src/assets/banner.jpg')",
      },
      fontFamily: {
        sans: ['Circular Std', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'cardColor': '#2A2141',
        'primary': '#E1E1E6',
        'secondary': '#D9D9D9',
        'disabled': '#cccccc',
        'active': '#B199CC',
        'background': '#0F0D13',
        'playerBg': 'rgba(217, 217, 217, 0.3)',
        'hoverPlayerBg': 'rgba(42, 33, 65, 0.7)',
        'spotify': '#1DB954',
      },
      fontSize: {
        'smallSize': '14px',
        'mediumSize': '16px',
        'bodySize': '18px',
        'titleSize': ' 24px',
        'timeSize': '14px',
      },
    },
  },
  plugins: [],
}
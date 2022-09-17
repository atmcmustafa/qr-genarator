/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      white: '#fff',
      lightGray: 'hsl(212, 45%, 89%)',
      grayishBlue: 'hsl(220, 15%, 55%)',
      darkBlue: 'hsl(218, 44%, 22%)',
    },
    fontFamily: {
      outfit: 'Outfit',
    },
    container: {
      center: 'true',
    },
    extend: {},
  },
  plugins: [],
}

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
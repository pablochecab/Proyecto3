/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('img/fondoHeader.jpg')",
        'footer-background': "url('img/FondoFooter.jpg')"
       },

      gridTemplateColumns: {
        'section1-grid': 'repeat(3, minmax(auto, 1fr))'
      },    
    },
  },
  plugins: [],
}


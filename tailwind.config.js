/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {

      'mobile': '375px',
      // => @media (min-width: 375px) { ... }
      
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'header-background': "url('img/fondoHeader.jpg')",
        'footer-background': "url('img/FondoFooter.jpg')"
       },

      gridTemplateColumns: {
        'section1-grid': 'repeat(3, minmax(auto, 1fr))',
        'mobile-grid': 'repeat(auto-fill, minmax(auto, 1fr))'
      },    
    },
  },
  plugins: [],
}


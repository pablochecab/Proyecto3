/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      's': {'max': '345px'}, 
      'm': {'max': '640px'},  // => @media (max-width: 375px) { ... }
      't': {'max': '1024px'},  // => @media (max-width: 640px) { ... }
      'l': {'max': '1280px'}, // => @media (max-width: 1024px) { ... }
      'd': {'max': '1536px'}, // => @media (max-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'header-background': "url('img/fondoHeader.jpg')",
        'footer-background': "url('img/FondoFooter.jpg')"
       },  
    },
  },
  plugins: [],
}


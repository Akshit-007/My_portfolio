module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '390px',
      // => @media (min-width: 390px) { ... }

      'lg': '700px',
      // => @media (min-width: 1024px) { ... }

      'xl': '990px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      width: {
        '9/10': '85%',
        '4/9': '300px',
        '6/4': '320px',
        '4/7': '400px'
      },
      height: {
        '9/10': '76.7142857%',
        '1/9': '1200px',
        '6/4': '40%',
        '2/9': '500px',


      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

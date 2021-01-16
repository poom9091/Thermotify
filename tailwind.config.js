module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'bgcolor':'#020624',
        'bgNavBar':'#171525',
        'textcolot':''
      },
      fontFamily: {
        Prompt: [
          'Prompt',
          'sans-serif'
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

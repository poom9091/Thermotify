module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'bgcolor':'#020624',
        'bgNavBar':'#171525',
        'Logo-l':'#C69DFF',
        'Logo-r':'#4F76FF',
        'color-line':'#00C300',
        'color-line-hover':'#00E000'
  
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

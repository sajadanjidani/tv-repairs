/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      container:{
        "center": true
      },
      colors:{
        "Bg1": "#292F36",
        "Bg2": "#1A1E23",
        "Brand1": "#12F7D6",
        "Brand2": "#98FAEC",
        "Gray": "#43454D"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}


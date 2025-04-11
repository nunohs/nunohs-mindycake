// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        softPink: '#FADADD',
        lightBrown: '#D2B48C',
        softYellow: '#FFFACD',
        mintGreen: '#98FF98',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        header: ['Pacifico', 'cursive'],
        heading: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}


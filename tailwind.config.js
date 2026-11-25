/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        msCream: {
          50: '#FAF6EE',
          100: '#F4EEE2',
          150: '#EDE4D4',
          200: '#E5DAC8',
          300: '#DCCEB8',
          400: '#CDBCA2',
          500: '#B8A488',
          border: '#D2C2AA'
        },
        msWood: {
          deep: '#221105',
          dark: '#3A1E0B',
          DEFAULT: '#583115',
          light: '#784620',
          card: '#E8DCCB'
        },
        msOrange: {
          DEFAULT: '#D46820',
          hover: '#B95413',
          light: '#FAEDE2'
        }
      },
      fontFamily: {
        syne: ['"Cormorant Garamond"', 'serif'],
        sans: ['Outfit', 'sans-serif']
      },
      maxWidth: {
        'screen-2xl': '1440px',
      }
    }
  },
  plugins: [],
}

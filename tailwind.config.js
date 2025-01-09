/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontSize: {
      sm: '16px',
      base: '20px',
      xl: '24px',
      '2xl': '30px',
      '3xl': '40px',
      '4xl': '50px',
    },
    fontFamily: {
      hattom: ['Hatton', 'sans-serif'],
      josefin: ['Josefin Sans', 'sans-serif'],
      sans: ['Hatton', 'sans-serif'],
    },
    extend: {
      colors: {
        tan: '#c88d76',
        'tan-light': '#BAA195',
        beige: '#EEE9E4',
        'gray-dark': '#61534B',
        'gray-light': '#726660',
        white: '#ffffff',
        'tan-hover': '#E09E84',
      },
    },
  },
  plugins: [],
};

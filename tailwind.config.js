const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        top: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      colors: {
        primary: {
          light: '#80cbc4',
          dark: '#4f9a94',
        },
      },
      fontFamily: {
        sans: [
          'Quicksand',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      minHeight: {
        custom: 'calc(100vh - 65px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

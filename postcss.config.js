/* eslint-disable global-require */
// fetch TailwindCSS package
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'), // wrap tailwind config in variable
    require('autoprefixer'), // fetch autoprefixer package
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.js', './public/index.html'],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};

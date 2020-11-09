// fetch TailwindCSS package
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'), // wrap tailwind config in variable
    require('autoprefixer'), // fetch autoprefixer package
  ],
};

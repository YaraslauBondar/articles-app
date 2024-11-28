/*eslint-env node*/

module.exports = {
  content: ['./app/components/**/*.hbs', './app/templates/**/*.hbs'],
  theme: {
    extend: {
      lineHeight: {
        14: '3.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
  darkMode: 'selector',
};

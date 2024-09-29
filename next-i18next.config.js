// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'], // Add your supported languages here
  },
  localePath: path.resolve('./public/locales'),
};
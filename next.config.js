const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  // ! deprecated for now
  //! i18n: {
  //!   locales: ['he'],
  //!   defaultLocale: 'he',
  //! },
  poweredByHeader: false,
})

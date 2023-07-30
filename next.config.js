const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
  },
  // hide powered by vercel
  poweredByHeader: false,
  // hide nextra docs template footer
})

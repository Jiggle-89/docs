// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.tsx',
// })
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   transpilePackages: ['@mdxeditor/editor', 'react-diff-view'],
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.experiments = { ...config.experiments, topLevelAwait: true };
//     // this will just update topLevelAwait property of config.experiments
//     // config.experiments.topLevelAwait = true 
//     return config;
//   },
// }

// module.exports = withNextra(nextConfig)



const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  poweredByHeader: false,
})
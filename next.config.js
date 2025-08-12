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
  images: {
    unoptimized: true
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
})
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images:{
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
  }
}

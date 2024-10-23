module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/public/:path*',
        destination: '/:path*',
      },
    ];
  },
}
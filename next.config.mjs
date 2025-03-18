/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  poweredByHeader: false,
  crossOrigin: 'anonymous',
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    ppr: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.andrewstill.moe",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, HEAD",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: 'cross-origin-embedder-policy',
            value: 'require-corp',
          },
          {
            key: 'cross-origin-opener-policy',
            value: 'same-origin',
          },
          {
            key: 'cross-origin-resource-policy',
            value: 'cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(),midi=(),sync-xhr=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(self),payment=(),usb=()',
          },
        ],
      },
    ]
  }
}

export default nextConfig;
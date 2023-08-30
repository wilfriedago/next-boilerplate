// @ts-check
/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import million from 'million/compiler'
import withPlugins from 'next-compose-plugins'
import withBundleAnalyzer from '@next/bundle-analyzer'
import { env } from './env.mjs'

// const millionConfig = {
// auto: true
// if you're using RSC:
// auto: { rsc: true },
// }

/** @type {import('next').NextConfig} */
const nextConfig = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  eslint: {
    dirs: ['.']
  },
  poweredByHeader: false,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  webpack: config => {
    // config.externals is needed to resolve the following errors:
    // Module not found: Can't resolve 'bufferutil'
    // Module not found: Can't resolve 'utf-8-validate'
    config.externals.push({
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate'
    })

    return config
  },
  experimental: { instrumentationHook: true },
  rewrites() {
    return [
      { source: '/healthz', destination: '/api/health' },
      { source: '/api/healthz', destination: '/api/health' },
      { source: '/health', destination: '/api/health' },
      { source: '/ping', destination: '/api/health' }
    ]
  }
})

export default million.next(nextConfig /* millionConfig */)

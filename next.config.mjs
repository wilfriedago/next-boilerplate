import withPlugins from 'next-compose-plugins'
import withBundleAnalyzer from '@next/bundle-analyzer'
import { env } from './env.mjs'

const bundleAnalyzerConfig = withBundleAnalyzer({ enabled: env.ANALYZE })

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.']
  },
  compress: true,
  swcMinify: true,
  cleanDistDir: true,
  optimizeFonts: true,
  // Uncomment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },
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
  }
}

export default withPlugins([bundleAnalyzerConfig], nextConfig)

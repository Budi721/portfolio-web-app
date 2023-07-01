import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import nextPwa from 'next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

const withPWA = nextPwa({
  dest: 'public',
  disable: process.env.NODE_ENV === "development"
  // disable is help to disable PWA in deployment mode
})

export default withPWA(withMDX(nextConfig))

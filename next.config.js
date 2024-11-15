const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: false,
  images: {
    domains: ["media.graphassets.com"],
  },
  experimental: {
    mdxRs: false,
  },
};

module.exports = withMDX(nextConfig);

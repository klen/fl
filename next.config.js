/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  assetPrefix: isProd ? "https://klen.github.io/fl" : undefined,
}

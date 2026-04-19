/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || ""

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  assetPrefix: isProd ? assetPrefix : undefined,
}

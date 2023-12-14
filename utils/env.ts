import { default as nextConfig } from "../next.config"
export { version } from "../package.json"

export const isDev = process.env.NODE_ENV === "development"
export const assetPrefix = nextConfig.assetPrefix

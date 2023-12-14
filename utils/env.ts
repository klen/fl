import { default as nextConfig } from "../next.config.mjs"
export { version } from "../package.json"

export const isDev = process.env.NODE_ENV === "development"
export const assetPrefix = isDev ? "" : nextConfig.assetPrefix

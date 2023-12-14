import { assetPrefix, isDev } from "./env"

export function siteLink(path: string, html: boolean = true) {
  if (isDev) return path
  path = path.replace(/\/$/, "")
  if (html) path += ".html"
  return `${assetPrefix}/${path}`
}

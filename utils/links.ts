import { assetPrefix, isDev } from "./env"

export function siteLink(path: string) {
  return isDev ? path : `${assetPrefix}/${path}.html`
}

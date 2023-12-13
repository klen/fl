import { isDev } from "./env";

export function siteLink(path: string) {
  return isDev ? path : `${path}.html`
}

export { version } from "../package.json"
export const isDev = process.env.NODE_ENV === "development"

console.log("isDev", isDev)

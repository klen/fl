import { parseInt } from "lodash"
import { useEffect } from "react"
import { getSeed } from "../random"
import { useHash } from "./useHash"

export function useSeed() {
  const [hash, setHash] = useHash()

  const reSeed = () => setHash(`${getSeed()}`)

  useEffect(() => {
    if (!hash) setTimeout(reSeed, 100)
  }, [])

  return [parseInt(hash), reSeed] as const
}

import { useEffect } from "react"
import { getSeed } from "../random"
import { useHash } from "./useHash"

export function useSeed() {
  const [hash, setHash] = useHash()
  const reSeed = () => setHash(`${getSeed()}`)

  useEffect(() => {
    if (!hash) setTimeout(reSeed, 300)
  }, [])

  return [hash, reSeed] as const
}

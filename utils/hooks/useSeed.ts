import { useEffect } from "react"
import { getSeed } from "../random"
import { useHash } from "./useHash"

export function useSeed() {
  const [hash, setHash] = useHash()
  const reSeed = () => setHash(`${getSeed()}`)

  useEffect(() => {
    if (!hash) reSeed()
  }, [])

  return [hash, reSeed] as const
}

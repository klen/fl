"use client"

import { useEffect, useState } from "react"

export function useHash() {
  const [hash, setHash] = useState(global.window?.location.hash.slice(1))

  useEffect(() => {
    const handler = () => setHash(global.window?.location.hash.slice(1))
    window.addEventListener("hashchange", handler)
    return () => window.removeEventListener("hashchange", handler)
  }, [])

  return [
    hash,
    (hash: string) => {
      if (global.window) global.window.location.hash = hash
    },
  ] as const
}

"use client"

import { PropsWithChildren, ReactNode, useEffect, useState } from "react"

export default function ClientSide({
  children,
  fallback,
}: PropsWithChildren<{ fallback?: ReactNode }>) {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted ? children : fallback ? fallback : <></>
}

"use client"

import { FindFilters, FindInfo } from "@/components"
import ClientSide from "@/components/layouts/ClientSide"
import { getSeed, useHash } from "@/utils"
import { Stack } from "@mantine/core"
import { useEffect } from "react"

export default function Page() {
  const [hash, setHash] = useHash()

  useEffect(() => {
    if (!hash) setHash(`${getSeed()}`)
  }, [hash])

  return (
    <ClientSide>
      {hash && (
        <Stack>
          <FindFilters seed={parseInt(hash)} />
          <FindInfo seed={parseInt(hash)} mt="xl" />
        </Stack>
      )}
    </ClientSide>
  )
}

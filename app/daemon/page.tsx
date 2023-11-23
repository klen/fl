"use client"
import { DemonInfo, RollBlock } from "@/components"
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
    <Stack>
      <RollBlock rolls={[6]} onRoll={() => setHash(`${getSeed()}`)} />
      <ClientSide>
        <DemonInfo seed={parseInt(hash)} mt="xl" />
      </ClientSide>
    </Stack>
  )
}

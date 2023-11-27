"use client"

import { RollBlock } from "@/components"
import ClientSide from "@/components/layouts/ClientSide"
import { LegendInfo } from "@/components/legend"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"

export default function Page() {
  const [seed, reSeed] = useSeed()
  return (
    <ClientSide>
      {seed && (
        <Stack>
          <RollBlock rolls={[6]} onRoll={reSeed} />
          <LegendInfo seed={parseInt(seed)} mt="xl" />
        </Stack>
      )}
    </ClientSide>
  )
}

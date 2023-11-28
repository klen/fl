"use client"

import { DiceButton, LegendInfo } from "@/components"
import ClientSide from "@/components/layouts/ClientSide"
import { useSeed } from "@/utils"
import { Center, Stack } from "@mantine/core"
import { parseInt } from "lodash"

export default function Page() {
  const [seed, reSeed] = useSeed()
  return (
    <ClientSide>
      {seed && (
        <Stack>
          <LegendInfo seed={parseInt(seed)} mt="xl" />
          <Center>
            <DiceButton rolls={[6]} onClick={reSeed} />
          </Center>
        </Stack>
      )}
    </ClientSide>
  )
}

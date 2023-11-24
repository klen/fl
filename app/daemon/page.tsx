"use client"
import { DemonInfo, RollBlock } from "@/components"
import ClientSide from "@/components/layouts/ClientSide"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"

export default function Page() {
  const [seed, reSeed] = useSeed()

  return (
    <Stack>
      <RollBlock rolls={[6]} onRoll={reSeed} />
      <ClientSide>
        <DemonInfo seed={parseInt(seed)} mt="xl" />
      </ClientSide>
    </Stack>
  )
}

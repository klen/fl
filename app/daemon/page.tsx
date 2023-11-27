"use client"
import { DemonInfo, DiceButton } from "@/components"
import ClientSide from "@/components/layouts/ClientSide"
import { useSeed } from "@/utils"
import { Center, Stack } from "@mantine/core"

export default function Page() {
  const [seed, reSeed] = useSeed()

  return (
    <ClientSide>
      {seed && (
        <Stack>
          <DemonInfo seed={parseInt(seed)} mt="xl" />
          <Center>
            <DiceButton rolls={[6]} onClick={reSeed} />
          </Center>
        </Stack>
      )}
    </ClientSide>
  )
}

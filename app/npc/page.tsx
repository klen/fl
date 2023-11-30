"use client"

import { NPCFilters, NPCInfo } from "@/components"
import ClientSide from "@/components/layouts/ClientSide"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"

export default function Page() {
  const seed = useSeed()[0]

  return (
    <ClientSide>
      {seed ? (
        <Stack gap="xl">
          <NPCFilters />
          <NPCInfo seed={seed} />
        </Stack>
      ) : null}
    </ClientSide>
  )
}

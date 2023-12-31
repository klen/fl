"use client"

import { CharacterFilters, CharacterInfo } from "@/components"
import ClientSide from "@/components/layouts/ClientSide"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"

export default function Page() {
  const seed = useSeed()[0]

  return (
    <ClientSide>
      {seed ? (
        <Stack>
          <CharacterFilters seed={seed} />
          <CharacterInfo seed={seed} mt="xl" />
        </Stack>
      ) : null}
    </ClientSide>
  )
}

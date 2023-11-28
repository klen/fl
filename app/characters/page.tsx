"use client"
import { CharacterFilters, CharacterInfo } from "@/components"
import ClientSide from "@/components/layouts/ClientSide"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"
import { parseInt } from "lodash"

export default function Page() {
  const seed = useSeed()[0]

  return (
    <ClientSide>
      {seed && (
        <Stack>
          <CharacterFilters seed={parseInt(seed)} />
          <CharacterInfo seed={parseInt(seed)} mt="xl" />
        </Stack>
      )}
    </ClientSide>
  )
}

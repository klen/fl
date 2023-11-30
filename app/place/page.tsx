"use client"

import ClientSide from "@/components/layouts/ClientSide"
import { Place, PlaceFilters } from "@/components/place"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"

export default function Page() {
  const seed = useSeed()[0]

  return (
    <ClientSide>
      {seed ? (
        <Stack>
          <PlaceFilters seed={seed} />
          <Place seed={seed} mt="xl" />
        </Stack>
      ) : null}
    </ClientSide>
  )
}

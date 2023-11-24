"use client"

import ClientSide from "@/components/layouts/ClientSide"
import { Place, PlaceFilters } from "@/components/place"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"
import { parseInt } from "lodash"

export default function Page() {
  const seed = useSeed()[0]

  return (
    <ClientSide>
      {seed && (
        <Stack>
          <PlaceFilters seed={parseInt(seed)} />
          <Place seed={parseInt(seed)} mt="xl" />
        </Stack>
      )}
    </ClientSide>
  )
}

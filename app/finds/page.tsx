"use client"

import { FindFilters, FindInfo } from "@/components"
import ClientSide from "@/components/layouts/ClientSide"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"

export default function Page() {
  const seed = useSeed()[0]

  return (
    <ClientSide>
      {seed ? (
        <Stack>
          <FindFilters seed={seed} />
          <FindInfo seed={seed} mt="xl" />
        </Stack>
      ) : null}
    </ClientSide>
  )
}

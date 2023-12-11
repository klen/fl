import { NPCFilters, NPCInfo } from "@/components"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"

export function NPCPage() {
  const seed = useSeed()[0]
  if (!seed) return null

  return (
    <Stack gap="xl">
      <NPCFilters />
      <NPCInfo seed={seed} />
    </Stack>
  )
}

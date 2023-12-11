import { Place, PlaceFilters } from "@/components"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"

export function PlacePage() {
  const seed = useSeed()[0]
  if (!seed) return null

  return (
    <Stack>
      <PlaceFilters seed={seed} />
      <Place seed={seed} mt="xl" />
    </Stack>
  )
}

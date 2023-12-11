import { FindFilters, FindInfo } from "@/components"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"

export function FindPage() {
  const seed = useSeed()[0]
  if (!seed) return null

  return (
    <Stack>
      <FindFilters seed={seed} />
      <FindInfo seed={seed} mt="xl" />
    </Stack>
  )
}

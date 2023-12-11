import { CharacterFilters, CharacterInfo } from "@/components"
import { useSeed } from "@/utils"
import { Stack } from "@mantine/core"

export function CharacterPage() {
  const seed = useSeed()[0]
  if (!seed) return null

  return (
    <Stack>
      <CharacterFilters seed={seed} />
      <CharacterInfo seed={seed} mt="xl" />
    </Stack>
  )
}

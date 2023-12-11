import { DemonInfo, DiceButton } from "@/components"
import { useSeed } from "@/utils"
import { Center, Stack } from "@mantine/core"

export function DemonPage() {
  const [seed, reSeed] = useSeed()
  if (!seed) return null

  return (
    <Stack>
      <DemonInfo seed={seed} mt="xl" />
      <Center>
        <DiceButton rolls={[6]} onClick={reSeed} />
      </Center>
    </Stack>
  )
}

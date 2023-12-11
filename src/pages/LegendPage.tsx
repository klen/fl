import { DiceButton, LegendInfo } from "@/components"
import { useSeed } from "@/utils"
import { Center, Stack } from "@mantine/core"

export function LegendPage() {
  const [seed, reSeed] = useSeed()
  if (!seed) return null

  return (
    <Stack>
      <LegendInfo seed={seed} mt="xl" />
      <Center>
        <DiceButton rolls={[6]} onClick={reSeed} />
      </Center>
    </Stack>
  )
}

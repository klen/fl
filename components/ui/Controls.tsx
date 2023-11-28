import { Group } from "@mantine/core"
import { PropsWithChildren } from "react"

export function Controls({ children }: PropsWithChildren) {
  return (
    <Group pos="absolute" right={0} top={0} gap={4}>
      {children}
    </Group>
  )
}

import { ButtonProps, Center, Paper } from "@mantine/core"
import { PropsWithChildren } from "react"
import { DiceButton } from "./DiceButton"

export function RollBlock({
  rolls,
  onRoll,
  children,
  ...props
}: PropsWithChildren<{ rolls: number[]; onRoll: () => void } & ButtonProps>) {
  return (
    <Paper px="lg" py="xl" pos="relative">
      {children}
      <Center pos="absolute" bottom={-20} right={0} left={0}>
        <DiceButton size="sm" rolls={rolls} onClick={() => onRoll()} {...props} />
      </Center>
    </Paper>
  )
}

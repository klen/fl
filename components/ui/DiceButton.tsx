import { Button } from "@mantine/core"
import { useTranslation } from "react-i18next"

const rollToIcon = (roll: number) => {
  switch (roll) {
    case 1:
      return "ra ra-dice-one"
    case 2:
      return "ra ra-dice-two"
    case 3:
      return "ra ra-dice-three"
    case 4:
      return "ra ra-dice-four"
    case 5:
      return "ra ra-dice-five"
    case 6:
      return "ra ra-dice-six"
  }
}

export function DiceButton({
  rolls,
  ...props
}: Parameters<typeof Button<any>>[0] & { rolls: number[] }) {
  const { t } = useTranslation()
  return (
    <Button
      {...props}
      leftSection={rolls.map((roll, idx) => (
        <i key={idx} className={`${rollToIcon(roll)} ra-2x`}></i>
      ))}
    >
      {t("Reroll")}
    </Button>
  )
}

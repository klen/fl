"use client"

import { getSeed, mulberry32, rollDice, useHash } from "@/utils"
import { Center, Checkbox, Group } from "@mantine/core"
import capitalize from "lodash/capitalize"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { RollBlock } from "../ui"

export function PlaceFilters({ seed }: { seed: number }) {
  const setHash = useHash()[1]
  const [enabled, setEnabled] = useState([true, true, true])
  const { t } = useTranslation()

  const random = mulberry32(seed)
  const typeRoll = rollDice("d6", random)

  return (
    <Center>
      <RollBlock
        rolls={[typeRoll]}
        disabled={enabled.every((e) => !e)}
        onRoll={() => {
          while (true) {
            const seed = getSeed()
            const random = mulberry32(seed)
            const typeRoll = rollDice("d6", random)

            const eRoll = Math.floor((typeRoll - 1) / 2)
            if (enabled[eRoll]) return setHash(`${seed}`)
          }
        }}
      >
        <Group gap="lg">
          <Checkbox
            label={capitalize(t("village"))}
            checked={enabled[0]}
            onChange={(e) => setEnabled([e.target.checked, enabled[1], enabled[2]])}
          />
          <Checkbox
            label={capitalize(t("dungeon"))}
            checked={enabled[1]}
            onChange={(e) => setEnabled([enabled[0], e.target.checked, enabled[2]])}
          />
          <Checkbox
            label={capitalize(t("castle"))}
            checked={enabled[2]}
            onChange={(e) => setEnabled([enabled[0], enabled[1], e.target.checked])}
          />
        </Group>
      </RollBlock>
    </Center>
  )
}

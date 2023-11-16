"use client"

import { dice66ToRolls, getSeed, mulberry32, rollDice, useHash } from "@/utils"
import { Center, Checkbox, Group, Stack, Text } from "@mantine/core"
import capitalize from "lodash/capitalize"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { RollBlock } from "../ui"

export function FindFilters({ seed }: { seed: number }) {
  const setHash = useHash()[1]
  const { t } = useTranslation()
  const [typeEnabled, setTypeEnabled] = useState([true, true])
  const [valueEnabled, setValueEnabled] = useState([true, true, true])

  const random = mulberry32(seed)
  random()
  const dices = [
    rollDice("d6", random),
    rollDice("d6", random),
    ...dice66ToRolls(rollDice("d66", random)),
  ]

  return (
    <Center>
      <RollBlock
        rolls={dices}
        disabled={
          (!typeEnabled[0] && !typeEnabled[1]) ||
          (!valueEnabled[0] && !valueEnabled[1] && !valueEnabled[2])
        }
        onRoll={() => {
          while (true) {
            const seed = getSeed()
            const random = mulberry32(seed)
            random()

            const typeRoll = rollDice("d6", random)
            const typeIndex = Math.floor(typeRoll / 3)

            const rarityRoll = rollDice("d6", random)
            const rarityIndex = Math.floor((rarityRoll - 1) / 2)

            if (typeEnabled[typeIndex] && valueEnabled[rarityIndex]) return setHash(`${seed}`)
          }
        }}
      >
        <Stack>
          <Group wrap="nowrap" gap="lg">
            <Text>{t("Location")}:</Text>
            <Checkbox
              label={capitalize(t("Carried"))}
              checked={typeEnabled[0]}
              onChange={(e) => setTypeEnabled([e.target.checked, typeEnabled[1]])}
            />
            <Checkbox
              label={capitalize(t("In lair"))}
              checked={typeEnabled[1]}
              onChange={(e) => setTypeEnabled([typeEnabled[0], e.target.checked])}
            />
          </Group>
          <Group wrap="nowrap" gap="lg">
            <Text>{t("Value")}:</Text>
            <Checkbox
              label={capitalize(t("Simple"))}
              checked={valueEnabled[0]}
              onChange={(e) =>
                setValueEnabled([e.target.checked, valueEnabled[1], valueEnabled[2]])
              }
            />
            <Checkbox
              label={capitalize(t("Valuable"))}
              checked={valueEnabled[1]}
              onChange={(e) =>
                setValueEnabled([valueEnabled[0], e.target.checked, valueEnabled[2]])
              }
            />
            <Checkbox
              label={capitalize(t("Precious"))}
              checked={valueEnabled[2]}
              onChange={(e) =>
                setValueEnabled([valueEnabled[0], valueEnabled[1], e.target.checked])
              }
            />
          </Group>
        </Stack>
      </RollBlock>
    </Center>
  )
}

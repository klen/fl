import { selectFromTable } from "@/generate"
import { characterProfession, characterRace } from "@/generate/characters/data"
import { dice66ToRolls, getSeed, mulberry32, rollDice, useHash } from "@/utils"
import { Center, Checkbox, Group, Stack } from "@mantine/core"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { RollBlock } from "../ui"

export function CharacterFilters({ seed }: { seed: number }) {
  const setHash = useHash()[1]
  const { t } = useTranslation()
  const [kinEnabled, setKinEnabled] = useState({
    human1: true,
    human2: true,
    human3: true,
    ["half-elf"]: true,
    halfling: true,
    goblin: true,
    orc: true,
    wolfkin: true,
    dwarf: true,
    elf: true,
  })
  const [profEnabled, setProfEnabled] = useState({
    Minstrel: true,
    Fighter: true,
    Rogue: true,
    Rider: true,
    Druid: true,
    Sorcerer: true,
    Hunter: true,
    Peddler: true,
  })

  const random = mulberry32(seed)
  random()
  const rolls = [
    ...dice66ToRolls(rollDice("d66", random)),
    ...dice66ToRolls(rollDice("d66", random)),
  ]
  return (
    <Center>
      <RollBlock
        rolls={rolls}
        disabled={
          Object.values(kinEnabled).every((v) => !v) || Object.values(profEnabled).every((v) => !v)
        }
        onRoll={() => {
          while (true) {
            const seed = getSeed()
            const random = mulberry32(seed)
            random()
            const kinRoll = rollDice("d66", random)
            const kin = selectFromTable(characterRace, kinRoll)
            const prof = selectFromTable(characterProfession, rollDice("d66", random))
            if (kinEnabled[kin.type] && profEnabled[prof.name]) {
              return setHash(`#${seed}`)
            }
          }
        }}
      >
        <Stack>
          <Group gap="lg">
            <Checkbox
              fz="lg"
              label={t("Kin")}
              styles={{ label: { fontWeight: "bold", fontSize: "var(--mantine-font-size-md)" } }}
              checked={Object.values(kinEnabled).every((v) => v)}
              onChange={(e) =>
                setKinEnabled({
                  human1: e.target.checked,
                  human2: e.target.checked,
                  human3: e.target.checked,
                  ["half-elf"]: e.target.checked,
                  halfling: e.target.checked,
                  goblin: e.target.checked,
                  orc: e.target.checked,
                  wolfkin: e.target.checked,
                  dwarf: e.target.checked,
                  elf: e.target.checked,
                })
              }
            />
            <Group>
              <Checkbox
                label={t("Human")}
                checked={kinEnabled.human1 || kinEnabled.human2 || kinEnabled.human3}
                onChange={(e) =>
                  setKinEnabled({
                    ...kinEnabled,
                    human1: e.target.checked,
                    human2: e.target.checked,
                    human3: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Half-Elf")}
                checked={kinEnabled["half-elf"]}
                onChange={(e) =>
                  setKinEnabled({
                    ...kinEnabled,
                    ["half-elf"]: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Halfling")}
                checked={kinEnabled.halfling}
                onChange={(e) =>
                  setKinEnabled({
                    ...kinEnabled,
                    halfling: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Goblin")}
                checked={kinEnabled.goblin}
                onChange={(e) =>
                  setKinEnabled({
                    ...kinEnabled,
                    goblin: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Orc")}
                checked={kinEnabled.orc}
                onChange={(e) =>
                  setKinEnabled({
                    ...kinEnabled,
                    orc: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Wolfkin")}
                checked={kinEnabled.wolfkin}
                onChange={(e) =>
                  setKinEnabled({
                    ...kinEnabled,
                    wolfkin: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Dwarf")}
                checked={kinEnabled.dwarf}
                onChange={(e) =>
                  setKinEnabled({
                    ...kinEnabled,
                    dwarf: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Elf")}
                checked={kinEnabled.elf}
                onChange={(e) =>
                  setKinEnabled({
                    ...kinEnabled,
                    elf: e.target.checked,
                  })
                }
              />
            </Group>
          </Group>
          <Group gap="lg">
            <Checkbox
              fz="lg"
              label={t("Profession")}
              styles={{ label: { fontWeight: "bold", fontSize: "var(--mantine-font-size-md)" } }}
              checked={Object.values(profEnabled).every((v) => v)}
              onChange={(e) =>
                setProfEnabled({
                  Minstrel: e.target.checked,
                  Fighter: e.target.checked,
                  Rogue: e.target.checked,
                  Rider: e.target.checked,
                  Druid: e.target.checked,
                  Sorcerer: e.target.checked,
                  Hunter: e.target.checked,
                  Peddler: e.target.checked,
                })
              }
            />
            <Group>
              <Checkbox
                label={t("Minstrel")}
                checked={profEnabled.Minstrel}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Minstrel: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Fighter")}
                checked={profEnabled.Fighter}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Fighter: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Rogue")}
                checked={profEnabled.Rogue}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Rogue: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Rider")}
                checked={profEnabled.Rider}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Rider: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Druid")}
                checked={profEnabled.Druid}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Druid: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Sorcerer")}
                checked={profEnabled.Sorcerer}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Sorcerer: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Hunter")}
                checked={profEnabled.Hunter}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Hunter: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Peddler")}
                checked={profEnabled.Peddler}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Peddler: e.target.checked,
                  })
                }
              />
            </Group>
          </Group>
        </Stack>
      </RollBlock>
    </Center>
  )
}

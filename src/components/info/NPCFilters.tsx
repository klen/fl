"use client"

import { NPC } from "@/generate"
import { getSeed, useHash } from "@/utils"
import { Center, Checkbox, Group, Stack } from "@mantine/core"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { RollBlock } from "../ui"

export function NPCFilters() {
  const setHash = useHash()[1]
  const { t } = useTranslation()

  const [profEnabled, setProfEnabled] = useState({
    Bandit: true,
    Minstrel: true,
    Rogue: true,
    Rider: true,
    Priest: true,
    Sorcerer: true,
    Hunter: true,
    Druid: true,
    Villager: true,
    Fighter: true,
    Peddler: true,
  })

  const [raceEnabled, setRaceEnabled] = useState({
    human: true,
    ["half-elf"]: true,
    halfling: true,
    goblin: true,
    orc: true,
    wolfkin: true,
    dwarf: true,
    elf: true,
  })

  return (
    <Center>
      <RollBlock
        rolls={[6]}
        disabled={
          Object.values(profEnabled).every((v) => !v) || Object.values(raceEnabled).every((v) => !v)
        }
        onRoll={() => {
          while (true) {
            const seed = getSeed()
            const npc = new NPC(seed)
            if (profEnabled[npc.prof] && raceEnabled[npc.race]) return setHash(`#${seed}`)
          }
        }}
      >
        <Stack>
          <Group gap="lg">
            <Checkbox
              fz="lg"
              label={t("Profession")}
              styles={{
                label: { fontWeight: "bold", fontSize: "var(--mantine-font-size-md)" },
              }}
              checked={Object.values(profEnabled).every((v) => v)}
              onChange={(e) =>
                setProfEnabled({
                  Bandit: e.target.checked,
                  Minstrel: e.target.checked,
                  Rogue: e.target.checked,
                  Rider: e.target.checked,
                  Priest: e.target.checked,
                  Sorcerer: e.target.checked,
                  Hunter: e.target.checked,
                  Druid: e.target.checked,
                  Villager: e.target.checked,
                  Fighter: e.target.checked,
                  Peddler: e.target.checked,
                })
              }
            />
            <Group>
              <Checkbox
                label={t("Bandit")}
                checked={profEnabled.Bandit}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Bandit: e.target.checked,
                  })
                }
              />
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
                label={t("Priest")}
                checked={profEnabled.Priest}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Priest: e.target.checked,
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
                label={t("Villager")}
                checked={profEnabled.Villager}
                onChange={(e) =>
                  setProfEnabled({
                    ...profEnabled,
                    Villager: e.target.checked,
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
          <Group gap="lg">
            <Checkbox
              fz="lg"
              label={t("Kin")}
              styles={{
                label: { fontWeight: "bold", fontSize: "var(--mantine-font-size-md)" },
              }}
              checked={Object.values(raceEnabled).every((v) => v)}
              onChange={(e) =>
                setRaceEnabled({
                  human: e.target.checked,
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
                checked={raceEnabled.human}
                onChange={(e) =>
                  setRaceEnabled({
                    ...raceEnabled,
                    human: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Half-elf")}
                checked={raceEnabled["half-elf"]}
                onChange={(e) =>
                  setRaceEnabled({
                    ...raceEnabled,
                    ["half-elf"]: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Halfling")}
                checked={raceEnabled.halfling}
                onChange={(e) =>
                  setRaceEnabled({
                    ...raceEnabled,
                    halfling: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Goblin")}
                checked={raceEnabled.goblin}
                onChange={(e) =>
                  setRaceEnabled({
                    ...raceEnabled,
                    goblin: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Orc")}
                checked={raceEnabled.orc}
                onChange={(e) =>
                  setRaceEnabled({
                    ...raceEnabled,
                    orc: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Wolfkin")}
                checked={raceEnabled.wolfkin}
                onChange={(e) =>
                  setRaceEnabled({
                    ...raceEnabled,
                    wolfkin: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Dwarf")}
                checked={raceEnabled.dwarf}
                onChange={(e) =>
                  setRaceEnabled({
                    ...raceEnabled,
                    dwarf: e.target.checked,
                  })
                }
              />
              <Checkbox
                label={t("Elf")}
                checked={raceEnabled.elf}
                onChange={(e) =>
                  setRaceEnabled({
                    ...raceEnabled,
                    elf: e.target.checked,
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

"use client"

import { Castle, Dungeon, Village, selectFromTable } from "@/generate"
import { placeTypesTable } from "@/generate/places/data"
import { mulberry32, rollDice } from "@/utils"
import { PaperProps } from "@mantine/core"
import { FLPaper } from "../layouts"
import { CastleInfo } from "./CastleInfo"
import { DungeonInfo } from "./DungeonInfo"
import { VillageInfo } from "./VillageInfo"

export function Place({ seed, ...props }: { seed: number } & PaperProps) {
  const random = mulberry32(seed)
  const typeRoll = rollDice("d6", random)
  const placeType = selectFromTable(placeTypesTable, typeRoll)

  return (
    <FLPaper pb="xl" {...props}>
      {placeType == "castle" ? (
        <CastleInfo castle={new Castle(seed)} />
      ) : placeType == "dungeon" ? (
        <DungeonInfo dungeon={new Dungeon(seed)} />
      ) : (
        <VillageInfo village={new Village(seed)} />
      )}
    </FLPaper>
  )
}

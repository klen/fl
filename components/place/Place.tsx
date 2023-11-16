"use client"

import { selectFromTable } from "@/data"
import * as data from "@/data/places"
import { Castle, Dungeon, Village, mulberry32, rollDice } from "@/utils"
import { FLPaper } from "../layouts"
import { CastleInfo } from "./CastleInfo"
import { DungeonInfo } from "./DungeonInfo"
import { VillageInfo } from "./VillageInfo"

export function Place({ seed }: { seed: number }) {
  const random = mulberry32(seed)
  const typeRoll = rollDice("d6", random)
  const placeType = selectFromTable(data.placeTypesTable, typeRoll)

  return (
    <FLPaper pb="xl">
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

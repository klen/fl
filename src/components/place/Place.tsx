"use client"

import { Castle, Dungeon, Village, selectFromTable } from "@/generate"
import { placeTypesTable } from "@/generate/places/data"
import { rollDice } from "@/utils"
import { PaperProps } from "@mantine/core"
import seedrandom from "seedrandom"
import { FLPaper } from "../layouts"
import { Bookmark, Controls, CopyLink } from "../ui"
import { CastleInfo } from "./CastleInfo"
import { DungeonInfo } from "./DungeonInfo"
import { VillageInfo } from "./VillageInfo"

export function Place({ seed, ...props }: { seed: number } & PaperProps) {
  const random = seedrandom(seed)
  const typeRoll = rollDice("d6", random)
  const placeType = selectFromTable(placeTypesTable, typeRoll)
  const place =
    placeType == "castle"
      ? new Castle(seed)
      : placeType == "dungeon"
        ? new Dungeon(seed)
        : new Village(seed)

  return (
    <FLPaper p="md" pos="relative" {...props}>
      {placeType == "castle" ? (
        <CastleInfo castle={place as Castle} />
      ) : placeType == "dungeon" ? (
        <DungeonInfo dungeon={place as Dungeon} />
      ) : (
        <VillageInfo village={place as Village} />
      )}
      <Controls>
        <CopyLink />
        <Bookmark prefix="places" seed={seed} name={place.name} type={placeType} />
      </Controls>
    </FLPaper>
  )
}

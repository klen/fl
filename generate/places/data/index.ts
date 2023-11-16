import { TTableItem } from "@/types"

export const placeTypesTable: TTableItem<string>[] = [
  {
    data: "castle",
    range: [5, 6],
  },
  {
    data: "dungeon",
    range: [3, 4],
  },
  {
    data: "village",
    range: [1, 2],
  },
]

export * from "./castle"
export * from "./dungeon"
export * from "./inn"
export * from "./village"

import { getSeed } from "@/utils"
import { Item } from "../proto"
import { selectFromTable } from "../utils"
import {
  findCarriedSimpleTable,
  findCarriedValuedTable,
  findLairPreciousTable,
  findLairSimpleTable,
  findLairValuedTable,
  findRarityTable,
  findTypeTable,
  findWeirdnessTable,
} from "./data"

export class Find extends Item {
  type: string
  rarity: string
  desc: string
  price: number
  weight: string
  weird: null | {
    desc: string
    effect: string
  }

  constructor(seed: number) {
    super(seed)

    const typeRoll = this.rollDice("d6")
    this.type = selectFromTable(findTypeTable, typeRoll).type

    const rarityRoll = this.rollDice("d6")
    this.rarity = selectFromTable(findRarityTable, rarityRoll).type

    type TTables = typeof tables
    const table =
      tables[this.type as keyof TTables][this.rarity as keyof TTables[keyof typeof tables]]

    const itemRoll = this.rollDice("d66")
    const item = selectFromTable(table, itemRoll)
    this.desc = item.desc
    this.price = this.randomFromRange(item.priceRange)
    this.price *= item.priceMulti
    this.weight = item.weight

    this.weird = null
    if (itemRoll > 31 && this.rollDice("d6") > 4)
      this.weird = selectFromTable(findWeirdnessTable, this.rollDice("d66"))
  }

  get isMoney() {
    return this.desc == "Money"
  }
}

const tables = {
  carried: {
    simple: findCarriedSimpleTable,
    valuable: findCarriedValuedTable,
    precious: findLairPreciousTable,
  },
  ["in lair"]: {
    simple: findLairSimpleTable,
    valuable: findLairValuedTable,
    precious: findLairPreciousTable,
  },
}

export function genFind({
  rarity,
  type,
  seed,
}: {
  rarity?: TFindRarity
  type?: TFindType
  seed?: number
}) {
  seed = seed || getSeed()
  while (true) {
    seed += 1
    const find = new Find(seed)
    if (type && find.type != type) continue
    if (rarity && find.rarity != rarity) continue
    return find
  }
}

export type TFindType = "carried" | "in lair"
export type TFindRarity = "simple" | "valuable" | "precious"

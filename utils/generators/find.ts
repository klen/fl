import { selectFromTable } from "@/data"
import {
  findCarriedSimpleTable,
  findCarriedValuedTable,
  findLairPreciousTable,
  findLairSimpleTable,
  findLairValuedTable,
  findRarityTable,
  findTypeTable,
  findWeirdnessTable,
} from "@/data/finds"
import { Item } from "../generate"

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
    const type = selectFromTable(findTypeTable, typeRoll)
    this.type = type.desc

    const rarityRoll = this.rollDice("d6")
    const rarity = selectFromTable(findRarityTable, rarityRoll)
    this.rarity = rarity.desc

    type TTables = typeof tables
    const table =
      tables[type.type as keyof TTables][rarity.rarity as keyof TTables[keyof typeof tables]]

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
}

const tables = {
  carried: {
    simple: findCarriedSimpleTable,
    valuable: findCarriedValuedTable,
    precious: findLairPreciousTable,
  },
  lair: {
    simple: findLairSimpleTable,
    valuable: findLairValuedTable,
    precious: findLairPreciousTable,
  },
}

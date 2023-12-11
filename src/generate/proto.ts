import { TDice, TTableItem } from "@/types"
import { rollDice, rollDices } from "@/utils"
import seedrandom from "seedrandom"
import { choiceFromTable } from "./utils"

export class Item {
  random: () => number

  constructor(public seed: number) {
    this.seed = seed
    this.random = seedrandom(seed)
    this.random()
  }

  rollDice(type: TDice) {
    return rollDice(type, this.random)
  }

  rollDices(desc: string) {
    return rollDices(desc, this.random)
  }

  randomFromRange(range: [number, number]) {
    return Math.floor(this.random() * (range[1] - range[0])) + range[0]
  }

  choiceFromTable<T>(table: TTableItem<T>[]) {
    return choiceFromTable<T>(table, this.random)
  }
}

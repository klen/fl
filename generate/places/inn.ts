import { Item } from "../proto"
import { generateName, selectFromTable } from "../utils"
import { innFeaturesTable, innTable } from "./data"

export class Inn extends Item {
  name: string
  feature: string
  food: string
  guest: string

  constructor(seed: number) {
    super(seed)

    this.name = generateName(innTable, this.rollDice.bind(this, "d66"))
    this.feature = (
      selectFromTable(
        innFeaturesTable,
        this.rollDice("d66")
      ) as (typeof innFeaturesTable)[number]["data"]
    ).feature
    this.food = (
      selectFromTable(
        innFeaturesTable,
        this.rollDice("d66")
      ) as (typeof innFeaturesTable)[number]["data"]
    ).food
    this.guest = (
      selectFromTable(
        innFeaturesTable,
        this.rollDice("d66")
      ) as (typeof innFeaturesTable)[number]["data"]
    ).guest
  }
}

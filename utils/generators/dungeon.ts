import { selectFromTable } from "@/data"
import {
  dungeonAgeTable,
  dungeonCreatorsTableData,
  dungeonGateTableData,
  dungeonGoalTableData,
  dungeonHistoryTableData,
  dungeonPopulationTableData,
  dungeonSizeTableData,
  dungeonWeirdTableData,
} from "@/data/places"
import { Item } from "../generate"

export class Dungeon extends Item {
  age: number
  ageDesc: string

  size: number
  sizeDesc: string

  creator: string
  createReason: string | null

  goal: string
  entrance: string
  history: string
  weirdeness: string[]

  population: string[]

  constructor(seed: number) {
    super(seed)

    const age = selectFromTable(
      dungeonAgeTable,
      this.rollDice("d66")
    ) as (typeof dungeonAgeTable)[number]["data"]

    this.ageDesc = age.type
    this.age = this.randomFromRange(age.age)

    const size = selectFromTable(
      dungeonSizeTableData,
      this.rollDice("d6")
    ) as (typeof dungeonSizeTableData)[number]["data"]
    this.sizeDesc = size.type
    this.size = this.randomFromRange(size.size)

    const creatorRoll = this.rollDice("d66")
    const c1 = selectFromTable(
      dungeonCreatorsTableData,
      creatorRoll
    ) as (typeof dungeonCreatorsTableData)[number]["data"]

    const c2 = selectFromTable(
      dungeonCreatorsTableData,
      this.rollDice("d66")
    ) as (typeof dungeonCreatorsTableData)[number]["data"]

    this.creator = c1.type
    this.createReason = creatorRoll > 13 ? c2.reason : null

    this.goal = selectFromTable(dungeonGoalTableData, this.rollDice("d66")).type
    this.entrance = (
      selectFromTable(
        dungeonGateTableData,
        this.rollDice("d66")
      ) as (typeof dungeonGateTableData)[number]["data"]
    ).type
    this.history = (
      selectFromTable(
        dungeonHistoryTableData,
        this.rollDice("d66")
      ) as (typeof dungeonGateTableData)[number]["data"]
    ).type

    this.population = []
    this.populate()

    this.weirdeness = []
    this.generateWeirdness()
  }

  populate() {
    const roll = this.rollDice("d66")
    if (roll == 66) {
      this.populate()
      this.populate()
      this.populate()
    } else if (roll >= 64) {
      this.populate()
      this.populate()
    } else {
      const pop = (
        selectFromTable(
          dungeonPopulationTableData,
          roll
        ) as (typeof dungeonPopulationTableData)[number]["data"]
      ).type
      this.population.includes(pop) ? this.populate() : this.population.push(pop)
    }
  }

  generateWeirdness() {
    const roll = this.rollDice("d66")
    if (roll == 66) {
      this.generateWeirdness()
      this.generateWeirdness()
    } else {
      this.weirdeness.push(
        (
          selectFromTable(
            dungeonWeirdTableData,
            roll
          ) as (typeof dungeonWeirdTableData)[number]["data"]
        ).type
      )
    }
  }
}

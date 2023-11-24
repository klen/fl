import { Item } from "../proto"
import { selectFromTable, takeMulti } from "../utils"
import {
  dungeonAgeTable,
  dungeonCreatorsTableData,
  dungeonGateTableData,
  dungeonGoalTableData,
  dungeonHistoryTableData,
  dungeonPopulationTableData,
  dungeonSizeTableData,
  dungeonWeirdTableData,
} from "./data"

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

    this.population = takeMulti(dungeonPopulationTableData, () => this.rollDice("d66")).map(
      (p) => p.name
    )

    this.weirdeness = takeMulti(dungeonWeirdTableData, () => this.rollDice("d66")).map(
      (w) => w.name
    )
  }
}

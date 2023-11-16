import { beastTable, selectFromTable } from "@/data"
import {
  castleAgeTable,
  castleCreatorTable,
  castleEmptyTable,
  castleGoalTable,
  castleHistoryTableData,
  castleNamesTable,
  castlePopulationTable2,
  castleStateTable,
  castleTypesTable,
  castleWeirdTable,
} from "@/data/places"
import { Item } from "../generate"
import { generateName } from "./utils"

export class Castle extends Item {
  name: string
  type: string
  size: string

  age: number
  ageDesc: string

  goal: string

  creator: string
  creatorFeature: string

  state: string
  weirdness: string
  history: string

  population: string[]

  constructor(seed: number) {
    super(seed)

    // Name
    this.name = generateName(castleNamesTable, this.rollDice.bind(this, "d66"))

    const type = selectFromTable(
      castleTypesTable,
      this.rollDice("d66")
    ) as (typeof castleTypesTable)[number]["data"]

    // Type and population
    this.type = type.type
    this.size = type.pop

    // Age
    const age = selectFromTable(castleAgeTable, this.rollDice("d66"))
    this.ageDesc = age.type
    this.age = this.randomFromRange(age.age)

    // Goal
    this.goal = (
      selectFromTable(
        castleGoalTable,
        this.rollDice("d66")
      ) as (typeof castleGoalTable)[number]["data"]
    ).desc

    // Creator
    this.creator = (
      selectFromTable(
        castleCreatorTable,
        this.rollDice("d66")
      ) as (typeof castleCreatorTable)[number]["data"]
    ).type
    this.creatorFeature = (
      selectFromTable(
        castleCreatorTable,
        this.rollDice("d66")
      ) as (typeof castleCreatorTable)[number]["data"]
    ).feature

    // Weirdness
    this.weirdness = (
      selectFromTable(
        castleWeirdTable,
        this.rollDice("d66")
      ) as (typeof castleWeirdTable)[number]["data"]
    ).type

    // History
    this.history = (
      selectFromTable(
        castleHistoryTableData,
        this.rollDice("d66")
      ) as (typeof castleHistoryTableData)[number]["data"]
    ).type

    // State
    const stateRoll = this.rollDice("d6")
    this.state = (
      selectFromTable(castleStateTable, stateRoll) as (typeof castleStateTable)[number]["data"]
    ).type

    // Population
    this.population = []
    const popMod = stateRoll < 2 ? -2 : stateRoll == 3 ? -1 : stateRoll == 6 ? 2 : 0
    const popRoll = Math.min(Math.max(this.rollDice("d6") + popMod, 1), 6)

    if (popRoll == 1) {
      const emptyRoll = this.rollDice("d66")
      const empty = selectFromTable(
        castleEmptyTable,
        emptyRoll
      ) as (typeof castleEmptyTable)[number]["data"]
      const pop = empty.type
      if (emptyRoll >= 31 && emptyRoll <= 36) {
        this.population.push(`${pop}: ${this.randomFromRange(empty.mod)}`)
      } else if (emptyRoll >= 41 && emptyRoll <= 51) {
        this.population.push(`${pop}: ${beasts[this.rollDice("d6")]} `)
      } else this.population.push(pop)
    } else if (popRoll > 4) {
      this.population.push("Потомки создателей замка")
    } else {
      const popRoll = this.rollDice("d66")
      const pop = selectFromTable(
        castlePopulationTable2,
        popRoll
      ) as (typeof castlePopulationTable2)[number]["data"]
      if (popRoll >= 62) {
        while (true) {
          const beast = selectFromTable(beastTable, this.rollDice("d66"))
          if (!beast) continue
          this.population.push(`Чудовище: ${beast.type}`)
          break
        }
      } else {
        const popMod = pop[type.size as "large"]
        this.population.push(`${pop.type} — ${this.randomFromRange(popMod)}`)
      }
    }
  }
}

const beasts: Record<number, string> = {
  1: "Дракозмей (стр 98)",
  2: "Троль (стр 120)",
  3: "Селикан (стр 76)",
  4: "Мантикора (стр 104)",
  5: "Демон",
  6: "Дракон (стр 96)",
}

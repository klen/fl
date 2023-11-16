import { roll } from "@/utils"
import { Item } from "../proto"
import { generateName, selectFromTable } from "../utils"
import {
  villageAges,
  villageDangers,
  villageFeatures,
  villageGovernments,
  villageHouses,
  villageNames,
  villageTypes,
  villageWeirds,
} from "./data"
import { Inn } from "./inn"

export class Village extends Item {
  name: string
  type: string
  size: number

  age: number
  ageDesc: string

  weird: string
  feature: string
  problem: string

  gov: string
  govFeature: string

  houses: string[]

  constructor(seed: number) {
    super(seed)

    // Generate size and type
    const size = selectFromTable(
      villageTypes,
      this.rollDice("d6")
    ) as (typeof villageTypes)[number]["data"]
    this.type = size.type
    this.size = this.randomFromRange(size.size)

    // Generate name
    this.name = generateName(villageNames, this.rollDice.bind(this, "d66"))

    // Generate age
    const age = selectFromTable(
      villageAges,
      this.rollDice("d66")
    ) as (typeof villageAges)[number]["data"]

    this.ageDesc = age.type
    this.age = this.randomFromRange(age.age)

    // Generate Danger
    this.problem = (
      selectFromTable(
        villageDangers,
        this.rollDice("d66")
      ) as (typeof villageDangers)[number]["data"]
    ).type

    // Generate Government
    const g1 = selectFromTable(
      villageGovernments,
      this.rollDice("d66")
    ) as (typeof villageGovernments)[number]["data"]
    const g2 = selectFromTable(
      villageGovernments,
      this.rollDice("d66")
    ) as (typeof villageGovernments)[number]["data"]
    this.gov = g1.type
    this.govFeature = g2.feature

    // Generate Feature
    this.feature = (
      selectFromTable(
        villageFeatures,
        this.rollDice("d66")
      ) as (typeof villageFeatures)[number]["data"]
    ).type

    // Generate Weirdness
    this.weird = (
      selectFromTable(villageWeirds, this.rollDice("d66")) as (typeof villageWeirds)[number]["data"]
    ).type

    // Generate Houses
    this.houses = []
    const numHouses = this.size < 20 ? 1 : this.size < 100 ? 3 : roll(6) + 5
    for (let i = 0; i < numHouses; i++) {
      let house: (typeof villageHouses)[number]["data"]

      while (true) {
        house = selectFromTable(villageHouses, this.rollDice("d66")) as typeof house
        const houseAmount = this.houses.filter((h) => h == house.type).length
        if (houseAmount < house.max) break
      }

      this.houses.push(house.type)
    }
    this.houses.forEach((h, idx) => {
      if (h == "Трактир") {
        const inn = new Inn(this.seed + idx)
        this.houses[idx] = `${h} "${inn.name}" (${
          inn.food
        }, ${inn.feature.toLowerCase()}, ${inn.guest.toLowerCase()})`
      }
    })
  }
}

import { Item } from "../proto"
import { selectFromTable } from "../utils"
import {
  legendDirection,
  legendDistances,
  legendGoal,
  legendPlace,
  legendSearch,
  legendSubject,
  legendTime,
  legendWhere,
} from "./data"

export class Legend extends Item {
  age: number
  ageDesc: string
  subject: string
  goal: string
  sex: string
  search: string
  place: string
  distance: string
  where: string
  direction: string

  constructor(seed: number) {
    super(seed)

    const age = selectFromTable(legendTime, this.rollDice("d66"))
    this.ageDesc = age.desc
    this.age = this.randomFromRange(age.age)
    const subject = selectFromTable(legendSubject, this.rollDice("d66"))

    this.sex = subject.sex
    this.subject = `${
      selectFromTable(legendSubject, this.rollDice("d66"))[subject.sex == "0" ? "adj" : "adj2"]
    } ${subject.name}`
    this.goal = selectFromTable(legendGoal, this.rollDice("d66")).desc
    this.search = selectFromTable(legendSearch, this.rollDice("d66")).desc
    this.place = selectFromTable(legendPlace, this.rollDice("d66")).desc
    this.distance = legendDistances[this.rollDice("d6") - 1]
    this.where = selectFromTable(legendWhere, this.rollDice("d66")).desc
    this.direction = legendDirection[this.rollDice("d8") - 1]
  }
}

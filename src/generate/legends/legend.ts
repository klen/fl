import { Item } from "../proto"
import { selectFromTable } from "../utils"
import {
  legendDirection,
  legendDistances,
  legendEnemy,
  legendFinal,
  legendFind,
  legendGoal,
  legendPlace,
  legendSearch,
  legendSubject,
  legendSubject2,
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
  final: { sex0: string; sex1: string }
  find: string
  enemy: string

  constructor(seed: number) {
    super(seed)

    const age = selectFromTable(legendTime, this.rollDice("d66"))
    this.ageDesc = age.desc
    this.age = this.randomFromRange(age.age)
    const subjectRoll = this.rollDice("d66")
    const subject = selectFromTable(legendSubject, subjectRoll)
    if (subjectRoll >= 65) {
      const subject2 = selectFromTable(legendSubject2, this.rollDice("d6"))
      subject.name = subject2.name
      subject.sex = subject2.sex
    }

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
    this.final = selectFromTable(legendFinal, this.rollDice("d66"))
    this.find = selectFromTable(legendFind, this.rollDice("d66")).desc
    const e1 = selectFromTable(legendEnemy, this.rollDice("d66"))
    const e2 = selectFromTable(legendEnemy, this.rollDice("d66"))
    this.enemy = `${e1.adj} ${e2.name}`
  }
}

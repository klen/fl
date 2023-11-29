import { Item } from "../proto"
import { selectFromTable, takeMulti } from "../utils"
import {
  demonAdj,
  demonAttack,
  demonFeatures,
  demonForm,
  demonName,
  demonSpecial,
  demonWeakness,
} from "./data"

export class Demon extends Item {
  name: string
  form: string
  strength: number
  agility: string
  wits: string
  empathy: string
  armor: number
  effect: string
  weakness: string

  skills: { name: string; level: number }[]
  specials: (typeof demonSpecial)[number]["data"][]
  features: (typeof demonFeatures)[number]["data"][]
  attacks: (typeof demonAttack)[number]["data"][]

  constructor(seed: number) {
    super(seed)

    const formData = selectFromTable(demonForm, this.rollDice("d66"))
    this.form = formData.form
    this.strength = this.randomFromRange(formData.strength)
    this.agility = formData.agility
    this.wits = formData.wits
    this.empathy = formData.empathy
    this.armor = this.randomFromRange(formData.armor)
    this.effect = formData.effect

    this.name = `${demonName[this.randomFromRange([1, 50]) - 1]} ${
      demonAdj[this.randomFromRange([1, 50]) - 1]
    }`

    this.weakness = selectFromTable(demonWeakness, this.rollDice("d66")).desc

    this.skills = skills.map((s) => ({
      name: s,
      level: this.rollDice("d6") - 1,
    }))

    const roll = () => this.rollDice("d66")
    this.specials = takeMulti(demonSpecial, roll)
    this.features = takeMulti(demonFeatures, roll)
    this.features.forEach((f) => {
      if (f.modifier) {
        const [key, value] = f.modifier.split(":")
        this[key] += this.rollDices(value)
      }
    })
    const attacks = takeMulti(demonAttack, roll)
    this.attacks = attacks.map((a) => {
      let damage = a.damage
      if (damage.includes("|")) {
        const [type, ...values] = damage.split("|")
        const value = values[this.rollDice("d6") - 1]
        damage = `${type} ${value}`
      }
      return {
        ...a,
        damage,
        dices: this.rollDices(a.dices).toString(),
      }
    })
  }
}

const skills = ["insight", "lore", "manipulation", "move", "scout", "sneak"]

import { Item } from "../proto"
import { selectFromTable } from "../utils"
import { demonAdj, demonFeatures, demonForm, demonName } from "./data"

export class Demon extends Item {
  name: string
  form: string
  strength: number
  agility: number
  wits: number
  empathy: number
  armor: number
  effect: string
  features: { feature: string; desc: string; modifier: string }[]

  skills: { name: string; level: number }[]

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

    this.features = this.genFeatures()
    this.features.forEach((f) => {
      if (f.modifier) {
        const [key, value] = f.modifier.split(":")
        this[key] += this.rollDices(value)
      }
    })
    this.skills = skills.map((s) => ({
      name: s,
      level: this.rollDice("d6") - 1,
    }))
  }

  genFeatures(max = 2) {
    let feature = selectFromTable(demonFeatures, this.rollDice("d66"))
    const features = [feature]
    if (feature.feature != "Опасный") return features

    while (features.length <= max) {
      feature = selectFromTable(demonFeatures, this.rollDice("d66"))
      if (features.find((f) => f.feature == feature.feature)) continue
      features.push(feature)
    }
    return features.slice(1)
  }
}

const skills = ["insight", "lore", "manipulation", "move", "scout", "sneak"]

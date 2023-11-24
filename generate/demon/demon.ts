import { Item } from "../proto"
import { selectFromTable } from "../utils"
import { demonAdj, demonAttack, demonFeatures, demonForm, demonName, demonWeakness } from "./data"

export class Demon extends Item {
  name: string
  form: string
  strength: number
  agility: number
  wits: number
  empathy: number
  armor: number
  effect: string
  weakness: string

  features: { feature: string; desc: string; modifier: string }[]
  skills: { name: string; level: number }[]
  attacks: { attack: string; dices: string; distance: string; damage: string }[]

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
    this.attacks = this.genAttacks()

    console.log("demon", this)
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

  genAttacks() {
    const attack = selectFromTable(demonAttack, this.rollDice("d66"))
    const attacks = [attack]
    const max = attack.attack == "3" ? 3 : attack.attack == "4" ? 4 : 1
    if (max == 1) return attacks

    while (attacks.length <= max) {
      const attack = selectFromTable(demonAttack, this.rollDice("d66"))
      if (
        attack.attack == "3" ||
        attack.attack == "4" ||
        attacks.find((a) => a.attack == attack.attack)
      )
        continue
      attacks.push(attack)
    }

    return attacks.slice(1).map((a) => ({
      ...a,
      dices: this.rollDices(a.dices),
    }))
  }
}

const skills = ["insight", "lore", "manipulation", "move", "scout", "sneak"]

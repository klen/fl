import { TAgeType, TAttrs, TSkills, TTableItem } from "@/types"
import { money, moneyText } from "@/utils"
import { findLairValuedTable } from "../finds"
import { Item } from "../proto"
import { selectFromTable } from "../utils"
import {
  characterBirthplace,
  characterProfession,
  characterRace,
  characterTalent,
  characterTalentSorcerer,
} from "./data"
import Druid from "./druid.json"
import dwarf from "./dwarf.json"
import elf from "./elf.json"
import Fighter from "./fighter.json"
import goblin from "./goblin.json"
import halfElf from "./half-elf.json"
import halfling from "./halfling.json"
import human1 from "./human1.json"
import human2 from "./human2.json"
import human3 from "./human3.json"
import Hunter from "./hunter.json"
import meet from "./meet.json"
import Minstrel from "./minstrel.json"
import orc from "./orc.json"
import Peddler from "./peddler.json"
import pride from "./pride.json"
import Rider from "./rider.json"
import Rogue from "./rogue.json"
import Sorcerer from "./sorcerer.json"
import wolfkin from "./wolfkin.json"

const childhoods = {
  human1,
  human2,
  human3,
  elf,
  dwarf,
  halfling,
  orc,
  goblin,
  wolfkin,
  ["half-elf"]: halfElf,
}

const events = {
  Minstrel,
  Fighter,
  Rider,
  Rogue,
  Peddler,
  Sorcerer,
  Hunter,
  Druid,
}

export class Character extends Item {
  kin: string
  age: TAgeType
  birthPlace: string
  childhood: string
  childhoodDesc: string
  attrs: TAttrs
  skills: TSkills
  profession: string
  event: string
  eventDesc: string
  items: string[]
  pride: string

  meet: string
  meetDesc: string
  talents: Record<string, number>

  constructor(seed: number) {
    super(seed)

    const kin = selectFromTable(characterRace, this.rollDice("d66"))
    this.kin = kin.desc

    this.profession = selectFromTable(characterProfession, this.rollDice("d66")).name
    const prideData = pride[this.profession.toLowerCase()]
    this.pride = prideData[this.randomFromRange([0, prideData.length - 1])]

    this.birthPlace = selectFromTable(characterBirthplace, this.rollDice("d6"))[kin.type]

    const childhood = childhoods[kin.type][this.rollDice("d6") - 1]
    this.attrs = { ...childhood.attrs }
    this.skills = { ...childhood.skills }
    this.childhood = childhood.name
    this.childhoodDesc = childhood.desc

    const profEvents = events[this.profession]
    const event = profEvents[this.rollDice("d6") - 1]
    this.event = event.name
    this.eventDesc = event.desc
    Object.keys(event.skills).forEach((skill) => {
      this.skills[skill] = (this.skills[skill] || 0) + event.skills[skill]
    })
    this.items = event.items.map((item) => {
      if (item == "special-find") {
        let itemRoll = this.rollDice("d66")
        while (itemRoll < 32) {
          itemRoll = this.rollDice("d66")
        }
        const find = selectFromTable(findLairValuedTable, itemRoll)
        const coins = this.randomFromRange(find.priceRange) * find.priceMulti
        return `${find.desc} (${moneyText(money(coins))})`
      } else if (
        item.startsWith("gold") ||
        item.startsWith("silver") ||
        item.startsWith("copper")
      ) {
        const [mtype, dice] = item.split(":")
        return "Деньги: " + moneyText({ [mtype]: this.rollDices(dice) })
      }
      return item
    })

    const m = selectFromTable(meet as TTableItem<any>[], this.rollDice("d66"))
    this.meet = m.name
    this.meetDesc = m.desc

    const ageRoll = this.rollDice("d6")
    this.age = kin.type == "elf" ? "adult" : ageRoll <= 2 ? "young" : ageRoll <= 5 ? "adult" : "old"
    this.talents = {
      [kin.talent]: 1,
      [`Path of ${
        this.profession == "Sorcerer"
          ? selectFromTable(characterTalentSorcerer, this.rollDice("d8")).name
          : selectFromTable(characterTalent, this.rollDice("d6"))[this.profession]
      }`]: this.age == "young" ? 1 : 2,
      [event.talent]: this.age == "old" ? 2 : 1,
    }

    if (this.age == "adult") {
      this.decreaseAttr()
      this.increaseSkill()
      this.increaseSkill()
    } else if (this.age == "old") {
      this.decreaseAttr()
      this.decreaseAttr()
      this.increaseSkill()
      this.increaseSkill()
      this.increaseSkill()
      this.increaseSkill()
    }
  }

  decreaseAttr() {
    const attrs = Object.keys(this.attrs) as (keyof TAttrs)[]
    const attr = attrs[this.randomFromRange([0, 3])]
    this.attrs[attr] = this.attrs[attr] - 1
  }

  increaseSkill() {
    const skills = Object.keys(this.skills) as (keyof TSkills)[]
    while (true) {
      const skill = skills[this.randomFromRange([0, skills.length - 1])]
      if (this.skills[skill] < 3) {
        this.skills[skill] = this.skills[skill] + 1
        break
      }
    }
  }
}

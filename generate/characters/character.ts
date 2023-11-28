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
import Minstrel from "./minstrel.json"
import orc from "./orc.json"
import Peddler from "./peddler.json"
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
  birthPlace: string
  childhood: string
  childhoodDesc: string
  attrs: {
    strength: number
    agility: number
    wits: number
    empathy: number
  }
  skills: Record<string, number>
  profession: string
  talents: string[]
  event: string
  eventDesc: string
  items: string[]

  constructor(seed: number) {
    super(seed)

    const kin = selectFromTable(characterRace, this.rollDice("d66"))
    this.kin = kin.desc
    this.talents = [kin.talent]

    this.profession = selectFromTable(characterProfession, this.rollDice("d66")).name

    this.birthPlace = selectFromTable(characterBirthplace, this.rollDice("d6"))[kin.type]

    const childhood = childhoods[kin.type][this.rollDice("d6") - 1]
    this.attrs = { ...childhood.attrs }
    this.skills = { ...childhood.skills }
    this.childhood = childhood.name
    this.childhoodDesc = childhood.desc

    this.talents = [
      ...this.talents,
      `Path of ${
        this.profession == "Sorcerer"
          ? selectFromTable(characterTalentSorcerer, this.rollDice("d8")).name
          : selectFromTable(characterTalent, this.rollDice("d6"))[this.profession]
      }`,
    ]

    const profEvents = events[this.profession]
    if (profEvents) {
      const event = profEvents[this.rollDice("d6") - 1]
      this.event = event.name
      this.eventDesc = event.desc
      Object.keys(event.skills).forEach((skill) => {
        this.skills[skill] = (this.skills[skill] || 0) + event.skills[skill]
      })
      this.talents = [...this.talents, ...event.talents]
      this.items = event.items
    }
  }
}

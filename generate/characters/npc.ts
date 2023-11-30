import { TAttrs, TMoney, TRace, TSkills } from "@/types"
import { money, moneyText } from "@/utils"
import { TFindRarity, genFind } from "../finds"
import { Item } from "../proto"
import { selectFromTable } from "../utils"
import { characterRace, npc as npcData } from "./data"
import { getName } from "./name"
import npc from "./npc.json"

export class NPC extends Item {
  name: string
  sex: boolean
  type: string
  race: TRace
  prof: string
  feature: string
  weirdness: string
  attrs: TAttrs
  skills: TSkills
  items: string[]
  money: TMoney

  constructor(seed: number) {
    super(seed)

    this.race = selectFromTable(characterRace, this.rollDice("d66")).type
    if (this.race.startsWith("human")) this.race = "human"
    this.sex = Math.floor(this.random() * (womanRate[this.race] || 4)) > 0

    this.name = getName(this.race, this.sex, this.random) || ""

    const type = selectFromTable(npcData, this.rollDice("d66"))
    this.type = type.type
    this.prof = type.prof

    this.feature = selectFromTable(npcData, this.rollDice("d66")).feature
    this.weirdness = selectFromTable(npcData, this.rollDice("d66")).weirdness

    const prof = npc.find((item) => item.type === type.prof)
    this.attrs = prof.attrs
    this.skills = prof.skills

    this.items = []
    const wallet: TMoney = {}

    for (let item of prof.equipment) {
      if (Array.isArray(item)) {
        item = item[this.randomFromRange([0, item.length - 1])]
      }
      if (item.startsWith("gold") || item.startsWith("silver") || item.startsWith("copper")) {
        const [mtype, dice] = item.split(":")
        wallet[mtype] = (wallet[mtype] || 0) + this.rollDices(dice)
      } else if (item.startsWith("find:")) {
        const rarity = item.split(":")[1]
        const find = genFind({ rarity: rarity as TFindRarity, type: "carried", seed: this.seed })
        if (find.isMoney) {
          const m = money(find.price)
          wallet.gold = (wallet.gold || 0) + (m.gold || 0)
          wallet.silver = (wallet.silver || 0) + (m.silver || 0)
          wallet.copper = (wallet.copper || 0) + (m.copper || 0)
        } else this.items.push(`${find.desc} (${moneyText(money(find.price))})`)
      } else this.items.push(item)
    }
    if (Object.keys(wallet).length > 0) this.items.push(`Деньги: ${moneyText(wallet)}`)
  }
}

const womanRate = {
  orc: 12,
  goblin: 10,
  gnome: 8,
  wolfkin: 6,
}

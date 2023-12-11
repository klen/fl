import { Item } from "../proto"
import { selectFromTable } from "../utils"
import { roomDoorTableData, roomTreasureTableData, roomTypeTableData } from "./data"

export class Room extends Item {
  type: string
  doors: string[]
  content: string[]

  constructor(seed: number) {
    super(seed)
    this.type = selectFromTable(roomTypeTableData, this.rollDice("d6")).type
    const doorNum = selectFromTable(roomDoorTableData, this.rollDice("d6")).num
    this.doors = Array.from({ length: doorNum }, () => true).map(
      () => selectFromTable(roomDoorTableData, this.rollDice("d6")).state
    )

    this.content = []
    const contentRoll = this.rollDice("d6")
    if (contentRoll == 6) {
      this.content.push("trap")
    } else if (contentRoll > 4) {
      this.content.push("Someone here")
    }

    const treasureRoll = this.rollDice("d6")
    if (treasureRoll > 5) {
      this.content.push(selectFromTable(roomTreasureTableData, this.rollDice("d6")).type)
    }
  }
}

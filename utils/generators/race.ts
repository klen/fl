import { racesTable, selectFromTable } from "@/data"
import { rollDice } from "../dices"

export function genRace() {
  const value = rollDice("d6")
  const data = selectFromTable(racesTable, value)
  return data
}

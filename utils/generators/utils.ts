import { selectFromTable } from "@/data"
import { TTableItem } from "@/types"
import { parseInt } from "lodash"

export type TProps = Record<string, number[]>

const indexRe = /([a-zA-Z]+)((?:-?\d+)+)/g

export function indexToProperties(index: string) {
  const properties: TProps = {}
  const matches = index.matchAll(indexRe)
  for (const match of matches as any) properties[match[1]] = match[2].split("-").map(parseInt)
  return properties
}

export function propertiesToIndex(properties: TProps) {
  return Object.entries(properties)
    .map(([d, v]) => `${d}${v.join("-")}`)
    .join("")
}

export function generateName(
  table: TTableItem<{ name: string; adj1: string; adj2: string; sex: number }>[],
  roll66: () => number
) {
  const n1 = selectFromTable(table, roll66()) as (typeof table)[number]["data"]
  const n2 = selectFromTable(table, roll66()) as (typeof table)[number]["data"]

  return `${n2[n1.sex ? "adj2" : "adj1"]} ${n1["name"]}`
}

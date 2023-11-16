import { TTableItem } from "@/types"

export function selectFromTable<T>(table: TTableItem<T>[], value: number) {
  return table.find((item) => item.range[0] <= value && item.range[1] >= value)?.data
}

export function choiceFromTable<T>(table: TTableItem<T>[], random = Math.random) {
  const choice = Math.floor(random() * table.length)
  return selectFromTable(table, choice)
}

export function parseTable(data: string) {
  const lines = data.split("\n")
  const header = lines[0].split(/;/)
  const table = lines.slice(1).map((line) => {
    const [range, ...data] = line.split(/;/)
    const [first, last] = range.split("-").map((n) => parseInt(n))
    const result: TTableItem<any> = {
      range: [first, last || first],
      data: {},
    }
    data.forEach((item, index) => {
      const key = header[index + 1]
      if (key) result.data[key] = item
    })
    return result
  })
  return table
}

export function generateName(
  table: TTableItem<{ name: string; adj1: string; adj2: string; sex: number }>[],
  roll66: () => number
) {
  const n1 = selectFromTable(table, roll66()) as (typeof table)[number]["data"]
  const n2 = selectFromTable(table, roll66()) as (typeof table)[number]["data"]

  return `${n2[n1.sex ? "adj2" : "adj1"]} ${n1["name"]}`
}

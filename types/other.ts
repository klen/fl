export type TDice = "d6" | "d8" | "d10" | "d12" | "d66"

export type TTableItem<T> = {
  range: [number, number]
  data: T
}

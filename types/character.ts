export type TRace =
  | "human"
  | "elf"
  | "half-elf"
  | "dwarf"
  | "halfling"
  | "wolfkin"
  | "orc"
  | "goblin"

export type TSex = "male" | "female" | "other"

export type TCharacter = {
  name: string
  age: number
  race: TRace
  sex: TSex
  carrier?: string
}

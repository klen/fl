import { characters, names } from "@/data"
import { TCharacter, TRace, TSex } from "@/types"
import { roll } from "../dices"
import { choice } from "../random"
import { genRace } from "./race"

export function genCharacter(): TCharacter {
  const chSex = choice(["male", "female"]) as TSex
  const race = genRace().race as unknown as TRace
  const carrier = choice(characters.carrier)

  const name = choice((names as any)[race][chSex] as string[])
  return {
    name,
    race,
    carrier,
    age: roll(100),
    sex: chSex,
  }
}

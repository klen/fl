import { TDice } from "@/types"

export const roll = (n: number, random = Math.random) => Math.floor(random() * n) + 1
export const rollMultiple = (dice: TDice, amount: number, random = Math.random) =>
  Array.from({ length: amount }).map(() => rolls[dice](random))

const rolls: Record<TDice, (random?: () => number) => number> = {
  d6: (random = Math.random) => roll(6, random),
  d8: (random = Math.random) => roll(8, random),
  d10: (random = Math.random) => roll(10, random),
  d12: (random = Math.random) => roll(12, random),
  d66: (random = Math.random) => roll(6, random) * 10 + roll(6, random),
}

export const rollDice = (type: TDice, random = Math.random) => {
  const dice = rolls[type]
  return dice ? dice(random) : 0
}

export const dice66ToRolls = (n: number) => [Math.floor(n / 10), n % 10]

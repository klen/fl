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

// parse roll like 2d6+4
export const parseRoll = (roll: string) => {
  const [dice, mod] = roll.split("+")
  const [amount, type] = dice.split("d").map(Number)
  return { amount: amount || 1, type, mod: mod ? Number(mod) : 0 }
}

export const rollDices = (desc: string, random = Math.random) => {
  const { amount, type, mod } = parseRoll(desc)
  if (!type) return mod

  const diceType = `d${type}` as TDice
  return amount > 1
    ? rollMultiple(diceType, amount, random).reduce((a, b) => a + b, mod)
    : mod + rollDice(diceType, random)
}

export const dice66ToRolls = (n: number) => [Math.floor(n / 10), n % 10]

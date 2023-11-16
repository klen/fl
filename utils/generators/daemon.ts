import { rollDice } from "../dices"
import { TProps } from "./utils"

export function getDaemonProps(): TProps {
  return {
    n: [rollDice("d66"), rollDice("d66")],
    k: [rollDice("d66")],
    f: [rollDice("d66")],
    a: [rollDice("d66"), rollDice("d66")],
    s: [rollDice("d66")],
    w: [rollDice("d66")],
    g: [rollDice("d6") - 1], // move
    t: [rollDice("d6") - 1], // stealth
    l: [rollDice("d6") - 1], // lore
    i: [rollDice("d6") - 1], // insight
    c: [rollDice("d6") - 1], // scouting
    m: [rollDice("d6") - 1], // manipulation
  }
}

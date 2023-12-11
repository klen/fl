import { parseRoll, rollDices } from "./dices"

describe("dices", () => {
  describe("parseRoll", () => {
    it("should be ok", () => {
      expect(parseRoll).toBeTruthy()
    })
    it("complex", () => {
      expect(parseRoll("2d6+4")).toEqual({
        amount: 2,
        type: 6,
        mod: 4,
      })
    })
    it("modifier only", () => {
      expect(parseRoll("+4")).toEqual({
        amount: 1,
        type: undefined,
        mod: 4,
      })
    })
    it("simple dice", () => {
      expect(parseRoll("d6")).toEqual({
        amount: 1,
        type: 6,
        mod: 0,
      })
    })
  })

  describe("rollDices", () => {
    it("should be ok", () => {
      expect(rollDices).toBeTruthy()
    })

    it("complex", () => {
      expect(rollDices("2d6+4")).toBeGreaterThanOrEqual(6)
    })

    it("modifier only", () => {
      expect(rollDices("+4")).toEqual(4)
    })

    it("simple dice", () => {
      expect(rollDices("d6")).toBeGreaterThanOrEqual(1)
      expect(rollDices("d6")).toBeLessThanOrEqual(6)
    })
  })
})

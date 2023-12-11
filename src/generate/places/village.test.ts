import { Village } from "./village"

describe("generate village", () => {
  it("should generate village", () => {
    const place = new Village(100)
    expect(place).toBeTruthy()
    expect(place.name).toBeTruthy()
  })
})

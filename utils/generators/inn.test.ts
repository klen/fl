import { Inn } from "./inn"

describe("generate inn", () => {
  it("should generate inn", () => {
    const place = new Inn(100)
    expect(place).toBeTruthy()
    expect(place.name).toBeTruthy()
  })
})

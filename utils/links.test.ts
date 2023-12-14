import { siteLink } from "./links"

describe("links", () => {
  it("should be ok", () => {
    expect(siteLink).toBeTruthy()
  })

  it("should modify path", () => {
    const path = "/test"
    expect(siteLink(path)).toBe("https://klen.github.io/fl/test.html")
  })

  it("base path should be ok", () => {
    expect(siteLink("/", false)).toBe("https://klen.github.io/fl/")
  })
})

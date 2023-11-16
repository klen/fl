import { indexToProperties, propertiesToIndex } from "./utils"

test("indexToProperties", () => {
  expect(indexToProperties("foo1bar2-45")).toEqual({ foo: [1], bar: [2, 45] })
})

test("propertiesToIndex", () => {
  expect(propertiesToIndex({ foo: [1], bar: [2, 45] })).toEqual("foo1bar2-45")
})

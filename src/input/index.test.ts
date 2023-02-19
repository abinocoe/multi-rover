import { parseGrid, parseRobots } from "./index.js"

describe("parseGrid", () => {
  it("returns an array of two strings when input is valid", () => {
    expect(parseGrid("23 5")).toEqual(["23", "5"])
  })
  it("throws an error when input is invalid", () => {
    expect(() => {
      parseGrid("A 44")
    }).toThrowError()
  })
  it("throws an error when input is empty", () => {
    expect(() => {
      parseGrid("")
    }).toThrowError()
  })
})

describe("parseRobots", () => {
  it("returns an array of two strings when input is valid", () => {
    expect(parseRobots(["(2, 3, E) LFRFF", "(0, 2, N) FFLFRFF"])).toEqual([
      ["2", "3", "E", "L", "F", "R", "F", "F"],
      ["0", "2", "N", "F", "F", "L", "F", "R", "F", "F"],
    ])
  })
  it("throws an error when input is invalid", () => {
    expect(() => {
      parseRobots(["A 44"])
    }).toThrowError()
  })
  it("throws an error when input is empty", () => {
    expect(() => {
      parseRobots([""])
    }).toThrowError()
  })
})

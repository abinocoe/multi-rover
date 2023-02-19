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
  it("returns an array of robot type objects when input is valid", () => {
    expect(parseRobots(["(2, 3, E) LFRFF", "(0, 2, N) FFLFRFF"])).toEqual([
      {
        x: "2",
        y: "3",
        orientation: "E",
        instructions: ["L", "F", "R", "F", "F"],
      },
      {
        x: "0",
        y: "2",
        orientation: "N",
        instructions: ["F", "F", "L", "F", "R", "F", "F"],
      },
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

import { runRobot, move } from "./index.js"

describe("runRobot", () => {
  it("returns correct output for safe robot moving forward", () => {
    expect(
      runRobot([2, 2], {
        x: "1",
        y: "1",
        orientation: "S",
        instructions: ["F"],
      })
    ).toEqual("(1, 0) S")
  })
  it("returns correct output for safe robot turning right", () => {
    expect(
      runRobot([2, 2], {
        x: "1",
        y: "1",
        orientation: "N",
        instructions: ["L"],
      })
    ).toEqual("(1, 1) W")
  })
  it("returns correct output for lost robot", () => {
    expect(
      runRobot([2, 2], {
        x: "2",
        y: "2",
        orientation: "N",
        instructions: ["F"],
      })
    ).toEqual("(2, 2) N LOST")
  })
})

describe("move", () => {
  it("returns correctly updated position for safe robot", () => {
    expect(move(2, 2, 1, 0, "N")).toEqual([1, 1, 1])
  })
  it("returns previous output and unsafe for lost robot", () => {
    expect(move(2, 2, 2, 2, "N")).toEqual([2, 2, -1])
  })
})

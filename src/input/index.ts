import fs from "fs"

export const getInput = (): {
  parsedX: string
  parsedY: string
  parsedRobots: string[][]
} => {
  const input = fs.readFileSync("input.txt", "utf8")
  const [grid, ...robots] = input.split("\n").filter((line) => line.length > 0)
  const [gridX, gridY] = parseGrid(grid)
  const cleanRobots = parseRobots(robots)
  return { parsedX: gridX, parsedY: gridY, parsedRobots: cleanRobots }
}

export const parseGrid = (grid: string) => {
  const [gridX, gridY] = grid.split(" ")
  const parsedX = parseInt(gridX, 10)
  const parsedY = parseInt(gridY, 10)
  if (!Number.isInteger(parsedX) || !Number.isInteger(parsedY)) {
    throw new Error("Malformed input, grid definition must be 2 integers")
  }
  return [gridX, gridY]
}

export const parseRobots = (robots: string[]): string[][] => {
  const cleanRobots: string[][] = robots.map((robot) => {
    const [x, y, orientation, ...moves] = robot
      .replace("(", "")
      .replace(")", "")
      .replaceAll(" ", "")
      .replaceAll(",", "")
      .split("")
    if (
      !Number.isInteger(parseInt(x, 10)) ||
      !Number.isInteger(parseInt(y, 10)) ||
      !["N", "S", "E", "W"].includes(orientation) ||
      !moves.every((move) => ["F", "L", "R"].includes(move))
    ) {
      throw new Error("Malformed input, check robot")
    }
    return [x.toString(), y.toString(), orientation, ...moves]
  })
  return cleanRobots
}

export default getInput

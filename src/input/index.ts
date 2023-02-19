import fs from "fs"
import { Instructions, Orientations, Robot } from "../robot/types"

export const getInput = (): {
  parsedX: string
  parsedY: string
  parsedRobots: Robot[]
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

export const parseRobots = (robots: string[]): Robot[] => {
  const cleanRobots: Robot[] = robots.map((robot) => {
    let [x, y, orientation, ...moves] = robot
      .replace("(", "")
      .replace(")", "")
      .replaceAll(" ", "")
      .replaceAll(",", "")
      .split("")
    if (
      !Number.isInteger(parseInt(x, 10)) ||
      !Number.isInteger(parseInt(y, 10)) ||
      !Object.values(Orientations).includes(orientation as any) ||
      !moves.every((move: any) => Object.values(Instructions).includes(move))
    ) {
      throw new Error("Malformed input, check robot")
    }
    const robotObject = {
      x: x.toString(),
      y: y.toString(),
      orientation,
      instructions: moves,
    } as unknown as Robot
    return robotObject
  })
  return cleanRobots
}

export default getInput

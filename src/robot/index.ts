import { Instructions, OrderedOrientations, Orientations, Robot } from "./types"

export const runAllRobots = (grid: [number, number], robots: Robot[]) => {
  const output = robots.map((robot) => runRobot(grid, robot))
  console.log(output.join("\r\n"))
}

export const runRobot = (grid: [number, number], robot: Robot) => {
  const [gridHorizontalSize, gridVerticalSize] = grid
  let { x: robotX, y: robotY, orientation, instructions } = robot
  // TODO check that robot is within grid to start off with
  let robXInt = parseInt(robotX, 10)
  let robYInt = parseInt(robotY, 10)
  let orientationIndex = OrderedOrientations.findIndex((s) => s === orientation)
  let safe = 1

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i]
    // TODO handle (allow) lower case
    switch (instruction) {
      case Instructions.R:
        orientationIndex = (orientationIndex + 1) % OrderedOrientations.length
        break
      case Instructions.L:
        orientationIndex = orientationIndex === 0 ? 3 : orientationIndex - 1
        break
      case Instructions.F:
        let [x, y, s] = move(
          gridHorizontalSize,
          gridVerticalSize,
          robXInt,
          robYInt,
          OrderedOrientations[orientationIndex]
        )
        robXInt = x
        robYInt = y
        safe = s
        break
    }
    if (safe === -1) {
      break
    }
  }

  if (safe === 1) {
    return `(${robXInt}, ${robYInt}) ${OrderedOrientations[orientationIndex]}`
  } else if (safe === -1) {
    return `(${robXInt}, ${robYInt}) ${OrderedOrientations[orientationIndex]} LOST`
  }
}

export const move = (
  gridX: number,
  gridY: number,
  robotX: number,
  robotY: number,
  orientation: string
) => {
  let safe = 1
  switch (orientation) {
    case Orientations.N:
      if (robotY < gridY) {
        robotY++
      } else {
        safe = -1
      }
      break
    case Orientations.S:
      if (robotY > 0) {
        robotY--
      } else {
        safe = -1
      }
      break
    case Orientations.E:
      if (robotX < gridX) {
        robotX++
      } else {
        safe = -1
      }
      break
    case Orientations.W:
      if (robotX > 0) {
        robotY--
      } else {
        safe = -1
      }
      break
  }
  return [robotX, robotY, safe]
}

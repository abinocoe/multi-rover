const orientations = ["N", "E", "S", "W"]
// could be made safer with enum

export const runAllRobots = (grid: [number, number], robots: string[][]) => {
  const output = robots.map((robot) => runRobot(grid, robot))
  console.log(output.join("\r\n"))
}

export const runRobot = (grid: [number, number], robot: string[]) => {
  const [gridHorizontalSize, gridVerticalSize] = grid
  let [robotX, robotY, orientation, ...instructions] = robot
  // TODO check that robot is within grid to start off with
  let robXInt = parseInt(robotX, 10)
  let robYInt = parseInt(robotY, 10)
  let orientationIndex = orientations.findIndex((s) => s === orientation)
  let safe = 1

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i]
    // TODO handle (allow) lower case
    switch (instruction) {
      case "R":
        orientationIndex = (orientationIndex + 1) % 4
        break
      case "L":
        orientationIndex = orientationIndex === 0 ? 3 : orientationIndex - 1
        break
      case "F":
        let [x, y, s] = move(
          gridHorizontalSize,
          gridVerticalSize,
          robXInt,
          robYInt,
          orientations[orientationIndex]
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
    return `(${robXInt}, ${robYInt}) ${orientations[orientationIndex]}`
  } else if (safe === -1) {
    return `(${robXInt}, ${robYInt}) ${orientations[orientationIndex]} LOST`
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
    case "N":
      if (robotY < gridY) {
        robotY++
      } else {
        safe = -1
      }
      break
    case "S":
      if (robotY > 0) {
        robotY--
      } else {
        safe = -1
      }
      break
    case "E":
      if (robotX < gridX) {
        robotX++
      } else {
        safe = -1
      }
      break
    case "W":
      if (robotX > 0) {
        robotY--
      } else {
        safe = -1
      }
      break
  }
  return [robotX, robotY, safe]
}

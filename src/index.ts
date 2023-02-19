import { getInput } from "./input/index.js"
import { runAllRobots } from "./robot/index.js"

export const main = () => {
  const { parsedX, parsedY, parsedRobots } = getInput()
  runAllRobots([parseInt(parsedX), parseInt(parsedY)], parsedRobots)
}

main()

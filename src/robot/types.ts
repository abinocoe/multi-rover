export interface Robot {
  x: string
  y: string
  orientation: OrientationsType
  instructions: InstructionsType[]
}

export const Instructions = {
  L: "L",
  R: "R",
  F: "F",
}

export const Orientations = {
  N: "N",
  E: "E",
  S: "S",
  W: "W",
} as const

export const OrderedOrientations = [
  Orientations.N,
  Orientations.E,
  Orientations.S,
  Orientations.W,
]

type OrientationsType = keyof typeof Orientations
type InstructionsType = keyof typeof Instructions

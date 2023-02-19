/**  @type {import('@jest/types').Config.ProjectConfig} */
const config = {
  transform: {
    "\\.[jt]sx?$": ["ts-jest"],
  },
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
  modulePathIgnorePatterns: ["<rootDir>/out/"],
  extensionsToTreatAsEsm: [".ts"],
}

export default config

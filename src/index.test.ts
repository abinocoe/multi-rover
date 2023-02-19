import fs from "fs"
import { main } from "./index"

describe("mars rover", () => {
  // returns correct position of successful robot

  it("rejects malformed input", () => {
    jest.spyOn(fs, "readFileSync").mockImplementationOnce(() => {
      return `A 8
    (2, 3, N) FLLFR
    (1, 0, S) FFRLF`
    })
    expect(() => {
      main()
    }).toThrowError()
    jest.spyOn(fs, "readFileSync").mockImplementationOnce(() => {
      return "FFRLF"
    })
    expect(() => {
      main()
    }).toThrowError()
  })
})

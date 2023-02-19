import fs from "fs"
import { main } from "../src/index"

describe("mars rover", () => {
  it("returns correct position of successful robot", () => {
    const logSpy = jest.spyOn(console, "log")
    jest.spyOn(fs, "readFileSync").mockImplementationOnce(() => {
      return `5 5
    (2, 3, N) FFLFR`
    })
    main()
    expect(logSpy).toHaveBeenCalledWith(`(2, 4) N`)
  })

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

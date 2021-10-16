import ProgramData, { emptyProgramData } from "./ProgramData"
import ProgramResponse from "./ProgramResponse"
import { programData } from "../testhelpers/ProgramJson"

describe('ProgramResponse', () => {

  it ('holds program data', () => {
    const program: ProgramData = programData
    const response = new ProgramResponse({data: program})
    expect(response.isError()).toBeFalsy()
    expect(response?.programData).toEqual(program)
  })

  it ('holds error', () => {
    const err = 'i dunno, just an object'
    const response = new ProgramResponse({error: err})
    expect(response.isError()).toBeTruthy()
    expect(response.error).toEqual(err)
    expect(response.programData).toEqual(emptyProgramData)
  })

})
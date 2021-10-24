import React from 'react'
import { render, screen } from '@testing-library/react'
import DetailProgramScreen from "./DetailProgramScreen";
import { programData2, programJson2 } from "../testhelpers/ProgramJson";

describe('DetailProgramScreen', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('contains nav and display', async () => {
    const programId = programData2.id
    // @ts-ignore
    fetch.mockResponseOnce(programJson2)
    render(<DetailProgramScreen programId={programId}/>)

    // @ts-ignore
    expect(fetch.mock.calls[0][0]).toEqual(`http://localhost:3000/programs/${programId}.json`)
    expect(await screen.findByText('Back')).toBeInTheDocument()
    expect(await screen.findByText(programData2.title)).toBeInTheDocument()
  })
})
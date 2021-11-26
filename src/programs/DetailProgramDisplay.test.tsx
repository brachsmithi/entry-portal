import React from 'react'
import { render, screen } from '@testing-library/react'
import DetailProgramDisplay from "./DetailProgramDisplay"
import { programData2, programJson2 } from "../testhelpers/ProgramJson"

describe('DetailProgramScreen', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('contains nav and display', async () => {
    const programId = programData2.id
    // @ts-ignore
    fetch.mockResponseOnce(programJson2)
    render(<DetailProgramDisplay programId={programId}/>)

    // @ts-ignore
    expect(fetch.mock.calls[0][0]).toEqual(`http://localhost:3000/programs/${programId}.json`)
    expect((await screen.findByText('Back')).closest('a')).toHaveAttribute('href', '/programs')
    expect(await screen.findByText(programData2.title)).toBeInTheDocument()
  })
})
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { returnProgramListingJson } from "../testhelpers/ProgramSearchJson"
import userEvent from "@testing-library/user-event"
import { programData2, programJson2 } from "../testhelpers/ProgramJson"

describe('Program Integration', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('includes pagination nav', async () => {
    const currentPage = 1
    // @ts-ignore
    fetch.mockResponseOnce(returnProgramListingJson(currentPage))
    render(<App />)
    // @ts-ignore
    expect(fetch.mock.calls[0][0]).toEqual("http://localhost:3000/programs.json?page=1")
    expect(await screen.findByText(/Page 1/)).toBeInTheDocument()

    // @ts-ignore
    fetch.mockResponseOnce(returnProgramListingJson(currentPage+1))
    let element = await screen.findByText('Next')
    userEvent.click(element)
    // @ts-ignore
    expect(fetch.mock.calls[1][0]).toEqual("http://localhost:3000/programs.json?page=2")
    expect(await screen.findByText(/Page 2/)).toBeInTheDocument()

    // @ts-ignore
    fetch.mockResponseOnce(returnProgramListingJson(currentPage))
    element = await screen.findByText('Prev')
    userEvent.click(element)
    // @ts-ignore
    expect(fetch.mock.calls[2][0]).toEqual("http://localhost:3000/programs.json?page=1")
    expect(await screen.findByText(/Page 1/)).toBeInTheDocument()
  })

  it('loads program from link', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(programJson2)
    // const history = createMemoryHistory()
    // history.push(`/programs/${programData2.id}`)
    window.history.pushState({}, '', `/programs/${programData2.id}`)
    render(
          <App />
    )

    expect(await screen.findByText(programData2.title)).toBeInTheDocument()
    expect(await screen.findByText(programData2.version)).toBeInTheDocument()
    expect(await screen.findByText(programData2.alternateTitles[0].name)).toBeInTheDocument()
  })

})

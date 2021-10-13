import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { returnJson } from "../testhelpers/ProgramSearchJson"
import userEvent from "@testing-library/user-event"

describe('Program Integration', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('renders pagination nav', async () => {
    const currentPage = 1
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))
    render(<App />)
    // @ts-ignore
    expect(fetch.mock.calls[0][0]).toEqual("http://localhost:3000/programs.json?page=1")
    expect(await screen.findByText(/Page 1/)).toBeInTheDocument()

    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage+1))
    let element = await screen.findByText('Next')
    userEvent.click(element)
    // @ts-ignore
    expect(fetch.mock.calls[1][0]).toEqual("http://localhost:3000/programs.json?page=2")
    expect(await screen.findByText(/Page 2/)).toBeInTheDocument()

    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))
    element = await screen.findByText('Prev')
    userEvent.click(element)
    // @ts-ignore
    expect(fetch.mock.calls[2][0]).toEqual("http://localhost:3000/programs.json?page=1")
    expect(await screen.findByText(/Page 1/)).toBeInTheDocument()
  })

})

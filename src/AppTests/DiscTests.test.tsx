import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { discListingForProgramIdWithNoPackageJson } from '../testhelpers/DiscSearchJson'

describe('Disc Integrations',() => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('performs filter', async () => {
    const programId = '1'
    // @ts-ignore
    fetch.mockResponseOnce(discListingForProgramIdWithNoPackageJson)
    const url = new URL('http://localhost/discs/program')
    url.searchParams.set('programId', programId)
    window.history.pushState({}, '', url)

    render(<App />)

    // @ts-ignore
    console.log(fetch.mock.calls)
    // @ts-ignore
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/discs/with_program/1.json')
    expect(await screen.findByText(/Page 1/)).toBeInTheDocument()
  })

})
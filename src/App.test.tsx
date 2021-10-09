import React from 'react'
import { act, render, screen } from '@testing-library/react'
import App from './App'
import { returnJson, totalPages } from "./testhelpers/ProgramSearchJson";

describe('App', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('renders pagination nav', async () => {
    const currentPage = 1
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    render(<App />)

    const element = await screen.findByText(`Page 1 of ${totalPages}`)
    expect(element).toBeInTheDocument()
  })

})

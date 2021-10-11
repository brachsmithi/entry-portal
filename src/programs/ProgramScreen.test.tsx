import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProgramScreen } from "./ProgramScreen"
import { returnJson, totalPages } from "../testhelpers/ProgramSearchJson"

describe('ProgramScreen', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('opens on 1st page of loaded programs', async () => {
    const currentPage = 1
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    render(<ProgramScreen />)

    const element = await screen.findByText(`Page 1 of ${totalPages}`)
    expect(element).toBeInTheDocument()
  })

})
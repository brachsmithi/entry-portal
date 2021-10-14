import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProgramScreen } from "./ProgramScreen"
import {
  programListing1,
  programListing2,
  programListing3,
  returnJson,
  totalPages
} from "../testhelpers/ProgramSearchJson"

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

    expect(await screen.findByText(`Page 1 of ${ totalPages }`)).toBeInTheDocument()
    expect(await screen.findByText(programListing1.name)).toBeInTheDocument()
    expect(await screen.findByText(programListing2.name)).toBeInTheDocument()
    expect(await screen.findByText(programListing3.name)).toBeInTheDocument()
  })

})
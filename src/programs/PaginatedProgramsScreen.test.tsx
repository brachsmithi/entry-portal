import React from 'react'
import { render, screen } from '@testing-library/react'
import { PaginatedProgramsScreen } from "./PaginatedProgramsScreen"
import {
  programListing1,
  programListing2,
  programListing3,
  returnProgramListingJson,
  totalProgramPages
} from "../testhelpers/ProgramSearchJson"

describe('PaginatedProgramsScreen', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('opens on 1st page of loaded programs', async () => {
    const currentPage = 1
    // @ts-ignore
    fetch.mockResponseOnce(returnProgramListingJson(currentPage))

    render(<PaginatedProgramsScreen />)

    expect(await screen.findByText(`Page 1 of ${ totalProgramPages }`)).toBeInTheDocument()
    expect(await screen.findByText(programListing1.primary)).toBeInTheDocument()
    expect(await screen.findByText(programListing2.primary)).toBeInTheDocument()
    expect(await screen.findByText(programListing3.primary)).toBeInTheDocument()
  })

})
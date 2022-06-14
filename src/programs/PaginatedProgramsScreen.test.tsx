import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { PaginatedProgramsScreen } from './PaginatedProgramsScreen'
import {
  programListing1,
  programListing2,
  programListing3,
  programListing4,
  totalProgramPages,
  returnProgramListingJson,
  returnSearchListingJson
} from '../testhelpers/ProgramSearchJson'
import { ListingData } from '../models/ListingData'

describe('PaginatedProgramsScreen', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('constructs program links correctly', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(returnProgramListingJson())

    await waitFor(() => render(<PaginatedProgramsScreen/>))

    await verifyLink(programListing1)
    await verifyLink(programListing2)
    await verifyLink(programListing3)
    await verifyLink(programListing4)
  })

  it('contains search and nav', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(returnProgramListingJson())

    await waitFor(() => render(<PaginatedProgramsScreen/>))

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(await screen.findByText(`Page 1 of ${ totalProgramPages }`)).toBeInTheDocument()
  })

  it('with no search term asks for everything',  async () => {
    // @ts-ignore
    fetch.mockResponseOnce(returnProgramListingJson())

    await waitFor(() => render(<PaginatedProgramsScreen/>))

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining(''))
  })

  it('fetches based on search term', async () => {
    const searchTerm = "bloop"
    const currentPage = 1
    const nextPage = 2
    const previousPage = 1
    // @ts-ignore
    fetch.mockResponseOnce(returnSearchListingJson(searchTerm, currentPage, nextPage, previousPage))

    await waitFor(() => render(<PaginatedProgramsScreen searchTerm={ searchTerm }/>))

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('search=bloop'))
  })

  async function verifyLink(listing: ListingData) {
    const element = await screen.findByText(listing.primary)
    expect(element.closest('a')).toHaveAttribute('href', `/programs/${listing.id}`)
  }

})
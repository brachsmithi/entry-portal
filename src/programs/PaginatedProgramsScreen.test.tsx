import React from 'react'
import { render, screen } from '@testing-library/react'
import { PaginatedProgramsScreen } from "./PaginatedProgramsScreen"
import {
  programListing1,
  programListing2,
  programListing3, programListing4,
  returnProgramListingJson, returnSearchListingJson, searchListing1, searchListing2, searchListing3,
  totalProgramPages, totalSearchPages
} from "../testhelpers/ProgramSearchJson"
import { ListingData } from "../models/ListingData"

describe('PaginatedProgramsScreen', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('constructs program links correctly', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(returnProgramListingJson())

    render(<PaginatedProgramsScreen />)

    await verifyLink(programListing1)
    await verifyLink(programListing2)
    await verifyLink(programListing3)
    await verifyLink(programListing4)
  })

  describe('with no search term', () => {

    it('opens on 1st page of loaded programs', async () => {
      // @ts-ignore
      fetch.mockResponseOnce(returnProgramListingJson())

      render(<PaginatedProgramsScreen />)

      expect(await screen.findByText(`Page 1 of ${ totalProgramPages }`)).toBeInTheDocument()
      expect(await screen.findByText(programListing1.primary)).toBeInTheDocument()
      expect(await screen.findByText(programListing2.primary)).toBeInTheDocument()
      expect(await screen.findByText(programListing3.primary)).toBeInTheDocument()
      expect(await screen.findByText(programListing4.primary)).toBeInTheDocument()
    })

  })

  describe('with search term', () => {

    it('opens on 1st page of loaded programs', async () => {
      const searchTerm = "bloop"
      const currentPage = 1
      const nextPage = 2
      const previousPage = 1
      // @ts-ignore
      fetch.mockResponseOnce(returnSearchListingJson(searchTerm, currentPage, nextPage, previousPage))

      render(<PaginatedProgramsScreen searchTerm={searchTerm} />)

      expect(fetch).toHaveBeenCalledWith(expect.stringContaining('search=bloop'))
      expect(await screen.findByText(`Page 1 of ${ totalSearchPages }`)).toBeInTheDocument()
      expect(await screen.findByText(searchListing1.primary)).toBeInTheDocument()
      expect(await screen.findByText(searchListing2.primary)).toBeInTheDocument()
      expect(await screen.findByText(searchListing3.primary)).toBeInTheDocument()
    })

  })

  async function verifyLink(listing: ListingData) {
    const element = await screen.findByText(listing.primary)
    expect(element.closest('a')).toHaveAttribute('href', `/programs/${listing.id}`)
  }

})
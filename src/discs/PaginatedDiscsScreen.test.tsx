import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { ListingData } from "../models/ListingData"
import {
  discListingForProgramIdData1,
  discListingForProgramIdData2, discListingForProgramIdJson, discListingForProgramIdWithNoPackageJson
} from '../testhelpers/DiscSearchJson'
import { PaginatedDiscsScreen } from './PaginatedDiscsScreen'

describe('PaginatedDiscsScreen', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('constructs disc links correctly', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(discListingForProgramIdJson)

    await waitFor(() => render(<PaginatedDiscsScreen programId='3' />))

    const links = await screen.findAllByText(discListingForProgramIdData1.primary)
    await verifyLink(links[0], discListingForProgramIdData1)
    await verifyLink(links[1], discListingForProgramIdData2)
  })

  it('contains nav', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(discListingForProgramIdJson)

    await waitFor(() => render(<PaginatedDiscsScreen programId='3' />))

    expect(await screen.findByText('Page 1 of 1')).toBeInTheDocument()
  })

  it('fetches based on program id', async () => {
    const programId = '1'
    // @ts-ignore
    fetch.mockResponseOnce(discListingForProgramIdWithNoPackageJson)

    await waitFor(() => render(<PaginatedDiscsScreen programId={ programId }/>))

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('discs/with_program/1'))
  })

  async function verifyLink(linkElement: HTMLElement, listing: ListingData) {
    expect(linkElement.closest('a')).toHaveAttribute('href', `/discs/${listing.id}`)
  }

})
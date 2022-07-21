import React from 'react'
import { render, screen } from '@testing-library/react'
import { ListingDisplay } from './ListingDisplay'
import { ListingData } from '../../models/ListingData'
import ProgramLinkGenerator from '../../programs/ProgramLinkGenerator'
import DiscLinkGenerator from '../../discs/DiscLinkGenerator'

describe('ProgramListDisplay', () => {

  it('lists given programs', async () => {
    const listings: ListingData[] = [
      {
        id: 236,
        primary: 'Line Item One',
        secondary: ['2001'],
        tertiary: []
      },
      {
        id: 252,
        primary: 'Line Item Two',
        secondary: [],
        tertiary: ['Movie Franchise', '2nd Series']
      },
      {
        id: 634,
        primary: 'Line Item Three',
        secondary: ['1987', 'Full Screen'],
        tertiary: []
      }
    ]
    const linkGenerator = new ProgramLinkGenerator()
    render(<ListingDisplay listings={listings} linkGenerator={linkGenerator}/>)

    expect(screen.queryByText('No listings loaded yet.')).not.toBeInTheDocument()
    await verifyLink(listings[0], linkGenerator.rootPath())
    expect(screen.queryByText('(2001)')).toBeInTheDocument()
    await verifyLink(listings[1], linkGenerator.rootPath())
    expect(screen.queryByText('()')).not.toBeInTheDocument()
    expect(screen.queryByText('Movie Franchise/2nd Series')).toBeInTheDocument()
    await verifyLink(listings[2], linkGenerator.rootPath())
    expect(screen.queryByText('(1987/Full Screen)')).toBeInTheDocument()
  })

  it('shows default text when there is no content', () => {
    render(<ListingDisplay listings={[]} linkGenerator={new DiscLinkGenerator()}/>)

    expect(screen.queryByText('No listings loaded yet.')).toBeInTheDocument()
  })

  async function verifyLink(listing: ListingData, path: string) {
    const element = await screen.findByText(listing.primary)
    expect(element.closest('a')).toHaveAttribute('href', `${path}/${listing.id}`)
  }

})
import React from 'react'
import './ProgramListDisplay.css'
import { ListingData } from "../models/ListingData"

export interface ProgramListDisplayProperties {
  listings: Array<ListingData>
}

export function ProgramListDisplay(props: ProgramListDisplayProperties): JSX.Element {
  function secondaryContent(secondary: string[]) {
    return secondary.length > 0 ? `(${secondary.join('/')})` : ''
  }

  const listingElements = props.listings.map(
      (listing, i) => (
          <div className='listing-entry' key={i}>
            <span className='primary'>{ listing.primary }</span>
            <span className='secondary'>{secondaryContent(listing.secondary)}</span>
          </div>
      )
  )
  return (
      <div className='listings'>
        {listingElements}
      </div>
  )
}

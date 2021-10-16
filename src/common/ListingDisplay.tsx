import React from 'react'
import './ListingDisplay.css'
import { ListingData } from "../models/ListingData"

export interface ListingDisplayProperties {
  listings: Array<ListingData>
}

export function ListingDisplay(props: ListingDisplayProperties): JSX.Element {
  function secondaryContent(secondary: string[]) {
    return secondary.length > 0 ? `(${secondary.join('/')})` : ''
  }

  const listingElements = props.listings.map(
      (listing, i) => (
          <div className='listing-entry' key={i}>
            <span className='primary'>{ listing.primary }</span>
            <span className='secondary'>{secondaryContent(listing.secondary)}</span>
            <span className='tertiary'>{listing.tertiary.join('/')}</span>
          </div>
      )
  )
  return (
      <div className='listings'>
        {listingElements.length === 0 &&
            <div className='no-listings'>No listings loaded yet.</div>
        }
        {listingElements.length > 0 && listingElements}
      </div>
  )
}
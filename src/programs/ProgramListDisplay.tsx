import React from 'react'
import { ListingData } from "../models/ListingData"

export interface ProgramListDisplayProperties {
  listings: Array<ListingData>
}

export function ProgramListDisplay(props: ProgramListDisplayProperties): JSX.Element {
  const listingElements = props.listings.map(
      (listing, i) => (
          <div className='listing' key={i}>
            <span className='primary'>{ listing.primary }</span>
            <span className='secondary'>{ listing.secondary }</span>
          </div>
      )
  )
  return (
      <div>
        {listingElements}
      </div>
  )
}

import React from 'react'
import { ListingData } from "../models/ListingData"

export interface ProgramListDisplayProperties {
  listings: Array<ListingData>
}

export function ProgramListDisplay(props: ProgramListDisplayProperties): JSX.Element {
  const listingElements = props.listings.map(
      (listing, i) => <div key={i}>{ listing.primary }</div>)
  return (
      <div>
        {listingElements}
      </div>
  )
}

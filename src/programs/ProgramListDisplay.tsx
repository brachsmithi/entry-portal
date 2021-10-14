import React from 'react'

export interface ProgramListDisplayProperties {
  listings: Array<any>
}

export function ProgramListDisplay(props: ProgramListDisplayProperties): JSX.Element {
  const listingElements = props.listings.map(
      (listing, i) => <div key={i}>{ listing.name }</div>)
  return (
      <div>
        {listingElements}
      </div>
  )
}

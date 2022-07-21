import React from 'react'
import './ListingDisplay.css'
import { ListingData } from '../../models/ListingData'
import LinkGenerator from '../nav/LinkGenerator'

export interface ListingDisplayProperties {
  listings: Array<ListingData>
  linkGenerator: LinkGenerator
}

export function ListingDisplay(props: ListingDisplayProperties): JSX.Element {
  function secondaryContent(secondary: string[]) {
    return secondary.length > 0 ? `(${secondary.join('/')})` : ''
  }

  const listingElements = props.listings.map(
      (listing, i) => (
          <div className='listing-entry' key={i}>
            <a href={ props.linkGenerator.detailPath(listing.id)} className='primary'>{ listing.primary }</a>
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

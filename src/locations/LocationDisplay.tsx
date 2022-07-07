import LocationData, { LocationDiscData } from '../models/LocationData'
import React from 'react'

interface LocationDisplayProperties {
  location: LocationData
}

export function LocationDisplay(props: LocationDisplayProperties) {
  const discDiv = (discs: LocationDiscData[]) => {
    const discElements = (discs: LocationDiscData[]) => {
      return discs.map((disc, index) => {
        return (
            <div
                key={index}
                className='disc'
            >
              <a href={`/discs/${disc.id}`}>{disc.displayName}</a>
            </div>)
      })
    }
    return (
        <div className='location-discs'>
          {discElements(discs)}
        </div>
    )
  }
  return (
      <div className='location-display'>
        <div className='header'>
          <span className='name'>{ props.location.name }</span>
          { props.location.filled &&
            <span className='filled'>FILLED</span>
          }
        </div>
        { discDiv(props.location.discs)}
      </div>
  )
}
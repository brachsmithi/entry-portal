import LocationData, { LocationDiscData } from '../models/LocationData'
import React from 'react'

interface LocationDisplayProperties {
  location: LocationData
}

export function LocationDisplay(props: LocationDisplayProperties) {
  const discDiv = (discs: LocationDiscData[]) => {
    const discElements = (discs: LocationDiscData[]) => {
      return discs.map((disc, index) => {
        return <div key={index} className='disc'>{disc.displayName}</div>
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
        </div>
        { discDiv(props.location.discs)}
      </div>
  )
}
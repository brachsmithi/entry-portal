import DiscData from '../models/DiscData'
import React from 'react'

interface DiscDisplayProperties {
  disc: DiscData
}

export function DiscDisplay(props: DiscDisplayProperties) {
  return (
      <div className='disc-display'>
        <div className='header'>
          <span className='name'>{props.disc.name}</span>
        </div>
      </div>
  )
}
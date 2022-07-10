import PackageData, { PackageDisc } from '../models/PackageData'
import React from 'react'
import './PackageDisplay.css'

interface PackageDisplayProperties {
  package: PackageData
}

export function PackageDisplay(props: PackageDisplayProperties) {
  const discCollectionElement = (discCollection: PackageDisc[]) => {
    const discElements = (discs: PackageDisc[]) => {
      return discs.map((disc, index) => {
        return (
            <div className='disc' key={index}>{disc.name}</div>
        )
      })
    }
    return (
        <div className='discs'>
          { discElements(discCollection) }
        </div>
    )
  }
  console.log(props.package)
  return (
      <div className='package-display'>
        <div className='header'>
          <span className='name'>{ props.package.name }</span>
        </div>
        {props.package.discs.length > 0 && discCollectionElement(props.package.discs)}
      </div>
  )
}
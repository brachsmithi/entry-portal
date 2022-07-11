import PackageData, { PackageContainedPackage, PackageDisc, PackageDiscProgram } from '../models/PackageData'
import React from 'react'
import './PackageDisplay.css'

interface PackageDisplayProperties {
  package: PackageData
}

export function PackageDisplay(props: PackageDisplayProperties) {
  const containedPackagesElement = (containedPackages: PackageContainedPackage[]) => {
    const packageElements = (packages: PackageContainedPackage[]) => {
      return packages.map((pkg, index) => {
        return (
            <div className='package' key={index}>{pkg.name}</div>
        )
      })
    }
    return (
        <div className='packages'>
          { packageElements(containedPackages) }
        </div>
    )
  }
  const discCollectionElement = (discCollection: PackageDisc[]) => {
    const discElements = (discs: PackageDisc[]) => {
      return discs.map((disc, index) => {
        const createProgramCollectionElement = (programs: PackageDiscProgram[]) => {
          const programElements = programs.map((program: PackageDiscProgram, index: number) => {
            return <div className='program' key={index}>
              <span className='name'>{program.name}</span>
              <span className='version'>{program.version}</span>
            </div>
          })
          return (
            <div className='programs'>
              { programElements }
            </div>
          )
        }
        return (
            <div className='disc' key={index}>
              <div className='header'>
                <span className='name'>{disc.name}</span>
                <span className='format'>{disc.format}</span>
              </div>
              { createProgramCollectionElement(disc.programs) }
            </div>
        )
      })
    }
    return (
        <div className='discs'>
          { discElements(discCollection) }
        </div>
    )
  }
  return (
      <div className='package-display'>
        <div className='header'>
          <span className='name'>{ props.package.name }</span>
        </div>
        {props.package.containedPackages.length > 0 && containedPackagesElement(props.package.containedPackages)}
        {props.package.discs.length > 0 && discCollectionElement(props.package.discs)}
      </div>
  )
}
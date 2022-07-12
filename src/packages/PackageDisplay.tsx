import PackageData, { PackageContainedPackage, PackageDisc, PackageDiscProgram } from '../models/PackageData'
import React from 'react'
import './PackageDisplay.css'
import SequencedContents, { SequencedElement } from '../common/sequence/SequencedContents'

interface PackageDisplayProperties {
  package: PackageData
}

export function PackageDisplay(props: PackageDisplayProperties) {
  const packageElements = (packages: PackageContainedPackage[]) => {
    return packages.map((pkg): SequencedElement => {
      return {
        sequence: pkg.sequence,
        className: 'package',
        element: (
            <div>
              <a href={`/packages/${pkg.id}`}>{pkg.name}</a>
            </div>
        )
      }
    })
  }
  const discElements = (discs: PackageDisc[]) => {
    return discs.map((disc): SequencedElement => {
      const createProgramCollectionElement = (programs: PackageDiscProgram[]) => {
        const programElements = programs.map((program: PackageDiscProgram, index: number) => {
          return <div className='program' key={index}>
            <span className='name'><a href={`/programs/${program.id}`}>{program.name}</a></span>
            <span className='version'>{program.version}</span>
          </div>
        })
        return (
          <div className='programs'>
            { programElements }
          </div>
        )
      }
      return {
        sequence: disc.sequence,
        className: 'disc',
        element: (
            <div >
              <div className='header'>
                <span className='name'><a href={ `/discs/${ disc.id }` }>{ disc.name }</a></span>
                <span className='format'>{ disc.format }</span>
              </div>
              { createProgramCollectionElement(disc.programs) }
            </div>
        )
      }
    })
  }
  const sequencedContents = (pkg: PackageData) => {
    const elements = []
    if (pkg.containedPackages.length > 0) {
      elements.push(...packageElements(pkg.containedPackages))
    }
    if (pkg.discs.length > 0) {
      elements.push(...discElements(pkg.discs))
    }
    return elements
  }
  return (
      <div className='package-display'>
        <div className='header'>
          <span className='name'>{ props.package.name }</span>
        </div>
        { (props.package.containedPackages.length > 0 || props.package.discs.length > 0) &&
          <SequencedContents sequencedElements={sequencedContents(props.package)}/>
        }
      </div>
  )
}
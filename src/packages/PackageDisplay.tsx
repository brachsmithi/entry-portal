import PackageData, { PackageContainedPackage, PackageDisc, PackageDiscProgram } from '../models/PackageData'
import React from 'react'
import './PackageDisplay.css'
import SequencedContents, { SequencedElement } from '../common/sequence/SequencedContents'
import LinkGenerator from '../common/nav/LinkGenerator'
import ProgramLinkGenerator from '../programs/ProgramLinkGenerator'
import DiscLinkGenerator from '../discs/DiscLinkGenerator'
import PackageLinkGenerator from './PackageLinkGenerator'

interface PackageDisplayProperties {
  package: PackageData
}

export function PackageDisplay(props: PackageDisplayProperties) {
  const packageElements = (packages: PackageContainedPackage[]) => {
    const linkGenerator: LinkGenerator = new PackageLinkGenerator()
    return packages.map((pkg): SequencedElement => {
      return {
        sequence: pkg.sequence,
        className: 'package',
        element: (
            <div>
              <a href={linkGenerator.detailPath(pkg.id)}>{pkg.name}</a>
            </div>
        )
      }
    })
  }
  const discElements = (discs: PackageDisc[]) => {
    return discs.map((disc): SequencedElement => {
      const createProgramCollectionElement = (programs: PackageDiscProgram[]) => {
        const programElements = programs.map((program: PackageDiscProgram, index: number) => {
          const linkGenerator: LinkGenerator = new ProgramLinkGenerator()
          return <div className='program' key={index}>
            <span className='name'><a href={linkGenerator.detailPath(program.id)}>{program.name}</a></span>
            <span className='version'>{program.version}</span>
          </div>
        })
        return (
          <div className='programs'>
            { programElements }
          </div>
        )
      }
      const linkGenerator: LinkGenerator = new DiscLinkGenerator()
      return {
        sequence: disc.sequence,
        className: 'disc',
        element: (
            <div >
              <div className='header'>
                <span className='name'><a href={ linkGenerator.detailPath(disc.id) }>{ disc.name }</a></span>
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
import DiscData, { DiscLocation, DiscProgram, DiscSeries } from '../models/DiscData'
import React from 'react'
import SequencedContents, { SequencedElement } from '../common/sequence/SequencedContents'
import './DiscDisplay.css'

interface DiscDisplayProperties {
  disc: DiscData
}

export function DiscDisplay(props: DiscDisplayProperties) {
  const programsElements = (programArray: DiscProgram[]): SequencedElement[] => {
    return programArray.map((program: DiscProgram): SequencedElement => {
      return {
        sequence: program.sequence,
        className: 'program',
        element: (
          <a href={ `/programs/${ program.id }` }>{ program.title }</a>
        )
      }
    })
  }
  const seriesElements = (seriesArray: DiscSeries[]) => {
    return seriesArray.map((series: DiscSeries) => (
        <div key={ series.id } className='series'><a href={ `/series/${ series.id }` }>{ series.name }</a></div>
    ))
  }
  const locationElement = (location: DiscLocation) => {
    return (<a href={ `/locations/${ location.id }` }>{location.name}</a>)
  }
  return (
      <div className='disc-display'>
        <div className='header'>
          <span className='name'>{ props.disc.name }</span>
          <div className='attributes'>
            <span className='format'>{ props.disc.format }</span>
            <span className='state'>{ props.disc.state }</span>
            <span className='location'>{ locationElement(props.disc.location) }</span>
          </div>
        </div>
        <div className='package'>
          { props.disc.package.name }
        </div>
        <div className='series-list'>
          { seriesElements(props.disc.series) }
        </div>
        { props.disc.programs.length > 0 &&
            <SequencedContents sequencedElements={programsElements(props.disc.programs)} /> }
      </div>
  )
}
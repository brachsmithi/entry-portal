import DiscData, { DiscProgram, DiscSeries } from '../models/DiscData'
import React from 'react'
import './DiscDisplay.css'
import SequencedContents, { SequencedElement } from "../common/SequencedContents";

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
  return (
      <div className='disc-display'>
        <div className='header'>
          <span className='name'>{ props.disc.name }</span>
          <div className='attributes'>
            <span className='format'>{ props.disc.format }</span>
            <span className='state'>{ props.disc.state }</span>
            <span className='location'>{ props.disc.location.name }</span>
          </div>
        </div>
        <div className='package'>
          { props.disc.package.name }
        </div>
        <div className='series-list'>
          { seriesElements(props.disc.series) }
        </div>
        <SequencedContents sequencedElements={programsElements(props.disc.programs)} />
      </div>
  )
}
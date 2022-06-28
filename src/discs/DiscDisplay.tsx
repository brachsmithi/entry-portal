import DiscData, { DiscProgram } from '../models/DiscData'
import React from 'react'

interface DiscDisplayProperties {
  disc: DiscData
}

export function DiscDisplay(props: DiscDisplayProperties) {
  const programsElements = (programArray: DiscProgram[]) => {
    return programArray.map((program: DiscProgram) => (
        <div key={ program.id } className='program'><a href={ `/programs/${ program.id }` }>{ program.title }</a></div>
    ))
  }
  return (
      <div className='disc-display'>
        <div className='header'>
          <span className='name'>{ props.disc.name }</span>
          <div className='attributes'>
            <span className='format'>{ props.disc.format }</span>
            <span className='format'>{ props.disc.state }</span>
            <span className='location'>{ props.disc.location.name }</span>
          </div>
        </div>
        <div className='package'>
          { props.disc.package.name }
        </div>
        <div className='content-programs'>
          { programsElements(props.disc.programs)}
        </div>
      </div>
  )
}
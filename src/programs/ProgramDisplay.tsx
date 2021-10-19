import React from 'react'
import ProgramData from "../models/ProgramData";
import { formatDuration } from "../common/DisplayFormatters"
import Person from "../models/Person"
import Alias from "../models/Alias";

export interface ProgramDisplayProperties {
  program: ProgramData
}

export function ProgramDisplay(props: ProgramDisplayProperties): JSX.Element {
  const peopleElements = (personArray: Array<Person>) => {
    function personElement(person: any, index: number) {
      return (
          <div key={index} className='person'>
            <span className='main'>
              {person.name}
            </span>
            <span className='alias'>
              {person.aliases.map((alias: Alias) => alias.name).join('/')}
            </span>
          </div>
      )
    }

    return personArray.map((person, index) => {
      return personElement(person, index)
    })
  }

  const seriesElements = (seriesArray: Array<string>) => {
    return seriesArray.join('/')
  }
  return (
      <div className='program-display'>
        <div className='title'>{props.program.title}</div>
        <div className='year'>{props.program.year}</div>
        <div className='version'>{props.program.version}</div>
        <div className='duration'>{formatDuration(props.program.lengthInMinutes)}</div>
        <div className='people'>{peopleElements(props.program.people)}</div>
        <div className='series'>{seriesElements(props.program.series)}</div>
      </div>
  )
}
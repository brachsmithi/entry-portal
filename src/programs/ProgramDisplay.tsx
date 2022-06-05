import React from 'react'
import "./ProgramDisplay.css"
import ProgramData from "../models/ProgramData"
import { formatDuration } from "../common/DisplayFormatters"
import Person from "../models/Person"
import Alias from "../models/Alias"
import AlternateTitle from "../models/AlternateTitle"

export interface ProgramDisplayProperties {
  program: ProgramData
}

export function ProgramDisplay(props: ProgramDisplayProperties): JSX.Element {
  const peopleElements = (personArray: Array<Person>) => {
    function personElement(person: any, index: number) {
      return (
          <div key={index} className='person'>
            <span className='main'>
              <a href={ `/persons/${person.id}` }>{person.name}</a>
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

  const alternateTitlesElements = (alternateTitlesArray: Array<AlternateTitle>) => {
    return alternateTitlesArray.map((at) => {
      return at.name
    }).join('/')
  }

  return (
      <div className='program-display'>
        <div className='header'>
          <span className='title'>{props.program.title}</span>
          <span className='year'>{props.program.year}</span>
        </div>
        <div className='alternate-titles'>{alternateTitlesElements(props.program.alternateTitles)}</div>
        <div className='version'>{props.program.version}</div>

        <div className='duration'>{formatDuration(props.program.lengthInMinutes)}</div>
        <div className='people'>{peopleElements(props.program.people)}</div>
        <div className='series'>{seriesElements(props.program.series)}</div>
      </div>
  )
}
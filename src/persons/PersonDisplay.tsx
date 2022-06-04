import PersonData, { PersonProgramData } from '../models/PersonData'
import React from 'react'
import './PersonDisplay.css'

interface PersonDisplayProperties {
  person: PersonData
}

export function PersonDisplay(props: PersonDisplayProperties): JSX.Element {
  const programsElements = (programArray: PersonProgramData[]) => {
    const programElement = (program: PersonProgramData, index: number) => {
      return (
          <div key={index} className='program'>
            <div className='main'>
              <span className='title'>
                {program.title}
              </span>
              <span className='year'>
                {program.year}
              </span>
            </div>
            <div className='auxiliary'>
              <div className='alternate-titles'>
                {program.alternateTitles.join('/')}
              </div>
              <div className='version'>
                {program.version}
              </div>
              <div className='series'>
                {program.series.join('/')}
             </div>
            </div>
          </div>
      )
    }
    return programArray.map((program, index) => {
      return programElement(program, index)
    })
  }
  const aliasesElements = (aliasesArray: string[]) => {
    return aliasesArray.join('/')
  }
  return (
      <div className='person-display'>
        <div className='header'>
          <span className='name'>{props.person.name}</span>
        </div>
        <div className='aliases'>{aliasesElements(props.person.aliases)}</div>
        <div className='programs'>{programsElements(props.person.programs)}</div>
      </div>
  )
}
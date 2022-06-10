import PersonData, { PersonProgramData } from '../models/PersonData'
import React from 'react'
import './PersonDisplay.css'
import Series from "../models/Series";

interface PersonDisplayProperties {
  person: PersonData
}

export function PersonDisplay(props: PersonDisplayProperties): JSX.Element {
  const programsElements = (programArray: PersonProgramData[]) => {
    const seriesElements = (seriesArray: Series[]) => {
      const seriesElement = (series: Series, index: number) => {
        return (
            <>
              {
                index > 0 &&
                <span className='series-separator'>/</span>
              }
              <span className='series'>
                <a href={`/series/${series.id}`}>{series.name}</a>
              </span>
            </>
        )
      }
      return (
          <>{ seriesArray.map((series, index) => seriesElement(series, index)) }</>
      )
    }
    const programElement = (program: PersonProgramData, index: number) => {
      return (
          <div key={index} className='program'>
            <div className='main'>
              <span className='title'>
                <a href={`/programs/${program.id}`}>{program.title}</a>
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
              <div className='series-list'>
                {seriesElements(program.series)}
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
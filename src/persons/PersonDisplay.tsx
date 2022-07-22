import PersonData, { PersonProgramData } from '../models/PersonData'
import React from 'react'
import './PersonDisplay.css'
import Series from '../models/Series'
import LinkGenerator from '../common/nav/LinkGenerator'
import ProgramLinkGenerator from '../programs/ProgramLinkGenerator'
import SeriesLinkGenerator from '../series/SeriesLinkGenerator'

interface PersonDisplayProperties {
  person: PersonData
}

export function PersonDisplay(props: PersonDisplayProperties): JSX.Element {
  const programsElements = (programArray: PersonProgramData[]) => {
    const seriesElements = (seriesArray: Series[]) => {
      const linkGenerator: LinkGenerator = new SeriesLinkGenerator()
      const seriesElement = (series: Series, index: number) => {
        return (
            <span key={index} className='series'>
              <a href={linkGenerator.detailPath(series.id)}>{series.name}</a>
            </span>
        )
      }
      return (
          <>{ seriesArray.map((series, index) => seriesElement(series, index)) }</>
      )
    }
    const programElement = (program: PersonProgramData, index: number) => {
      const linkGenerator: LinkGenerator = new ProgramLinkGenerator()
      return (
          <div key={index} className='program'>
            <div className='main'>
              <span className='title'>
                <a href={linkGenerator.detailPath(program.id)}>{program.title}</a>
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
import React from 'react'
import "./ProgramDisplay.css"
import ProgramData from "../models/ProgramData"
import { formatDuration } from "../common/format/DisplayFormatters"
import Person from "../models/Person"
import Alias from "../models/Alias"
import AlternateTitle from "../models/AlternateTitle"
import Series from '../models/Series'
import LinkGenerator from '../common/nav/LinkGenerator'
import PersonLinkGenerator from './PersonLinkGenerator'
import SeriesLinkGenerator from '../series/SeriesLinkGenerator'
import DiscLinkGenerator from '../discs/DiscLinkGenerator'
import { FilterType } from '../services/FilterType'

export interface ProgramDisplayProperties {
  program: ProgramData
}

export function ProgramDisplay(props: ProgramDisplayProperties): JSX.Element {
  const peopleElements = (personArray: Person[]) => {
    const linkGenerator: LinkGenerator = new PersonLinkGenerator()
    function personElement(person: Person, index: number) {
      return (
          <div key={index} className='person'>
            <span className='main'>
              <a href={ linkGenerator.detailPath(person.id) }>{person.name}</a>
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

  const seriesElements = (seriesArray: Series[]) => {
    const linkGenerator: LinkGenerator = new SeriesLinkGenerator()
    const seriesElement = (series: Series, index: number) => {
      return (
          <div key={index} className='series'>
            <a href={ linkGenerator.detailPath(series.id) }>{series.name}</a>
          </div>
      )
    }
    return seriesArray.map((series, index) => {
      return seriesElement(series, index)
    })
  }

  const alternateTitlesElements = (alternateTitlesArray: Array<AlternateTitle>) => {
    return alternateTitlesArray.map((at) => {
      return at.name
    }).join('/')
  }

  const discLinkGenerator: LinkGenerator = new DiscLinkGenerator()
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
        <div className='series-list'>{seriesElements(props.program.series)}</div>
        <div className='filter-search'>
          <a className='listing-link' href={ discLinkGenerator.filterPath(FilterType.Program, props.program.id) }>Discs</a>
        </div>
      </div>
  )
}
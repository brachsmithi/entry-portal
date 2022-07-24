import React from 'react'
import "./ProgramDisplay.css"
import ProgramData from "../models/ProgramData"
import { formatDuration } from "../common/format/DisplayFormatters"
import Person from "../models/Person"
import Alias from "../models/Alias"
import AlternateTitle from "../models/AlternateTitle"
import Series from '../models/Series'
import { FilterType } from '../services/FilterType'
import { detailPathFor, filterPathFor } from '../registries/LinkGeneratorRegistry'
import { ModelType } from '../models/ModelType'

export interface ProgramDisplayProperties {
  program: ProgramData
}

export function ProgramDisplay(props: ProgramDisplayProperties): JSX.Element {
  const peopleElements = (personArray: Person[]) => {
    function personElement(person: Person, index: number) {
      return (
          <div key={index} className='person'>
            <span className='main'>
              <a href={ detailPathFor(ModelType.Person, person.id) }>{person.name}</a>
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
    const seriesElement = (series: Series, index: number) => {
      return (
          <div key={index} className='series'>
            <a href={ detailPathFor(ModelType.Series, series.id) }>{series.name}</a>
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
          <a
              className='listing-link'
              href={ filterPathFor(ModelType.Disc, FilterType.Program, props.program.id) }
          >Discs</a>
        </div>
      </div>
  )
}
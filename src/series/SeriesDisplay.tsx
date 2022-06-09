import React from 'react'
import './SeriesDisplay.css'
import SeriesData, {
  SeriesContainedSeries,
  SeriesDiscData,
  SeriesPackageData,
  SeriesProgramData, SeriesWrapperSeries
} from '../models/SeriesData'
import SequencedItem from "../common/SequencedItem";

interface SeriesDisplayProperties {
  series: SeriesData
}

export function SeriesDisplay(props: SeriesDisplayProperties): JSX.Element {
  const programsElements = (programArray: SeriesProgramData[]) => {
    const programElement = (program: SeriesProgramData) => {
      return (
          <SequencedItem className='program' sequence={program.sequence}>
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
            </div>
          </SequencedItem>
      )
    }
    return programArray.map((program) => {
      return programElement(program)
    })
  }
  const packagesElements = (packagesArray: SeriesPackageData[]) => {
    const packageElement = (packageData: SeriesPackageData) => {
      return (
          <SequencedItem className='package' sequence={packageData.sequence}>
            <span className='name'>{packageData.name}</span>
          </SequencedItem>
      )
    }
    return packagesArray.map((packageData) => {
      return packageElement(packageData)
    })
  }
  const discsElements = (discsArray: SeriesDiscData[]) => {
    const discElement = (disc: SeriesDiscData) => {
      return (
          <SequencedItem className='disc' sequence={disc.sequence}>
            <span className='name'>{disc.name}</span>
          </SequencedItem>
      )
    }
    return discsArray.map((disc) => {
      return discElement(disc)
    })
  }
  const containedSeriesElements = (containedSeriesArray: SeriesContainedSeries[]) => {
    const containedSeriesElement = (containedSeries: SeriesContainedSeries) => {
      return (
          <SequencedItem className='contained-series' sequence={containedSeries.sequence}>
              <span className='name'>
                <a href={`/series/${containedSeries.id}`}>{containedSeries.name}</a>
              </span>
          </SequencedItem>
      )
    }
    return containedSeriesArray.map((containedSeries) => {
      return containedSeriesElement(containedSeries)
    })
  }
  const wrapperSeriesElements = (wrapperSeriesArray: SeriesWrapperSeries[]) => {
    const wrapperSeriesElement = (wrapperSeries: SeriesWrapperSeries) => {
      return (
          <div className='wrapper-series'>
            <a href={`/series/${wrapperSeries.id}`}>{wrapperSeries.name}</a>
          </div>
      )
    }
    return wrapperSeriesArray.map((wrapperSeries) => {
      return wrapperSeriesElement(wrapperSeries)
    })
  }
  return (
      <div className='series-display'>
        <div className='header'>
          <span className='name'>{props.series.name}</span>
        </div>
        <div className='sequenced-contents'>
          { programsElements(props.series.programs) }
          { packagesElements(props.series.packages) }
          { discsElements(props.series.discs) }
          { containedSeriesElements(props.series.containedSeries) }
        </div>
        <div className='wrapper-series-display'>
          { wrapperSeriesElements(props.series.wrapperSeries) }
        </div>
      </div>
  )
}
import React from 'react'
import './SeriesDisplay.css'
import SeriesData, {
  SeriesContainedSeries,
  SeriesDiscData,
  SeriesPackageData,
  SeriesProgramData, SeriesWrapperSeries
} from '../models/SeriesData'
import SequencedContents, { SequencedElement } from '../common/sequence/SequencedContents'
import LinkGenerator from '../common/nav/LinkGenerator'
import ProgramLinkGenerator from '../programs/ProgramLinkGenerator'
import SeriesLinkGenerator from './SeriesLinkGenerator'

interface SeriesDisplayProperties {
  series: SeriesData
}

export function SeriesDisplay(props: SeriesDisplayProperties): JSX.Element {
  const programsElements = (programArray: SeriesProgramData[]): SequencedElement[] => {
    const linkGenerator: LinkGenerator = new ProgramLinkGenerator()
    const programElement = (program: SeriesProgramData): SequencedElement => {
      return {
        sequence: program.sequence,
        className: 'program',
        element: (
            <>
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
               </div>
            </>
        )
      }
    }
    return programArray.map((program) => {
      return programElement(program)
    })
  }
  const packagesElements = (packagesArray: SeriesPackageData[]): SequencedElement[] => {
    const packageElement = (packageData: SeriesPackageData): SequencedElement => {
      return {
        sequence: packageData.sequence,
        className: 'package',
        element: (
          <span className='name'>{ packageData.name }</span>
        )
      }
    }
    return packagesArray.map((packageData) => {
      return packageElement(packageData)
    })
  }
  const discsElements = (discsArray: SeriesDiscData[]): SequencedElement[] => {
    const discElement = (disc: SeriesDiscData): SequencedElement => {
      return {
        sequence: disc.sequence,
        className: 'disc',
        element: (
          <span className='name'>{ disc.name }</span>
        )
      }
    }
    return discsArray.map((disc) => {
      return discElement(disc)
    })
  }
  const containedSeriesElements = (containedSeriesArray: SeriesContainedSeries[]): SequencedElement[] => {
    const linkGenerator: LinkGenerator = new SeriesLinkGenerator()
    const containedSeriesElement = (containedSeries: SeriesContainedSeries): SequencedElement => {
      return {
        sequence: containedSeries.sequence,
        className: 'contained-series',
        element: (
          <span className='name'>
            <a href={ linkGenerator.detailPath(containedSeries.id) }>{ containedSeries.name }</a>
          </span>
        )
      }
    }
    return containedSeriesArray.map((containedSeries) => {
      return containedSeriesElement(containedSeries)
    })
  }
  const wrapperSeriesElements = (wrapperSeriesArray: SeriesWrapperSeries[]) => {
    const linkGenerator = new SeriesLinkGenerator()
    const wrapperSeriesElement = (wrapperSeries: SeriesWrapperSeries, index: number) => {
      return (
          <div key={index}  className='wrapper-series'>
            <a href={ linkGenerator.detailPath(wrapperSeries.id) }>{wrapperSeries.name}</a>
          </div>
      )
    }
    return wrapperSeriesArray.map((wrapperSeries, index) => {
      return wrapperSeriesElement(wrapperSeries, index)
    })
  }

  const sequencedElements: SequencedElement[] = []
  sequencedElements.push(...programsElements(props.series.programs))
  sequencedElements.push(...packagesElements(props.series.packages))
  sequencedElements.push(...discsElements(props.series.discs))
  sequencedElements.push(...containedSeriesElements(props.series.containedSeries))
  return (
      <div className='series-display'>
        <div className='header'>
          <span className='name'>{props.series.name}</span>
        </div>
        <SequencedContents sequencedElements={sequencedElements}/>
        <div className='wrapper-series-display'>
          { wrapperSeriesElements(props.series.wrapperSeries) }
        </div>
      </div>
  )
}
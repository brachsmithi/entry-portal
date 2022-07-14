import LocationData, { LocationDiscData } from '../models/LocationData'
import React from 'react'
import './LocationDisplay.css'
import { LoadingPlaceholder } from '../common/lazy/LoadingPlaceholder'
import { loadSortableDisc } from '../services/DiscSearchService'

interface LocationDisplayProperties {
  location: LocationData
}

export function LocationDisplay(props: LocationDisplayProperties) {
  const discDiv = (discs: LocationDiscData[]): JSX.Element => {
    const discElements = (discs: LocationDiscData[]) => {
      const loadDisc = (id: number, elKey: number): Promise<JSX.Element> => {
        return loadSortableDisc(id).then((response) => {
          return (
              <div
                key={elKey}
                data-index={elKey}
                className='disc'
              >
                <a className='name' href={`/discs/${id}`}>{response.data!.displayTitle}</a>
                {response.data?.package &&
                    <a className='package' href={`/packages/${response.data.package?.id}`}>{response.data.package?.name}</a>
                }
                {response.data?.series &&
                    <a className='series' href={`/series/${response.data.series?.id}`}>{response.data.series?.name}</a>
                }
              </div>
          )
        })
      }
      return discs.map((disc, index) => {
        return (
            <LoadingPlaceholder
                id={disc.id}
                key={index}
                elKey={index}
                loader={loadDisc}
            />
        )
      })
    }
    return (
        <div className='location-discs'>
          {discElements(discs)}
        </div>
    )
  }
  return (
      <div className='location-display'>
        <div className='header'>
          <span className='name'>{ props.location.name }</span>
          { props.location.filled &&
            <span className='filled'>FILLED</span>
          }
        </div>
        { discDiv(props.location.discs)}
      </div>
  )
}
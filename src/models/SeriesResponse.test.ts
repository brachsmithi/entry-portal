import { seriesWithProgramsData } from '../testhelpers/SeriesJson'
import SeriesData, { emptySeriesData } from './SeriesData'
import SeriesResponse from './SeriesResponse'

describe('SeriesResponse', () => {

  it ('holds series data', () => {
    const series: SeriesData = seriesWithProgramsData
    const response = new SeriesResponse({data: series})
    expect(response.isError()).toBeFalsy()
    expect(response?.seriesData).toEqual(series)
  })

  it ('holds error', () => {
    const err = 'i dunno, just an object'
    const response = new SeriesResponse({error: err})
    expect(response.isError()).toBeTruthy()
    expect(response.error).toEqual(err)
    expect(response.seriesData).toEqual(emptySeriesData)
  })

})
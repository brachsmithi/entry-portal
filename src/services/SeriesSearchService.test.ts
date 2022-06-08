import {
  seriesWithPackagesData,
  seriesWithPackagesJson,
  seriesWithProgramsData,
  seriesWithProgramsJson
} from '../testhelpers/SeriesJson'
import { loadSeriesDetails } from './SeriesSearchService'
import SeriesData from '../models/SeriesData'

describe('SeriesSearchService', () => {

  describe('loadSeriesDetails', () => {

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    it('correctly loads series with programs', async () => {
      await expectLoadSeriesDetailsToLoad(seriesWithProgramsJson, seriesWithProgramsData)
    })

    it('correctly loads series with packages', async () => {
      await expectLoadSeriesDetailsToLoad(seriesWithPackagesJson, seriesWithPackagesData)
    })

    async function expectLoadSeriesDetailsToLoad(json: string, expectedData: SeriesData) {
      // @ts-ignore
      fetch.mockResponseOnce(json)

      const response = await loadSeriesDetails(expectedData.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/series/${ expectedData.id }.json`)
      expect(response.seriesData).toEqual(expectedData)
    }

  })

})
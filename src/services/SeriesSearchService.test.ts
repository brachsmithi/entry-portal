import { seriesWithProgramsData, seriesWithProgramsJson } from '../testhelpers/SeriesJson'
import { loadSeriesDetails } from "./SeriesSearchService";

describe('SeriesSearchService', () => {

  describe('loadSeriesDetails', () => {

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    it('loads the requested series from local service', async () => {
      // @ts-ignore
      fetch.mockResponseOnce(seriesWithProgramsJson)

      const response = await loadSeriesDetails(seriesWithProgramsData.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/series/${seriesWithProgramsData.id}.json`)
      expect(response.seriesData).toEqual(seriesWithProgramsData)
    })

  })

})
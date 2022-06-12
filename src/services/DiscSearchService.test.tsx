import {
  discListingForProgramIdJson,
  discListingForProgramIdData1,
  discListingForProgramIdData2, discListingForProgramIdWithNoPackageJson, discListingForProgramIdWithNoPackageData
} from '../testhelpers/DiscSearchJson'
import { defaultPaginationMetadata } from '../models/PaginationMetadata'
import { loadDiscListingsForProgram } from './DiscSearchService'

describe('DiscSearchService', () => {

  describe('loadDiscListingsForProgram', () => {

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    it('loads paginated results from backend', async () => {
      // @ts-ignore
      fetch.mockResponseOnce(discListingForProgramIdJson)

      const response = await loadDiscListingsForProgram(3)

      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/discs/with_program/3.json')
      expect(response.paginatedData).toEqual({
        data: [
          discListingForProgramIdData1,
          discListingForProgramIdData2
        ],
        paginationMetadata: defaultPaginationMetadata
      })
    })

    it('handles missing package data', async () => {
      // @ts-ignore
      fetch.mockResponseOnce(discListingForProgramIdWithNoPackageJson)

      const response = await loadDiscListingsForProgram(1)

      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/discs/with_program/1.json')
      expect(response.paginatedData).toEqual({
        data: [
          discListingForProgramIdWithNoPackageData,
        ],
        paginationMetadata: defaultPaginationMetadata
      })
    })

  })

})
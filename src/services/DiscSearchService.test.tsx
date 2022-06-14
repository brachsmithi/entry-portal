import {
  discListingForProgramIdJson,
  discListingForProgramIdData1,
  discListingForProgramIdData2, discListingForProgramIdWithNoPackageJson, discListingForProgramIdWithNoPackageData
} from '../testhelpers/DiscSearchJson'
import { defaultPaginationMetadata } from '../models/PaginationMetadata'
import { loadFilteredDiscListings } from './DiscSearchService'

describe('DiscSearchService', () => {

  describe('loadFilteredDiscListings', () => {

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    describe('with program', () => {

      const key = 'program'

      it('loads paginated results from backend', async () => {
        // @ts-ignore
        fetch.mockResponseOnce(discListingForProgramIdJson)

        const response = await loadFilteredDiscListings(key, 3)

        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/discs/with_program/3.json')
        expect(response.data).toEqual({
          data: [
            discListingForProgramIdData1,
            discListingForProgramIdData2
          ],
          paginationMetadata: defaultPaginationMetadata,
          filterMetadata: {
            key: key,
            id: 3,
            resultCount: 2
          }
        })
      })

      it('handles missing package data', async () => {
        // @ts-ignore
        fetch.mockResponseOnce(discListingForProgramIdWithNoPackageJson)

        const response = await loadFilteredDiscListings(key, 1)

        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/discs/with_program/1.json')
        expect(response.data).toEqual({
          data: [
            discListingForProgramIdWithNoPackageData,
          ],
          paginationMetadata: defaultPaginationMetadata,
          filterMetadata: {
            key: key,
            id: 1,
            resultCount: 1
          }
        })
      })

    })

    describe('with unhandled key', () => {

      it('returns an error', async () => {
        const returnVal = await loadFilteredDiscListings('foo', 3)
        expect(returnVal.isError()).toBeTruthy()
        expect(returnVal.error).toEqual('No known filter for key: foo')
      })

    })

  })

})
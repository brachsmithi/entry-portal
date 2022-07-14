import DiscFilterStrategy from './DiscFilterStrategy'
import { defaultPaginationMetadata } from '../models/PaginationMetadata'
import { discListingForProgramIdData1, discListingForProgramIdData2 } from '../testhelpers/DiscSearchJson'
import { FilterType } from '../services/FilterType'
import FilterData from '../models/FilterData'
import DataResponse from '../models/DataResponse'

describe('DiscFilterStrategy', () => {

  describe('filterAction', () => {

    const discSearchService = require('../services/DiscSearchService')
    discSearchService.loadFilteredDiscListings = jest.fn()

    it('uses the disc search service to retrieve results filtered on programs', async () => {
      const filterData: FilterData = {
        data: [
          discListingForProgramIdData1,
          discListingForProgramIdData2
        ],
        paginationMetadata: defaultPaginationMetadata,
        filterMetadata: {
          key: FilterType.Program,
          id: 1,
          resultCount: 2
        }
      }
      discSearchService.loadFilteredDiscListings.mockReturnValue(new DataResponse<FilterData>({
        data: filterData
      }))
      const response = await DiscFilterStrategy().filterAction(FilterType.Program, 1)
      expect(response.isError()).toBeFalsy()
      expect(response.data).toEqual(filterData)
      expect(discSearchService.loadFilteredDiscListings).toHaveBeenCalledWith(FilterType.Program, 1)
    })

  })

})
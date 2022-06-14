import DiscSearchStrategy from './DiscSearchStrategy'
import SearchTermResponse from '../models/SearchTermResponse'
import { defaultPaginationMetadata } from '../models/PaginationMetadata'
import { discListingForProgramIdData1, discListingForProgramIdData2 } from '../testhelpers/DiscSearchJson'
import FilterResponse from '../models/FilterResponse'
import { FilterType } from '../services/FilterType'
import FilterData from '../models/FilterData'

describe('DiscSearchStrategy', () => {

  describe('searchAction', () => {

    it('should return an error', async () => {
      const term = 'search term'
      const retVal: SearchTermResponse = await DiscSearchStrategy().searchAction(term)
      expect(retVal.isError()).toBeTruthy()
      expect(retVal.error).toEqual('This has not been implemented yet!')
    })

  })

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
      discSearchService.loadFilteredDiscListings.mockReturnValue(new FilterResponse({
        data: filterData
      }))
      const response = await DiscSearchStrategy().filterAction(FilterType.Program, 1)
      expect(response.isError()).toBeFalsy()
      expect(response.data).toEqual(filterData)
      expect(discSearchService.loadFilteredDiscListings).toHaveBeenCalledWith(FilterType.Program, 1)
    })

  })

})
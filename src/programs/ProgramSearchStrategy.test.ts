import { defaultPaginationMetadata } from '../models/PaginationMetadata'
import ProgramSearchStrategy from './ProgramSearchStrategy'
import SearchData from '../models/SearchData'
import { programListing1, programListing2 } from '../testhelpers/ProgramSearchJson'
import DataResponse from '../models/DataResponse'

describe('ProgramSearchStrategy', () => {

  const programSearchService = require('../services/ProgramSearchService')
  programSearchService.loadProgramSearchResults = jest.fn()

  it('should return an error', async () => {
    const searchTerm = 'cam'
    const searchData: SearchData = {
      data: [
          programListing1,
          programListing2
      ],
      searchMetadata: {
        searchTerm: searchTerm,
        resultCount: 2
      },
      paginationMetadata: defaultPaginationMetadata
    }
    programSearchService.loadProgramSearchResults.mockReturnValue(new DataResponse<SearchData>({
      data: searchData
    }))
    const response = await ProgramSearchStrategy().searchAction(searchTerm)
    expect(response.isError()).toBeFalsy()
    expect(response.data).toEqual(searchData)
    expect(programSearchService.loadProgramSearchResults).toHaveBeenCalledWith(searchTerm)
  })

})
import SearchData from "./SearchData"
import SearchTermResponse from "./SearchTermResponse"
import { defaultPaginationMetadata } from './PaginationMetadata'

describe('SearchTermResponse', () => {

  it ('holds search data', () => {
    const programs: SearchData = {
      data: [],
      searchMetadata: {
        searchTerm: 'moon',
        resultCount: 36
      },
      paginationMetadata: defaultPaginationMetadata
    }
    const response = new SearchTermResponse({data: programs})
    expect(response.isError()).toBeFalsy()
    expect(response?.data).toEqual(programs)
  })

  it ('holds error', () => {
    const err = 'i dunno, just an object'
    const response = new SearchTermResponse({error: err})
    expect(response.isError()).toBeTruthy()
    expect(response.error).toEqual(err)
  })

})
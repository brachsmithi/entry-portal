import PaginatedSearchResponse from './PaginatedSearchResponse'
import PaginatedData from "./PaginatedData"

describe('PaginatedSearchResponse', () => {

  it ('holds search data', () => {
    const programs: PaginatedData = {
      data: [],
      paginationMetadata: {
        totalPages: 345,
        currentPage: 7,
        nextPage: 8,
        previousPage: 6
      }
    }
    const response = new PaginatedSearchResponse({data: programs})
    expect(response.isError()).toBeFalsy()
    expect(response?.paginatedData).toEqual(programs)
  })

  it ('holds error', () => {
    const err = 'i dunno, just an object'
    const response = new PaginatedSearchResponse({error: err})
    expect(response.isError()).toBeTruthy()
    expect(response.error).toEqual(err)
  })

})
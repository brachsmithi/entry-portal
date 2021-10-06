import { PaginatedPrograms } from "./PaginatedPrograms"
import ProgramSearchResponse from './ProgramSearchResponse'

describe('SearchResponse', () => {

  it ('holds search data', () => {
    const programs: PaginatedPrograms = {
      paginationMetadata: {
        totalPages: 345,
        currentPage: 7
      }
    }
    const response = new ProgramSearchResponse({data: programs})
    expect(response.isError()).toBeFalsy()
    expect(response?.paginatedPrograms).toEqual(programs)
  })

  it ('holds error', () => {
    const err = 'i dunno, just an object'
    const response = new ProgramSearchResponse({error: err})
    expect(response.isError()).toBeTruthy()
    expect(response.error).toEqual(err)
  })

})
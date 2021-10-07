import loadPrograms from './ProgramSearchService'
import { PaginatedPrograms } from "../models/PaginatedPrograms";
import { totalPages, returnJson } from "../testhelpers/ProgramSearchJson";

describe('ProgramSearchService', () => {

  function expected(currentPage: number): PaginatedPrograms {
    return {
      paginationMetadata: {
        currentPage: currentPage,
        totalPages: totalPages
      }
    }
  }

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('loads first page of paginated program data from local service', async () => {
    const currentPage = 1
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    const response = await loadPrograms()

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/programs.json")
    expect(response.paginatedPrograms).toEqual(expected(currentPage))
  })

  it('loads requested page of paginated program data from local service', async () => {
    const currentPage = 45
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    const response = await loadPrograms(currentPage)

    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs.json?page=${currentPage}`)
    expect(response.paginatedPrograms).toEqual(expected(currentPage))
  })

})

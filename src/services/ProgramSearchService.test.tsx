import loadPrograms from './ProgramSearchService'
import { totalPages, returnJson } from "../testhelpers/ProgramSearchJson"
import PaginatedData from "../models/PaginatedData";

describe('ProgramSearchService', () => {

  function expected(currentPage: number): PaginatedData {
    return {
      data: [],
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
    expect(response.paginatedData).toEqual(expected(currentPage))
  })

  it('loads requested page of paginated program data from local service', async () => {
    const currentPage = 45
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    const response = await loadPrograms(currentPage)

    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs.json?page=${currentPage}`)
    expect(response.paginatedData).toEqual(expected(currentPage))
  })

})

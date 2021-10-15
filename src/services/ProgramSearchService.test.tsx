import loadPrograms from './ProgramSearchService'
import {
  totalPages,
  returnJson,
  programListing1,
  programListing2,
  programListing3
} from "../testhelpers/ProgramSearchJson"
import PaginatedData from "../models/PaginatedData"

describe('ProgramSearchService', () => {

  function expected(currentPage: number, nextPage: number, previousPage: number): PaginatedData {
    return {
      data: [
        programListing1,
        programListing2,
        programListing3
      ],
      paginationMetadata: {
        currentPage: currentPage,
        totalPages: totalPages,
        nextPage: nextPage,
        previousPage: previousPage
      }
    }
  }

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('loads first page of paginated program data from local service', async () => {
    const currentPage = 1
    const nextPage = 2
    const previousPage = 1
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    const response = await loadPrograms()

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/programs.json")
    expect(response.paginatedData).toEqual(expected(currentPage, nextPage, previousPage))
  })

  it('loads requested page of paginated program data from local service', async () => {
    const currentPage = 45
    const nextPage = 46
    const previousPage = 44
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    const response = await loadPrograms(currentPage)

    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs.json?page=${currentPage}`)
    expect(response.paginatedData).toEqual(expected(currentPage, nextPage, previousPage))
  })

  it('loads last page of paginated program data from local service', async () => {
    const currentPage = totalPages
    const nextPage = totalPages
    const previousPage = totalPages - 1
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    const response = await loadPrograms(currentPage)

    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs.json?page=${currentPage}`)
    expect(response.paginatedData).toEqual(expected(currentPage, nextPage, previousPage))
  })

})

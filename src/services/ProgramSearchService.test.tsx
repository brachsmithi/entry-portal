import loadPrograms from './ProgramSearchService'
import { totalPages, returnJson } from "../testhelpers/ProgramSearchJson"
import PaginatedData from "../models/PaginatedData";

describe('ProgramSearchService', () => {

  function expected(currentPage: number, nextPage: number): PaginatedData {
    return {
      data: [],
      paginationMetadata: {
        currentPage: currentPage,
        totalPages: totalPages,
        nextPage: nextPage
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
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    const response = await loadPrograms()

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/programs.json")
    expect(response.paginatedData).toEqual(expected(currentPage, nextPage))
  })

  it('loads requested page of paginated program data from local service', async () => {
    const currentPage = 45
    const nextPage = 46
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    const response = await loadPrograms(currentPage)

    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs.json?page=${currentPage}`)
    expect(response.paginatedData).toEqual(expected(currentPage, nextPage))
  })

  it('loads last page of paginated program data from local service', async () => {
    const currentPage = totalPages
    const nextPage = totalPages
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    const response = await loadPrograms(currentPage)

    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs.json?page=${currentPage}`)
    expect(response.paginatedData).toEqual(expected(currentPage, nextPage))
  })

})

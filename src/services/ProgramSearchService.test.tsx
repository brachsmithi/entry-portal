import loadProgramListings from './ProgramSearchService'
import {
  totalProgramPages,
  returnProgramListingJson,
  programListing1,
  programListing2,
  programListing3,
  programListing4
} from "../testhelpers/ProgramSearchJson"
import PaginatedData from "../models/PaginatedData"

describe('ProgramSearchService', () => {

  function expected(currentPage: number, nextPage: number, previousPage: number): PaginatedData {
    return {
      data: [
        programListing1,
        programListing2,
        programListing3,
        programListing4
      ],
      paginationMetadata: {
        currentPage: currentPage,
        totalPages: totalProgramPages,
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
    fetch.mockResponseOnce(returnProgramListingJson(currentPage))

    const response = await loadProgramListings()

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/programs.json")
    expect(response.paginatedData).toEqual(expected(currentPage, nextPage, previousPage))
  })

  it('loads requested page of paginated program data from local service', async () => {
    const currentPage = 45
    const nextPage = 46
    const previousPage = 44
    // @ts-ignore
    fetch.mockResponseOnce(returnProgramListingJson(currentPage))

    const response = await loadProgramListings(currentPage)

    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs.json?page=${currentPage}`)
    expect(response.paginatedData).toEqual(expected(currentPage, nextPage, previousPage))
  })

  it('loads last page of paginated program data from local service', async () => {
    const currentPage = totalProgramPages
    const nextPage = totalProgramPages
    const previousPage = totalProgramPages - 1
    // @ts-ignore
    fetch.mockResponseOnce(returnProgramListingJson(currentPage))

    const response = await loadProgramListings(currentPage)

    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs.json?page=${currentPage}`)
    expect(response.paginatedData).toEqual(expected(currentPage, nextPage, previousPage))
  })

})

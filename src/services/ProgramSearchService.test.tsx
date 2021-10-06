import loadPrograms from './ProgramSearchService'
import { PaginatedPrograms } from "../models/PaginatedPrograms";

describe('ProgramSearchService', () => {

  const totalPages = 346

  function returnJson(currentPage: number): string {
    return `
    {
      "pagination_metadata": {
        "total_programs": 5177,
        "current_programs": 3,
        "total_pages": ${totalPages},
        "programs_per_page": 3,
        "current_page": ${currentPage},
        "previous_page": ${currentPage === 1 ? 1 : currentPage - 1},
        "next_page": ${currentPage === totalPages ? totalPages: currentPage + 1}
      },
      "programs": [
        {
          "title": "The Cameraman's Revenge",
          "year": "1912",
          "version": "Alloy Orchestra",
          "series": []
        },
        {
          "title": "Camille",
          "year": "1921",
          "version": "",
          "series": []
        },
        {
          "title": "Camouflaged Destruction",
          "year": "1952",
          "version": "",
          "series": [
            "Radar Men from the Moon"
          ]
        }
      ]
    }
    `
  }

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

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000")
    expect(response).toEqual(expected(currentPage))
  })

  it('loads requested page of paginated program data from local service', async () => {
    const currentPage = 45
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(currentPage))

    const response = await loadPrograms(currentPage)

    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000?page=${currentPage}`)
    expect(response).toEqual(expected(currentPage))
  })

})

import loadPrograms from './program_search_service'
import { PaginatedPrograms } from "../models/PaginatedPrograms";

describe('ProgramSearchService', () => {

  const returnJson: string = `
    {
      "pagination_metadata": {
        "total_programs": 5177,
        "current_programs": 15,
        "total_pages": 346,
        "programs_per_page": 15,
        "current_page": 43,
        "previous_page": 42,
        "next_page": 44
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

  const expected: PaginatedPrograms = {
    paginationMetadata: {
      currentPage: 43,
      totalPages: 346
    }
  }

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('gathers program data from local service', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(returnJson)

    const response = await loadPrograms()

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000")
    expect(response).toEqual(expected)
  })

})

import { loadProgramDetails, loadProgramSearchResults } from './ProgramSearchService'
import {
  returnSearchListingJson,
  searchListing1,
  searchListing2,
  searchListing3
} from '../testhelpers/ProgramSearchJson'
import { programData2, programData3, programJson2, programJson3 } from '../testhelpers/ProgramJson'
import SearchData from '../models/SearchData'
import ProgramData from '../models/ProgramData'

describe('ProgramSearchService', () => {

  describe('loadProgramDetails', () => {

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    it('loads the requested program from local service', async () => {
      await expectLoadProgramDetailsToLoad(programJson2, programData2)
    })

    it('loads series for requested program', async () => {
      await expectLoadProgramDetailsToLoad(programJson3, programData3)
    })

    async function expectLoadProgramDetailsToLoad(json: string, expectedData: ProgramData) {
      // @ts-ignore
      fetch.mockResponseOnce(json)

      const response = await loadProgramDetails(expectedData.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs/${ expectedData.id }.json`)
      expect(response.programData).toEqual(expectedData)
    }

  })

  describe('loadProgramSearchResults', () => {

    function expected(searchTerm: string, currentPage: number, nextPage: number, previousPage: number): SearchData {
      return {
        data: [
          searchListing1,
          searchListing2,
          searchListing3
        ],
        searchMetadata: {
          searchTerm: searchTerm,
          resultCount: 3
        },
        paginationMetadata: {
          currentPage: currentPage,
          totalPages: 238,
          nextPage: nextPage,
          previousPage: previousPage
        }
      }
    }

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    it('defaults to loading first page of program data for search query from local service', async () => {
      const searchTerm = 'foo'
      const currentPage = 1
      const nextPage = 2
      const previousPage = 1
      // @ts-ignore
      fetch.mockResponseOnce(returnSearchListingJson(searchTerm, currentPage, nextPage, previousPage))

      const response = await loadProgramSearchResults(searchTerm)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs.json?search=${searchTerm}`)
      expect(response.data).toEqual(expected(searchTerm, currentPage, nextPage, previousPage))
    })

    it('loads requested page of paginated program data for search query from local service', async () => {
      const searchTerm = 'bar'
      const currentPage = 143
      const nextPage = 144
      const previousPage = 142
      // @ts-ignore
      fetch.mockResponseOnce(returnSearchListingJson(searchTerm, currentPage, nextPage, previousPage))

      const response = await loadProgramSearchResults(searchTerm, currentPage)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs.json?search=${searchTerm}&page=${currentPage}`)
      expect(response.data).toEqual(expected(searchTerm, currentPage, nextPage, previousPage))
    })

  })

})

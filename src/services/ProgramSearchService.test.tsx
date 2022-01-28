import loadProgramListings, { loadProgramDetails, loadProgramSearchResults } from './ProgramSearchService'
import {
  totalProgramPages,
  returnProgramListingJson,
  programListing1,
  programListing2,
  programListing3,
  programListing4, returnSearchListingJson, searchListing1, searchListing2, searchListing3
} from "../testhelpers/ProgramSearchJson"
import PaginatedData from "../models/PaginatedData"
import { programData2, programData3, programJson2, programJson3 } from "../testhelpers/ProgramJson"
import SearchData from "../models/SearchData"

describe('ProgramSearchService', () => {

  describe('loadProgramListings', () => {

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

  describe('loadProgramDetails', () => {

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    it('loads the requested program from local service', async () => {
      // @ts-ignore
      fetch.mockResponseOnce(programJson2)

      const response = await loadProgramDetails(programData2.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs/${programData2.id}.json`)
      expect(response.programData).toEqual(programData2)
    })

    it('loads series for requested program', async () => {
      // @ts-ignore
      fetch.mockResponseOnce(programJson3)

      const response = await loadProgramDetails(programData3.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs/${programData3.id}.json`)
      expect(response.programData).toEqual(programData3)
    })

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

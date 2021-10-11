import Paginator from './Paginator'
import { returnJson, totalPages } from "../testhelpers/ProgramSearchJson";
import loadPrograms from "../services/ProgramSearchService";
import { emptyPaginatedData } from "../models/PaginatedData";
import { defaultPaginationMetadata } from "../models/PaginationMetadata";

describe('Paginator', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('returns defaults when unloaded', () => {
    const paginator = new Paginator(loadPrograms)
    expect(paginator.currentPage()).toEqual(1)
    expect(paginator.totalPages()).toEqual(1)
  })

  it('returns values from data after next', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(1))
    const paginator = new Paginator(loadPrograms)
    let data = await paginator.next()

    expect(data).toEqual(expectedData(1, 2))
    expect(paginator.currentPage()).toEqual(1)
    expect(paginator.totalPages()).toEqual(totalPages)

    // @ts-ignore
    fetch.mockResponseOnce(returnJson(2))
    data = await paginator.next()

    expect(data).toEqual(expectedData(2, 3))
    expect(paginator.currentPage()).toEqual(2)
    expect(paginator.totalPages()).toEqual(totalPages)
  })

  function expectedData(currentPage: number, nextPage: number) {
    return {
      ...emptyPaginatedData,
      paginationMetadata: {
        ...defaultPaginationMetadata,
        currentPage: currentPage,
        totalPages: totalPages,
        nextPage: nextPage
      }
    }
  }

})

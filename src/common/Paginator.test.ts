import Paginator from './Paginator'
import { returnJson, totalPages } from "../testhelpers/ProgramSearchJson";
import loadPrograms from "../services/ProgramSearchService";

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

    expect(data.length).toEqual(0)
    expect(paginator.currentPage()).toEqual(1)
    expect(paginator.totalPages()).toEqual(totalPages)

    // @ts-ignore
    fetch.mockResponseOnce(returnJson(2))
    data = await paginator.next()

    expect(data.length).toEqual(0)
    expect(paginator.currentPage()).toEqual(2)
    expect(paginator.totalPages()).toEqual(totalPages)
  })

})

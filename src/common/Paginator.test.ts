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

  it('returns values from data after loading', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(1))
    const paginator = new Paginator(loadPrograms)
    const data = await paginator.load()

    expect(data.length).toEqual(0)
    expect(paginator.currentPage()).toEqual(1)
    expect(paginator.totalPages()).toEqual(totalPages)
  })

  it('returns values from data after next', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(returnJson(1))
    const paginator = new Paginator(loadPrograms)
    await paginator.load()

    // @ts-ignore
    fetch.mockResponseOnce(returnJson(2))
    const data = await paginator.next()

    expect(data.length).toEqual(0)
    expect(paginator.currentPage()).toEqual(2)
    expect(paginator.totalPages()).toEqual(totalPages)
  })

})

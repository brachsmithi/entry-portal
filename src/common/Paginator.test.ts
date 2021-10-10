import Paginator from './Paginator'

describe('Paginator', () => {

  it('returns defaults when unloaded', () => {
    const paginator = new Paginator()
    expect(paginator.currentPage()).toEqual(1)
    expect(paginator.totalPages()).toEqual(1)
  })

})

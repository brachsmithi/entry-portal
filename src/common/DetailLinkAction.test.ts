import { makeActionForRoot } from './DetailLinkAction'

describe('DetailLinkAction', () => {

  const { location } = window

  beforeAll(() => {
    // @ts-ignore
    delete window.location
    // @ts-ignore
    window.location = {
      href: ''
    }
  })

  it('loads the detail page for the model type', () => {
    const action = makeActionForRoot('/foo')
    action(5)
    expect(window.location.href).toEqual('/foo/5')
  })

  afterAll(() => {
    window.location = location
  })

})
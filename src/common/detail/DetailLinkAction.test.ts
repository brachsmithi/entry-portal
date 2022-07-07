import { makeActionForRoot } from './DetailLinkAction'

describe('DetailLinkAction', () => {

  describe('loadAction', () => {

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
      action.loadAction(5)
      expect(window.location.href).toEqual('/foo/5')
    })

    afterAll(() => {
      window.location = location
    })

  })

  describe('rootPath', () => {

    it('returns the root path entered', () => {
      const action = makeActionForRoot('/foo')
      expect(action.rootPath).toEqual('/foo')
    })

  })

})
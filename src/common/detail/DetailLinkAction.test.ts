import { makeActionForRoot } from './DetailLinkAction'
import LinkGenerator from '../nav/LinkGenerator'

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
      const action = makeActionForRoot(new FooLinkGenerator())
      action.loadAction(5)
      expect(window.location.href).toEqual('/foo/5')
    })

    afterAll(() => {
      window.location = location
    })

  })

})

class FooLinkGenerator extends LinkGenerator {

  rootPath(): string {
    return '/foo'
  }

}
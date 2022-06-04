import { personData1, personJson1, personData2, personJson2 } from '../testhelpers/PersonJson'
import { loadPersonDetails } from './PersonSearchService'

describe('PersonSearchService', () => {

  describe('loadPersonDetails', () => {

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    it('loads the requested person from local service', async () => {
      // @ts-ignore
      fetch.mockResponseOnce(personJson1)

      const response = await loadPersonDetails(personData1.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/persons/${personData1.id}.json`)
      expect(response.personData).toEqual(personData1)
    })

    it('loads aliases for requested person', async () => {
      // @ts-ignore
      fetch.mockResponseOnce(personJson2)

      const response = await loadPersonDetails(personData2.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/persons/${personData2.id}.json`)
      expect(response.personData).toEqual(personData2)
    })

  })

})
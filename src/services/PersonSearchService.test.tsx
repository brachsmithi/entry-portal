import { personData, personJson, personWithAliasesData, personWithAliasesJson } from '../testhelpers/PersonJson'
import { loadPersonDetails } from './PersonSearchService'

describe('PersonSearchService', () => {

  describe('loadPersonDetails', () => {

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    it('loads the requested person from local service', async () => {
      // @ts-ignore
      fetch.mockResponseOnce(personJson)

      const response = await loadPersonDetails(personData.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/persons/${personData.id}.json`)
      expect(response.personData).toEqual(personData)
    })

    it('loads aliases for requested person', async () => {
      // @ts-ignore
      fetch.mockResponseOnce(personWithAliasesJson)

      const response = await loadPersonDetails(personWithAliasesData.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/persons/${personWithAliasesData.id}.json`)
      expect(response.personData).toEqual(personWithAliasesData)
    })

  })

})
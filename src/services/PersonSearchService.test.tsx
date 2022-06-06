import {
  personData,
  personJson,
  personWithAliasesData,
  personWithAliasesJson,
  personWithProgramsInSeriesData, personWithProgramsInSeriesJson
} from '../testhelpers/PersonJson'
import { loadPersonDetails } from './PersonSearchService'
import PersonData from '../models/PersonData'

describe('PersonSearchService', () => {

  describe('loadPersonDetails', () => {

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    it('correctly loads person', async () => {
      await expectLoadPersonDetailsToLoad(personJson, personData)
    })

    it('correctly loads person with aliases', async () => {
      await expectLoadPersonDetailsToLoad(personWithAliasesJson, personWithAliasesData)
    })

    it('correctly loads person with program series', async () => {
      await expectLoadPersonDetailsToLoad(personWithProgramsInSeriesJson, personWithProgramsInSeriesData)
    })

    async function expectLoadPersonDetailsToLoad(json: string, expectedData: PersonData) {
      // @ts-ignore
      fetch.mockResponseOnce(json)

      const response = await loadPersonDetails(expectedData.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/persons/${ expectedData.id }.json`)
      expect(response.personData).toEqual(expectedData)
    }

  })

})
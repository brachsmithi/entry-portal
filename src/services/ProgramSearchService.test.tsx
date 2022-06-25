import { loadProgramDetails } from './ProgramSearchService'
import { programData2, programData3, programJson2, programJson3 } from '../testhelpers/ProgramJson'
import ProgramData from '../models/ProgramData'

describe('ProgramSearchService', () => {

  describe('loadProgramDetails', () => {

    beforeEach(() => {
      // @ts-ignore
      fetch.resetMocks()
    })

    it('loads the requested program from local service', async () => {
      await expectLoadProgramDetailsToLoad(programJson2, programData2)
    })

    it('loads series for requested program', async () => {
      await expectLoadProgramDetailsToLoad(programJson3, programData3)
    })

    async function expectLoadProgramDetailsToLoad(json: string, expectedData: ProgramData) {
      // @ts-ignore
      fetch.mockResponseOnce(json)

      const response = await loadProgramDetails(expectedData.id)

      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/programs/${ expectedData.id }.json`)
      expect(response.programData).toEqual(expectedData)
    }

  })

})

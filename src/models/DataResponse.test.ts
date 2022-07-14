import PersonData from './PersonData'
import PackageData from './PackageData'
import DiscData from './DiscData'
import { personWithAliasesData } from '../testhelpers/PersonJson'
import DataResponse from './DataResponse'

describe('DataResponse', () => {

  describe('received data', () => {

    let data: PersonData
    let response: DataResponse<PersonData>

    beforeEach(() => {
      data = personWithAliasesData
      response = new DataResponse({data: data})
    })

    it('provides the given data', () => {
      expect(response.data).toEqual(data)
    })

    it('does not report an error', () => {
      expect(response.isError()).toBeFalsy()
    })

    it('does not have a defined error', () => {
      expect(response.error).toBeUndefined()
    })

  })

  describe('received error', () => {

    let error: string
    let response: DataResponse<PackageData>

    beforeEach(() => {
      error = 'things are rotten'
      response = new DataResponse<PackageData>({error: error})
    })

    it ('reports the error', () => {
      expect(response.isError()).toBeTruthy()
    })

    it('provides the error', () => {
      expect(response.error).toEqual(error)
    })

    it('does not have defined data', () => {
      expect(response.data).toBeUndefined()
    })

  })

  describe('does not have data or error', () => {

    let response: DataResponse<DiscData>

    beforeEach(() => {
      response = new DataResponse<DiscData>({})
    })

    it ('reports an error', () => {
      expect(response.isError()).toBeTruthy()
    })

    it('provides a default error', () => {
      expect(response.error).toEqual('no explicit error provided')
    })

    it('does not have defined data', () => {
      expect(response.data).toBeUndefined()
    })

  })

})
import PersonData, { emptyPersonData } from './PersonData'
import { personWithAliasesData } from '../testhelpers/PersonJson'
import PersonResponse from './PersonResponse'

describe('PersonResponse', () => {

  it ('holds person data', () => {
    const person: PersonData = personWithAliasesData
    const response = new PersonResponse({data: person})
    expect(response.isError()).toBeFalsy()
    expect(response?.personData).toEqual(person)
  })

  it ('holds error', () => {
    const err = 'i dunno, just an object'
    const response = new PersonResponse({error: err})
    expect(response.isError()).toBeTruthy()
    expect(response.error).toEqual(err)
    expect(response.personData).toEqual(emptyPersonData)
  })

})
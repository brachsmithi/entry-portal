import PersonData, { emptyPersonData } from './PersonData'

export default class PersonResponse {
  personData: PersonData
  error: string | undefined;

  constructor(input: { data?: PersonData, error?: string }) {
    this.personData = input.data ?? emptyPersonData
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}
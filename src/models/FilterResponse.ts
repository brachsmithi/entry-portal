import FilterData, { emptyFilterData } from './FilterData'

export default class FilterResponse {
  data: FilterData
  error: string | undefined

  constructor(input: { data?: FilterData, error?: string }) {
    this.data = input.data ?? emptyFilterData
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}
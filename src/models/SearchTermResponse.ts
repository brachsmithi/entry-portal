import SearchData, { emptySearchData } from "./SearchData"

export default class SearchTermResponse {
  data: SearchData
  error: string | undefined

  constructor(input: { data?: SearchData, error?: string }) {
    this.data = input.data ?? emptySearchData
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}
import PaginatedData, { emptyPaginatedData } from "./PaginatedData"

export default class PaginatedSearchResponse {
  paginatedData: PaginatedData;
  error: string | undefined;

  constructor(input: { data?: PaginatedData, error?: string }) {
    this.paginatedData = input.data ?? emptyPaginatedData
    this.error = input.error
  }

  isError() {
    return this.error !== undefined
  }
}
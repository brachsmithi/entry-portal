import PaginationMetadata, { defaultPaginationMetadata } from "../models/PaginationMetadata"
import SearchResponse from "../models/SearchResponse"
import { emptyPaginatedData } from "../models/PaginatedData"

export interface Paginatable {
  currentPage(): number
  totalPages(): number
  next(): Promise<Array<unknown>>
}

export default class Paginator implements Paginatable {

  private readonly loadMethod: (page?: number) => Promise<SearchResponse>
  private paginationMetadata: PaginationMetadata

  constructor(loadMethod: (page?: number) => Promise<SearchResponse>) {
    this.loadMethod = loadMethod
    this.paginationMetadata = defaultPaginationMetadata
  }

  currentPage() {
    return this.paginationMetadata.currentPage
  }

  totalPages() {
    return this.paginationMetadata.totalPages
  }

  async next(): Promise<Array<unknown>> {
    return await this.loadMethod(this.paginationMetadata.nextPage)
        .then((response: SearchResponse) => {
          return response.paginatedData ?? emptyPaginatedData
        })
        .then((paginatedData) => {
          this.paginationMetadata = paginatedData.paginationMetadata
          return paginatedData.data
        })
  }
}
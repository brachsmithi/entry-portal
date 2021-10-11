import PaginationMetadata, { defaultPaginationMetadata } from "../models/PaginationMetadata"
import SearchResponse from "../models/SearchResponse"
import PaginatedData, { emptyPaginatedData } from "../models/PaginatedData"

export interface Pageable {
  currentPage(): number
  totalPages(): number
  next(): Promise<PaginatedData>
}

export default class Paginator implements Pageable {

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

  async next(): Promise<PaginatedData> {
    return await this.loadMethod(this.paginationMetadata.nextPage)
        .then((response: SearchResponse) => {
          return response.paginatedData ?? emptyPaginatedData
        })
        .then((paginatedData) => {
          this.paginationMetadata = paginatedData.paginationMetadata
          return paginatedData
        })
  }
}
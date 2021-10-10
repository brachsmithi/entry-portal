import ProgramSearchResponse from "../models/ProgramSearchResponse"
import { emptyPaginatedPrograms } from "../models/PaginatedPrograms"
import PaginationMetadata, { defaultPaginationMetadata } from "../models/PaginationMetadata"

export default class Paginator {

  private readonly loadMethod: (page?: number) => Promise<ProgramSearchResponse>
  private paginationMetadata: PaginationMetadata

  constructor(loadMethod: (page?: number) => Promise<ProgramSearchResponse>) {
    this.loadMethod = loadMethod
    this.paginationMetadata = defaultPaginationMetadata
  }

  currentPage() {
    return 1
  }

  totalPages() {
    return this.paginationMetadata.totalPages
  }

  async load() {
    return await this.loadMethod()
        .then((response: ProgramSearchResponse) => {
          return response.paginatedPrograms ?? emptyPaginatedPrograms
        })
        .then((paginatedData) => {
          this.paginationMetadata = paginatedData.paginationMetadata
          return []
        })
  }
}
import { Paginatable } from "../common/Paginator"
import PaginationMetadata from "../models/PaginationMetadata"

export default class FakePaginator implements Paginatable {
  private metadata: PaginationMetadata

  constructor(metadata: PaginationMetadata) {
    this.metadata = metadata
  }

  currentPage(): number {
    return this.metadata.currentPage;
  }

  async next(): Promise<Array<unknown>> {
    this.metadata = {
      ...this.metadata,
      currentPage: this.currentPage() + 1
    }
    return Promise.resolve([]);
  }

  totalPages(): number {
    return this.metadata.totalPages;
  }

}
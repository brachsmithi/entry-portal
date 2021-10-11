import { Pageable } from "../common/Paginator"
import PaginationMetadata from "../models/PaginationMetadata"
import PaginatedData, { emptyPaginatedData } from "../models/PaginatedData";

export default class FakePaginator implements Pageable {
  private metadata: PaginationMetadata

  constructor(metadata: PaginationMetadata) {
    this.metadata = metadata
  }

  currentPage(): number {
    return this.metadata.currentPage;
  }

  async next(): Promise<PaginatedData> {
    this.metadata = {
      ...this.metadata,
      currentPage: this.currentPage() + 1
    }
    return Promise.resolve(
        {
          ...emptyPaginatedData,
          paginationMetadata: {...this.metadata}
        }
    );
  }

  totalPages(): number {
    return this.metadata.totalPages;
  }

}
import PaginationMetadata, { defaultPaginationMetadata } from "./PaginationMetadata";

export default interface PaginatedData {
  data: Array<unknown>
  paginationMetadata: PaginationMetadata
}

export const emptyPaginatedData: PaginatedData = {
  data: [],
  paginationMetadata: defaultPaginationMetadata
}
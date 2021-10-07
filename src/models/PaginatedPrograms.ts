import PaginationMetadata, { defaultPaginationMetadata } from "./PaginationMetadata";

export interface PaginatedPrograms {
  paginationMetadata: PaginationMetadata
}

export const emptyPaginatedPrograms: PaginatedPrograms = {
  paginationMetadata: defaultPaginationMetadata
}
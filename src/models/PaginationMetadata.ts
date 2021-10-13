export default interface PaginationMetadata {
  totalPages: number,
  currentPage: number,
  nextPage: number,
  previousPage: number
}

export const defaultPaginationMetadata: PaginationMetadata = {
  totalPages: 1,
  currentPage: 1,
  nextPage: 1,
  previousPage: 1
}
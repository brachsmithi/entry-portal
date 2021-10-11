export default interface PaginationMetadata {
  totalPages: number,
  currentPage: number,
  nextPage: number
}

export const defaultPaginationMetadata = {
  totalPages: 1,
  currentPage: 1,
  nextPage: 1
}
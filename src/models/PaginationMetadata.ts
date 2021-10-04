export default interface PaginationMetadata {
  totalPages: number,
  currentPage: number
}

export const defaultPaginationMetadata = {
  totalPages: 1,
  currentPage: 1
}
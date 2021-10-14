import PaginationMetadata, { defaultPaginationMetadata } from "./PaginationMetadata"
import { ListingData } from "./ListingData"

export default interface PaginatedData {
  data: Array<ListingData>
  paginationMetadata: PaginationMetadata
}

export const emptyPaginatedData: PaginatedData = {
  data: [],
  paginationMetadata: defaultPaginationMetadata
}
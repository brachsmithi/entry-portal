import SearchMetadata, { defaultSearchMetadata } from "./SearchMetadata"
import { ListingData } from "./ListingData"
import PaginationMetadata, { defaultPaginationMetadata } from "./PaginationMetadata"

export default interface SearchData {
  data: Array<ListingData>
  searchMetadata: SearchMetadata
  paginationMetadata: PaginationMetadata
}

export const emptySearchData: SearchData = {
  data: [],
  searchMetadata: defaultSearchMetadata,
  paginationMetadata: defaultPaginationMetadata
}
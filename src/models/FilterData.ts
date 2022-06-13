import { ListingData } from "./ListingData"
import PaginationMetadata, { defaultPaginationMetadata } from './PaginationMetadata'
import FilterMetadata, { defaultFilterMetadata } from './FilterMetadata'

export default interface FilterData {
  data: Array<ListingData>
  searchMetadata: FilterMetadata
  paginationMetadata: PaginationMetadata
}

export const emptyFilterData: FilterData = {
  data: [],
  searchMetadata: defaultFilterMetadata,
  paginationMetadata: defaultPaginationMetadata
}
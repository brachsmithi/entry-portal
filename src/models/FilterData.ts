import { ListingData } from "./ListingData"
import PaginationMetadata, { defaultPaginationMetadata } from './PaginationMetadata'
import FilterMetadata, { defaultFilterMetadata } from './FilterMetadata'

export default interface FilterData {
  data: Array<ListingData>
  filterMetadata: FilterMetadata
  paginationMetadata: PaginationMetadata
}

export const emptyFilterData: FilterData = {
  data: [],
  filterMetadata: defaultFilterMetadata,
  paginationMetadata: defaultPaginationMetadata
}
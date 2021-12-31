import SearchMetadata, { defaultSearchMetadata } from "./SearchMetadata"
import { ListingData } from "./ListingData"

export default interface SearchData {
  data: Array<ListingData>
  searchMetadata: SearchMetadata
}

export const emptySearchData: SearchData = {
  data: [],
  searchMetadata: defaultSearchMetadata
}
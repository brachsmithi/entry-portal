import DataResponse from './DataResponse'
import SearchData from './SearchData'

export default interface FilterStrategy {
  filterAction: (filterTerm: string) => Promise<DataResponse<SearchData>>
}
import DataResponse from './DataResponse'
import SearchData from './SearchData'

export default interface SearchStrategy {
  searchAction: (searchTerm: string) => Promise<DataResponse<SearchData>>
}
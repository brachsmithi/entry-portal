import SearchTermResponse from './SearchTermResponse'
import FilterResponse from './FilterResponse'

export default interface SearchStrategy {
  searchAction: (searchTerm: string) => Promise<SearchTermResponse>
  filterAction: (key: string, id: number) => Promise<FilterResponse>
  loadAction: (id: number) => void
  rootPath: string
}
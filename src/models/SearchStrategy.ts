import SearchTermResponse from './SearchTermResponse'
import FilterResponse from './FilterResponse'
import { FilterType } from '../services/FilterType'

export default interface SearchStrategy {
  searchAction: (searchTerm: string) => Promise<SearchTermResponse>
  filterAction: (key: FilterType, id: number) => Promise<FilterResponse>
  loadAction: (id: number) => void
  rootPath: string
}
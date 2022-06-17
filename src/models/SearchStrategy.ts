import SearchTermResponse from './SearchTermResponse'

export default interface SearchStrategy {
  searchAction: (searchTerm: string) => Promise<SearchTermResponse>
}
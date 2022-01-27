import SearchTermResponse from "./SearchTermResponse"

export default interface SearchStrategy {
  searchAction: (searchTerm: string) => Promise<SearchTermResponse>
  loadAction: (id: number) => void
  setSearchResponse: (response: SearchTermResponse) => void
}
export default interface SearchMetadata {
  searchTerm: String,
  resultCount: number
}

export const defaultSearchMetadata: SearchMetadata = {
  searchTerm: '',
  resultCount: 0
}
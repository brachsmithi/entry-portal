export default interface FilterMetadata {
  key: String,
  id: number,
  resultCount: number
}

export const defaultFilterMetadata: FilterMetadata = {
  key: '',
  id: 0,
  resultCount: 0
}
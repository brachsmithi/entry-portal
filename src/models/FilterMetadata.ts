import { FilterType } from '../services/FilterType'

export default interface FilterMetadata {
  key: FilterType,
  id: number,
  resultCount: number
}

export const defaultFilterMetadata: FilterMetadata = {
  key: FilterType.None,
  id: 0,
  resultCount: 0
}
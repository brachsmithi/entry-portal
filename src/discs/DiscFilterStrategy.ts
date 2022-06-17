import { loadFilteredDiscListings } from '../services/DiscSearchService'
import { FilterType } from '../services/FilterType'
import FilterStrategy from '../models/FilterStrategy'

export default function DiscFilterStrategy(): FilterStrategy {
  return {
    filterAction: (key: FilterType, id: number) => {
      return loadFilteredDiscListings(key, id)
    }
  }
}
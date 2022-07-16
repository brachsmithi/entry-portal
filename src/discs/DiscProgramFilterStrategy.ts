import FilterStrategy from '../models/FilterStrategy'
import { loadProgramSearchResults } from '../services/ProgramSearchService'

export default function DiscProgramFilterStrategy(): FilterStrategy {
  return {
    filterAction: (filterTerm: string) => {
      return loadProgramSearchResults(filterTerm)
    }
  }
}
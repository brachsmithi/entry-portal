import SearchStrategy from '../models/SearchStrategy'
import { loadProgramSearchResults } from '../services/ProgramSearchService'

export default function ProgramSearchStrategy(): SearchStrategy {
  return {
    searchAction: (searchTerm: string) => {
      return loadProgramSearchResults(searchTerm)
    }
  }
}
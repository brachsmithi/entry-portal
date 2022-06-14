import SearchStrategy from '../models/SearchStrategy'
import { loadProgramSearchResults } from '../services/ProgramSearchService'
import FilterResponse from '../models/FilterResponse'
import { FilterType } from '../services/FilterType'

export default function ProgramSearchStrategy(): SearchStrategy {
  const path = '/programs'
  return {
    searchAction: (searchTerm: string) => {
      return loadProgramSearchResults(searchTerm)
    },
    filterAction: (_: FilterType, __: number) => {
      return Promise.resolve(new FilterResponse({
        error: 'This has not been implemented yet!'
      }))
    },
    loadAction: (id: number) => {
      window.location.href = `${path}/${id}`
    },
    rootPath: path
  }
}
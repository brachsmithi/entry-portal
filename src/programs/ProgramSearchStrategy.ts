import SearchStrategy from "../models/SearchStrategy"
import { loadProgramSearchResults } from "../services/ProgramSearchService"

export default function ProgramSearchStrategy(): SearchStrategy {
  const path = '/programs'
  return {
    searchAction: (searchTerm: string) => {
      return loadProgramSearchResults(searchTerm)
    },
    loadAction: (id: number) => {
      window.location.href = `${path}/${id}`
    },
    rootPath: path
  }
}
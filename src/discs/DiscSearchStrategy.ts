import SearchStrategy from '../models/SearchStrategy'
import SearchTermResponse from '../models/SearchTermResponse'
import { loadFilteredDiscListings } from '../services/DiscSearchService'
import { FilterType } from '../services/FilterType'

export default function DiscSearchStrategy(): SearchStrategy {
  const path = '/discs'
  return {
    searchAction: (_: string) => {
      return Promise.resolve(new SearchTermResponse({
        error: 'This has not been implemented yet!'
      }))
    },
    filterAction: (key: FilterType, id: number) => {
      return loadFilteredDiscListings(key, id)
    },
    loadAction: (id: number) => {
      window.location.href = `${path}/${id}`
    },
    rootPath: path
  }
}
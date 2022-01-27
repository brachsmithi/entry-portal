import SearchStrategy from "../models/SearchStrategy"
import SearchTermResponse from "../models/SearchTermResponse"

export default function ProgramSearchStrategy(): SearchStrategy {
  return {
    searchAction: (_: string) => {
      return Promise.resolve(new SearchTermResponse({}))
    },
    loadAction: (_: number) => {},
    rootPath: '/'
  }
}
import ProgramSearchResponse from "../models/ProgramSearchResponse"
import SearchResponse from "../models/SearchResponse"

export default async function loadPrograms(page?: number): Promise<SearchResponse> {
  let url = 'http://localhost:3000/programs.json'
  if (page) url += `?page=${page}`
  const response = await fetch(url)
      .then(response => response.json())
  return new ProgramSearchResponse(
      {
        data: {
          data: [],
          paginationMetadata: {
            currentPage: response.pagination_metadata.current_page,
            nextPage: response.pagination_metadata.next_page,
            totalPages: response.pagination_metadata.total_pages
          }
        }
      }
  )
}
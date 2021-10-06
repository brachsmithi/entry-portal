import ProgramSearchResponse from "../models/ProgramSearchResponse";

export default async function loadPrograms(page?: number): Promise<ProgramSearchResponse> {
  let url = 'http://localhost:3000'
  if (page) url += `?page=${page}`
  const response = await fetch(url)
      .then(response => response.json())
  return new ProgramSearchResponse(
      {
        data: {
          paginationMetadata: {
            currentPage: response.pagination_metadata.current_page,
            totalPages: response.pagination_metadata.total_pages
          }
        }
      }
  )
}
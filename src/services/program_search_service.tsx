import { PaginatedPrograms } from "../models/PaginatedPrograms"

export default async function loadPrograms(): Promise<PaginatedPrograms> {
  const response = await fetch("http://localhost:3000")
      .then(response => response.json())
  return {
    paginationMetadata: {
      currentPage: response.pagination_metadata.current_page,
      totalPages: response.pagination_metadata.total_pages
    }
  }
}